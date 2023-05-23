-- Prints the full descriptions of first_table from database hbtn_0c_0
SELECT `COLUMN_NAME`, `DATA_TYPE`, `CHARACTER_MAXIMUM_LENGTH`, `IS_NULLABLE` 
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'fist_table';
