# Bamazon

This is a program created to function like an example online marketplace in the command line.

## Technologies Used

1. MySql
1. Node.js
1. npm packages:
    * inquirer
    * chalk
    * mysql
    * dotenv

## How to Use

Upon cloning the repo and running "node bamazonCustomer" in the command line, the user will be shown all the items that are currently in stock in the store. They will also be promted to provide the ID number for the item they want to purchase. 

[![open.png](https://s15.postimg.cc/cq8pyhnx7/open.png)](https://postimg.cc/image/ofcpmgevr/)

Once the ID Number is selected, the user is prompted to enter how many units of that item they want to purchase. 

image

If there is a sufficient amout of that item, the user is shown the total they owe, the database is updated, and the user is asked if they would like to make any more purchases. 

image

If they want to continue making purchases, they choose "y" and they program will run again. If they choose "n" then the program will send a "Goodbye!" message and close the connection.

image

image

If the user attemps to order more than the amout available of a particular item, they will be informed of the amount available and asked if they would like to try again. If they select "y" then the program runs again. If they select "n" then a "Goodbye!" message is displayed and the concetion is closed. 

image

image
