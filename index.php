<!DOCTYPE html>
<html lang="en">
    <?php include('src/db_con.php')?>
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
    <h1>
        Test
    </h1>
    <?php
        echo "test";
    ?>
    <?php
            $result = pg_query($db_connection, "SELECT name FROM users");
            while($row = mysql_fetch_array($result)) {
                echo $row['name'];
            }
        ?>
    </body>
</html>