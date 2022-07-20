<?php
        $db_connection = pg_connect(getenv(DATABASE_URL));
        if ($db_connection->connect_error) {
           die("Connection failed: " . $db_connection->connect_error);
        }
          echo "Connected successfully";
?>
