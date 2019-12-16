const functions = require("./functions.js");
const inquirer = require("inquirer");

mainMenu = () => {
    inquirer
        .prompt({
            type: "list",
            name: "supChoice",
            message: "Choose you option: ",
            choices: [
                "View Product Sales by Department",
                "Create New Department",
                "EXIT"
            ]
        })
        .then(res => {
            if (res.supChoice == "View Product Sales by Department") {
                viewProductSalesByDept();
                mainMenu();
            } else if (res.supChoice == "Create New Department") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "Enter Department Name: ",
                            name: "department"
                        },
                        {
                            type: "input",
                            message: "Enter Overhead Cost: ",
                            name: "department"
                        }
                    ])
                    .then(res => {
                        console.log("New Dept");
                        // createNewDept(deptName, overHeadCost);
                    });
            } else if (res.choices == "EXIT") {
                console.clear();
                process.exit();
                functions.db_close();
            }
        });
};

mainMenu();
functions.showAllProducts();
