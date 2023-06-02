-- creates database and table in the database
-- creates database
CREATE DATABASE IF NOT EXISTS 'hbtn_0d_usa';
-- use database
USE 'hbtn_0d_usa';
-- create a table
CREATE TABLE IF NOT EXISTS 'states'(
    id INT NOT NULL UNIQUE AUTO_INCREMENT, 
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY(id)
);
