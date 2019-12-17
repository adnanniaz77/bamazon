const functions = require("./functions.js");
const inquirer = require("inquirer");
const chalk = require("chalk");
const table = require("table");

functions.showAllProducts();

mainMenu = () => {
    inquirer
        .prompt({
            type: "list",
            name: "userChoice",
            message: chalk.bgRed("What do you want to do?"),
            choices: ["Buy a Product", "Exit"]
        })
        .then(res => {
            if (res.userChoice === "Buy a Product") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "Enter product ID to buy it: ",
                            name: "p_id"
                        },
                        {
                            type: "input",
                            message: "Enter Quantity",
                            name: "p_quantity"
                        }
                    ])
                    .then(res => {
                        functions.getProduct(res.p_id, res.p_quantity);
                    });
            } else if (res.userChoice === "Exit") {
                console.clear();
                process.exit();
            }
        });
};

mainMenu();
