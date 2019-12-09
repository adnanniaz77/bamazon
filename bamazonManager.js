const inquirer = require("inquirer");
const functions = require("./functions.js");

mainMenu = () => {
    inquirer
        .prompt({
            type: "list",
            message: "What do you want to do? \n ========================\n",
            name: "managerChoice",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New product",
                "EXIT"
            ]
        })
        .then(res => {
            if (res.managerChoice === "View Products for Sale") {
                functions.showAllProducts();
            } else if (res.managerChoice === "View Low Inventory") {
                functions.showLowInventory();
            } else if (res.managerChoice === "Add to Inventory") {
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
                        }
                    ])
                    .then(res => {
                        let product_name = res.product_name;
                        let department = res.department_name;
                        let price = parseInt(res.price);
                        let quantity = parseInt(res.quantity);
                        addNewProduct(
                            product_name,
                            department,
                            price,
                            quantity
                        );
                    });
            } else if (res.managerChoice === "EXIT") {
                console.clear();
                process.exit();
            }
        });
};

mainMenu();
