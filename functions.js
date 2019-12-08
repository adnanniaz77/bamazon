require("dotenv").config();
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
    showAllProducts();
    connection.end();
});

// functions
showAllProducts = () => {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        console.table(res);
    });
};
