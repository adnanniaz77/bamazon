const inquirer = require("inquirer");
const functions = require("./functions.js");
const table = require("table");

mainMenu = () => {
    inquirer
        .prompt({
            type: "list",
            message: "What do you want to do? \n ========================\n",
            name: "managerChoice",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Update Inventory",
                "Add New product",
                "EXIT"
            ]
        })
        .then(res => {
            if (res.managerChoice === "View Products for Sale") {
                functions.showAllProducts();
                mainMenu();
            } else if (res.managerChoice === "View Low Inventory") {
                functions.showLowInventory();
                mainMenu();
            } else if (res.managerChoice === "Update Inventory") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "Enter the id for the inventory update: ",
                            name: "p_id"
                        },
                        {
                            type: "input",
                            message: "Enter the quantity: ",
                            name: "p_quantity"
                        }
                    ])
                    .then(res => {
                        functions.addToInventory(res.p_id, res.p_quantity);
                        mainMenu();
                    });
            } else if (res.managerChoice === "Add New product") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "product_name",
                            message: "Enter Name for the product: "
                        },
                        {
                            type: "input",
                            name: "department_name",
                            message: "Enter department name for the product: "
                        },
                        {
                            type: "input",
                            name: "price",
                            message: "Enter unit price: "
                        },
                        {
                            type: "input",
                            name: "quantity",
                            message:
                                "Enter the number of quantity to be added: "
                        },
                        {
                            type: "input",
                            name: "product_sales",
                            message: "Enter beginning product sales Values"
                        }
                    ])
                    .then(res => {
                        let product_name = res.product_name;
                        let department = res.department_name;
                        let price = parseInt(res.price);
                        let quantity = parseInt(res.quantity);
                        let product_sales = parseInt(res.product_sales);
                        addNewProduct(
                            product_name,
                            department,
                            price,
                            quantity,
                            product_sales
                        );
                        mainMenu();
                    });
            } else if (res.managerChoice === "EXIT") {
                console.clear();
                db_close();
                process.exit();
            }
        });
    console.log("\n");
};

mainMenu();
