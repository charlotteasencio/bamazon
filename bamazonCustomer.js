var inquirer = require('inquirer');
var mysql = require('mysql');
require('dotenv').config();
const {g, b, gr ,r ,y} = require("./console");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password, 
    database: "bamazon"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
        start();
  });

function start() {
    connection.query ("SELECT * FROM products", function(err, res) {
      if(err) throw err;
      console.log("       ");
      console.log("==========================================================================");
      console.log(b("Welcome! The following items are what we currently have in stock."));
      console.log("==========================================================================");
      console.log("       ");
      console.log(g("ID" + " " + "PRODUCT" + "     " + "PRICE"));
      for (i = 0; i<res.length; i++) {
      console.log(res[i].id + ") " + res[i].product_name.toUpperCase() + " - " + "$ " + res[i].price);
      console.log("--------------------------------");
      }
      inquirer
      .prompt([
        {
          name: "item",
          type: "input",
          message: "What is the ID Number of the product you would like to buy?"
        },
        {
          name: "unit",
          type: "input",
          message: "How many units would you like to buy?"
        }
      ])
      .then(function(answer){
        connection.query("SELECT * FROM products WHERE id=?", answer.item, function(err, res) {
          if (err) throw err;

          for (var i = 0; i < res.length; i++) {

              if (answer.unit > res[i].stock_quantity) {

                  console.log("***************************************************************");
                  console.log(r("We only have " + res[i].stock_quantity + " in stock."));
                  console.log("***************************************************************");
                  inquirer
                  .prompt([
                    {
                      name: "again",
                      type: "confirm",
                      message: "Would you like to try again?"
                    }
                  ]).then(function(reply){
                    if (reply.again) {
                      start();
                    }else {
                      console.log("Goodbye!");
                      connection.end();
                    }
                  });

              } else {
                  //list item information for user for confirm prompt
                  console.log("============================================================================");
                  console.log(y("Success! " + res[i].product_name + " is in stock in the " + res[i].department_name + " department."));
                  console.log("     ");
                  console.log(g("Your total is $" + res[i].price * answer.unit));

                  /*var newStock = (res[i].stock_quantity - answer.unit);
                  console.log(newStock);*/
                  connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                      {
                        stock_quantity: res[i].stock_quantity - answer.unit
                      },
                      {
                        id: answer.item
                      }
                    ],
                    function(error) {
                      if (error) throw err;
                    }
                  );
                  inquirer
                  .prompt([
                    {
                      name: "again",
                      type: "confirm",
                      message: "Would you like to order more items?"
                    }
                  ]).then(function(more){
                    if (more.again) {
                      start();
                    }else {
                      console.log("Goodbye!");
                      connection.end();
                    }
                  });
                }
                }
          });
      });
  });
}