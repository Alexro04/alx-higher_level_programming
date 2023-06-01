-- CREATES THE DATABASE hbtn_0d_usa
DROP DATABASE IF EXISTS 'hbtn_0d_usa';
CREATE DATABASE 'hbtn_0d_usa';

-- CREATES THE TABLE cities IN DATABASE
USE 'hbtn_0d_usa';
DROP TABLE IF EXISTS 'cities';
CREATE TABLE 'cities'(
    id INT AUTO_INCREMENT PRIMARY KEY,
    state_id INT NOT NULL,
    FOREIGN KEY(state_id) REFERENCES states(id),
    name VARCHAR(256)
);
