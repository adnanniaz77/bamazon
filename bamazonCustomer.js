const functions = require("./functions.js");
const inquirer = require("inquirer");

functions.showAllProducts();

inquirer
    .prompt([
        {
            type: "input",
            message: "Enter product ID: ",
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
