const functions = require("./functions.js");
const inquirer = require("inquirer");

functions.showAllProducts();

mainMenu = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter product ID to buy it: ",
                name: "p_id"
            },
            {
                type: "input",
                message: "",
                name: "p_quantity"
            }
        ])
        .then(res => {
            functions.getProduct(res.p_id, res.p_quantity);
        });
};

mainMenu();
