require("dotenv").config();
const chalk = require("chalk");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "bamazon"
});

connection.connect(err => {
    if (err) console.log(err);
    // console.log("success" + connection.threadId);
});

//===========================================================

showAllProducts = () => {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) console.log(err);
        console.table(res);
    });
};

getProduct = (id, quantity) => {
    connection.query(
        "SELECT stock_quantity FROM products WHERE ?",
        { id: id },
        (err, res) => {
            if (err) console.log(err);

            let stock_quantity = res[0].stock_quantity;

            if (stock_quantity > 0) {
                newStockValue = stock_quantity - quantity;

                connection.query(
                    `UPDATE bamazon.products SET stock_quantity = ${newStockValue} WHERE id = ${id}`,
                    (err, res) => {
                        if (err) console.log(err);
                        connection.query(
                            `SELECT price from bamazon.products WHERE id = ${id}`,
                            (err, res) => {
                                if (err) console.log(err);
                                let total = res[0].price * quantity;

                                console.log("===========================");
                                console.log(
                                    chalk.yellow(
                                        `Your ordered ${quantity} quantity/quantities.`
                                    )
                                );
                                console.log(
                                    chalk.yellow(
                                        `Your total Bill is : ${total}`
                                    )
                                );
                            }
                        );
                        connection.end();
                    }
                );
            } else {
                console.log("========================");
                console.log(chalk.yellow("Insufficient quantity!"));
                connection.end();
            }
        }
    );
};

showLowInventory = () => {
    connection.query(
        "SELECT product_name, stock_quantity FROM bamazon.products WHERE stock_quantity = 0",
        (err, res) => {
            if (err) console.log(err);
            console.log(res);
            connection.end();
        }
    );
};

addToInventory = (id, quantity) => {
    connection.query(
        `UPDATE bamazon.products SET stock_quantity = ${quantity} WHERE id = ${id}`,
        err => {
            if (err) console.log(err);
        }
    );
};

addNewProduct = (product_name, department_name, price, stock_quantity) => {
    connection.query(
        `INSERT INTO bamazon.products(product_name, department_name, price, stock_quantity) 
        VALUES(${product_name}, ${department_name}, ${price}, ${stock_quantity})`,
        err => {
            if (err) console.log(err);
            // console.log("success");
        }
    );
};

//============================================================

module.exports = {
    showAllProducts: showAllProducts,
    getProduct: getProduct,
    showLowInventory: showLowInventory,
    addToInventory: addToInventory,
    addNewProduct: addNewProduct
};
