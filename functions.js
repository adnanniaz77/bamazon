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
    connection.query(
        "SELECT item_id, product_name, department_name, price, stock_quantity FROM products",
        (err, res) => {
            if (err) console.log(err);
            console.table(res);
        }
    );
};

getProduct = (id, quantity) => {
    connection.query(
        "SELECT stock_quantity FROM products WHERE ?",
        { item_id: id },
        (err, res) => {
            if (err) console.log(err);

            let stock_quantity = res[0].stock_quantity;

            if (stock_quantity > 0) {
                newStockValue = stock_quantity - quantity;

                connection.query(
                    `UPDATE bamazon.products SET stock_quantity = ${newStockValue} WHERE item_id = ${id}`,
                    (err, res) => {
                        if (err) console.log(err);
                        connection.query(
                            `SELECT price from bamazon.products WHERE item_id = ${id}`,
                            (err, res) => {
                                if (err) console.log(err);
                                let total = res[0].price * quantity;

                                console.log("===========================");
                                console.log(
                                    chalk.yellow(
                                        `Your ordered ${quantity} quantity: `
                                    )
                                );
                                console.log(
                                    chalk.yellow(
                                        `Your total Bill is: ${total}$`
                                    )
                                );
                                connection.query(
                                    `UPDATE bamazon.products SET product_sales = ${total} WHERE item_id = ${id}`,
                                    (err, res) => {
                                        if (err) console.log(err);
                                    }
                                );
                                connection.end();
                            }
                        );
                    }
                );
            } else {
                console.log("========================");
                console.log(chalk.yellow("Insufficient quantity!"));
            }
        }
    );
};

showLowInventory = () => {
    connection.query(
        "SELECT * FROM bamazon.products WHERE stock_quantity = 0",
        (err, res) => {
            if (err) console.log(err);
            console.log("=======================");
            console.log(chalk.cyan("Low item in inventory"));
            console.log("-----------------------");
            for (let r in res) {
                console.log(
                    chalk.green(res[r].product_name),
                    chalk.red(res[r].stock_quantity)
                );
            }
        }
    );
};

addToInventory = (id, quantity) => {
    connection.query(
        `UPDATE bamazon.products SET stock_quantity = ${quantity} WHERE item_id = ${id}`,
        err => {
            if (err) console.log(err);
            console.log(
                chalk.green("You have successfully updated the inventory")
            );
        }
    );
};

addNewProduct = (
    product_name,
    department_name,
    price,
    stock_quantity,
    product_sales
) => {
    connection.query(
        `INSERT INTO bamazon.products(product_name, department_name, price, stock_quantity, product_sales) 
        VALUES(${product_name}, ${department_name}, ${price}, ${stock_quantity}, ${product_sales})`,
        err => {
            if (err) console.log(err);
            console.log(chalk.green("You have successfully added new Product"));
        }
    );
};

db_close = () => {
    console.log("Thanks for using the App. Have a good day");
    connection.end();
};

viewProductSalesByDept = (deptName, overHeadCost) => {
    connection.query(
        `SELECT department_id, products.department_name, over_head_costs, 
        product_sales, over_head_costs - product_sales AS profit
        FROM departments AS d
        JOIN products 
        ON products.department_name = d.department_name;`,
        (err, res) => {
            if (err) console.log(err);
            console.table(res);
        }
    );
};

createNewDept = (deptName, overHeadCost) => {
    connection.query(
        `INSERT INTO bamazon.departments(department_name, over_head_costs) 
        VALUES(${deptName}, ${overHeadCost})`,
        err => {
            if (err) console.log(err);
            console.log(
                chalk.green(
                    "\n\n\nYou have successfully added new Department: \n" +
                        chalk.yellow(deptName) +
                        "with " +
                        chalk.yellow(overHeadCost) +
                        " over head cost"
                )
            );
        }
    );
};

//============================================================

module.exports = {
    showAllProducts: showAllProducts,
    getProduct: getProduct,
    showLowInventory: showLowInventory,
    addToInventory: addToInventory,
    addNewProduct: addNewProduct,
    viewProductSalesByDept: viewProductSalesByDept,
    createNewDept: createNewDept
};
