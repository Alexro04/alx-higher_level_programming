-- a script that lists all shows without the genre Comedy in the database hbtn_0d_tvshows.
-- uses a database to list all rows not linked to one row
SELECT `title` FROM tv_shows
WHERE `title` NOT IN (
    SELECT `title` FROM `tv_genres`
    LEFT JOIN `tv_show_genres` ON `tv_genres`.`id` = `tv_show_genres`.`genre_id`
    LEFT JOIN `tv_shows` ON `tv_show_genres`.`show_id` = `tv_shows`.`id`
    WHERE `tv_genres`.`name` = 'Comedy')
ORDER BY `title` ASC;