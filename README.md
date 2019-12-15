# BAMAZON

## Challenge #1: Customer View (Minimum Requirement)

    1.  Create a MySQL Database called bamazon.

    2.  Then create a Table inside of that database called products.
        The products table should have each of the following columns:

        a.  item_id (unique id for each product)
        b.  product_name (Name of product)
        c.  department_name
        d.  price (cost to customer)
        e.  stock_quantity (how much of the product is available in stores)

    4.  Populate this database with around 10 different products.

    5.  Then create a Node application called bamazonCustomer.js. Running this application will
        a.  first display all of the items available. Include the ids, names, and prices of products 
        for sale.

    6.  The app should then prompt users with two messages.
        I.  The first should ask them the ID of the product they would like to buy.
        II. The second message should ask how many units of the product they would like to buy.

    9.  Once the customer has placed the order, your application should check if your store has 
    enough of the product to meet the customer's request.

    10. If not, the app should log a phrase like Insufficient quantity!, and then prevent the order 
    from going through.

    However, if your store does have enough of the product, you should fulfill the customer's order.

    11. This means updating the SQL database to reflect the remaining quantity.
    Once the update goes through, show the customer the total cost of their purchase.

## Technologies used:

    > mySql
    > inquirer
    > dotenv
    > chalk

## Installation instructions:

    run command

    >npm install

    Copy your 'localhost', 'user' and 'password' information to .env file

### bamazonCustomer (Customer's view)  
 https://drive.google.com/open?id=13T5Gi0QziNdSTk5xvf4k8QiYwo-9GOvQ

### bamazonManager (Manager's View)
https://drive.google.com/open?id=1uFshkTAGt3ObqzJx_nTCACgVV6nUV6Ji
