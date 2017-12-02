DROP DATABASE IF exists burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(250) NOT NULL,
    devoured boolean,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;

INSERT INTO burgers (burger_name, devoured, date) VALUES ("Cheese Curd Burger", false, "2017-11-29 03:17:14");
INSERT INTO burgers (burger_name, devoured, date) VALUES ("Jack Daddy Burger", false, "2017-11-29 03:17:18");
INSERT INTO burgers (burger_name, devoured, date) VALUES ("Boston Lager Burger", false, "2017-11-29 03:17:25");
INSERT INTO burgers (burger_name, devoured, date) VALUES ("Buffalo Blue Burger", false, "2017-11-29 03:17:45");
INSERT INTO burgers (burger_name, devoured, date) VALUES ("Nacho Burger", false, "2017-11-29 03:18:25");

