DROP TABLE IF EXISTS departments;

CREATE TABLE departments(
department_id INT AUTO_INCREMENT NOT NULL,
department_name VARCHAR(30) NOT NULL,
over_head_costs INT NOT NULL,
PRIMARY KEY(department_id)
);

INSERT INTO departments(department_name, over_head_costs) 
VALUES('pc accessories', 250);

INSERT INTO departments(department_name, over_head_costs) 
VALUES('stationary', 150);

INSERT INTO departments(department_name, over_head_costs) 
VALUES('hardware', 200);
