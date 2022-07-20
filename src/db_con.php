<?php
        $db_connection = pg_connect(getenv(DATABASE_URL);
        $result = pg_query($db_connection, "SELECT name FROM users");











//   $dbopts = parse_url(getenv('DATABASE_URL'));
 //     $app->register(new Csanquer\Silex\PdoServiceProvider\Provider\PDOServiceProvider('pdo'),
 //                  array(
  //                  'pdo.server' => array(
   //                    'driver'   => 'pgsql',
    //                   'user' => $dbopts["user"],
     //                  'password' => $dbopts["pass"],
//                       'host' => $dbopts["host"],
//                       'port' => $dbopts["port"],
//                      'dbname' => ltrim($dbopts["path"],'/')
//                       )
//                   )
//    );
?>