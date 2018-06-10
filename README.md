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

[![units.png](https://s15.postimg.cc/jtgle713f/units.png)](https://postimg.cc/image/pueab9npj/)

If there is a sufficient amout of that item, the user is shown the total they owe, the database is updated, and the user is asked if they would like to make any more purchases. 

[![total.png](https://s15.postimg.cc/5n0uj088r/total.png)](https://postimg.cc/image/f7kh5vxkn/)

If they want to continue making purchases, they choose "y" and they program will run again. If they choose "n" then the program will send a "Goodbye!" message and close the connection.

[![more.png](https://s15.postimg.cc/ypf4lvzob/more.png)](https://postimg.cc/image/dsiwh81nb/)

[![close1.png](https://s15.postimg.cc/kizdqobyj/close1.png)](https://postimg.cc/image/8h3zwj2pz/)

If the user attemps to order more than the amout available of a particular item, they will be informed of the amount available and asked if they would like to try again. If they select "y" then the program runs again. If they select "n" then a "Goodbye!" message is displayed and the concetion is closed. 

[![tryagain.png](https://s15.postimg.cc/3v7vo7c23/tryagain.png)](https://postimg.cc/image/wkurkug1z/)

[![close.png](https://s15.postimg.cc/8tve2r30b/close.png)](https://postimg.cc/image/ly0yffv1z/)
