-- convert database to UTF8mb4
ALTER DATABASE `hbtn_0c_0` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- convert table to UTF8mb4
USE `hbtn_0c_0`;
ALTER TABLE `first_table` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- convert field 'name' in first_table to UTF8mb4
USE `hbtn_0c_0`;
ALTER TABLE `first_table` MODIFY `name` VARCHAR(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
