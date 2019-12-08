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
                functions.addToInventory();
            } else if (res.managerChoice === "Add New product") {
                functions.addNewProduct();
            } else if (res.managerChoice === "EXIT") {
                console.clear();
                process.exit();
            }
        });
};

mainMenu();
