-- Creates user and database and grants specific priviledges
--CREATES USER user_0d_2
CREATE USER IF NOT EXISTS 'user_0d_2'@'localhost' IDENTIFIED BY 'user_0d_2_pwd';

--CREATE DATABASE hbtn_0d_2
CREATE DATABASE IF NOT EXISTS 'hbtn_0d_2'

--Grant SELECT priviledge to 'hbtn_0d_2'
GRART SELECT ON 'hbtn_0d_2'.* TO 'user_0d_2'@'localhost';
