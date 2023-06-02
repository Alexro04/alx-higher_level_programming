SELECT `tv_genres`.`name`, SUM(`tv_show_ratings`.`rate`) AS rating
FROM tv_shows
LEFT JOIN `tv_show_genres` ON `tv_shows`.`id` = `tv_show_genres`.`show_id` 
LEFT JOIN `tv_genres` ON `tv_show_genres`.`genre_id` = `tv_genres`.`id`
LEFT JOIN `tv_show_ratings` ON `tv_shows`.`id` = `tv_show_ratings`.`show_id`
WHERE `name` IS NOT NULL
GROUP BY `name`
ORDER BY `rating` DESC;