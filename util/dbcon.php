<?php
    $dbn = "mysql:dbname=orientinsa_db;host=127.0.0.1";
    $db_login = "orientinsa";
    $db_pass = "Azerty";

    try {
        $dbcon = new PDO($dbn, $db_login, $db_pass);
    } catch (PDOException $e) {
        echo 'Connexion failed : ' . $e->getMessage();
    }
?>
