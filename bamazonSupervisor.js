const functions = require("./functions.js");
const inquirer = require("inquirer");

menu = () => {
    inquirer
        .prompt({
            type: "list",
            name: "userChoices",
            message: "Choose one of the following",
            choices: [
                "View Product Sales by Department",
                "Create New Department",
                "Exit"
            ]
        })
        .then(res => {
            if (res.userChoices === "Exit") {
                process.exit();
            } else if (res.userChoices === "View Product Sales by Department") {
                functions.viewProductSalesByDept();
                menu();
            } else if (res.userChoices === "Create New Department") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "Enter Department Name: ",
                            name: "dept_name"
                        },
                        {
                            type: "input",
                            message: "Enter Overhead Costs",
                            name: "cost"
                        }
                    ])
                    .then(res => {
                        functions.createNewDept(res.dept_name, res.cost);
                        menu();
                    });
            }
        });
};

functions.showAllProducts();
menu();
