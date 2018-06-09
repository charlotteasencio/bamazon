var inquirer = require('inquirer');
var mysql = require('mysql');
var dotenv = require('dotenv').config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password, //FIX DOTENV SO YOU DON'T UPLOAD THIS
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
    connection.query ("SELECT * FROM products", function(err, res){
      if(err) throw err;
      console.log("Welcome! The following items are what we currently have in stock.");
      console.log("       ");
      console.log("ID" + " " + "PRODUCT" + "     " + "PRICE");
      for (i = 0; i<res.length; i++) {
      console.log(res[i].id + ") " + res[i].product_name + ", " + "$ " + res[i].price);
      console.log("--------------------------------");
      }
      toBuy();
    });
}

function toBuy() {
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
  .then(function(answer) {
    console.log(answer);
  });
}
