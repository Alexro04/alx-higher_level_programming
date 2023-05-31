-- creates a new user and grants all priviledges
CREATE USER IF NOT EXISTS 'user_0d_1'@'localhost' IDENTIFIED BY 'user_0d_1_pwd';
GRANT ALL PRIVILEDES ON *.* TO 'user_0d_1'@'localhost' WITH GRANT OPTION;
