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

  /*start(){
    //toBuy();
    //fulfill();
  }*/

function start() {
    connection.query ("SELECT * FROM products", function(err, res) {
      if(err) throw err;
      console.log(res);
      console.log("       ");
      console.log(b("Welcome! The following items are what we currently have in stock."));
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
        console.log(answer);
      });
    });
  }