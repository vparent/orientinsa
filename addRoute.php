<?php

    require_once("util/dbcon.php");

    session_start();

    if (isset($_SESSION['login']) and isset($_SESSION['password']))
    {
        if (isset($_POST['data']) and !empty($_POST['data']))
        {
            $routes = json_decode($_POST['data'], true);

            for ($j = 0; $j < count($routes); $j++)
            {
                for ($i = 0; $i < count($routes[$j]['markers']); $i++)
                {
                    $tags = $routes[$j]['markers'];
                    print_r($tags[$i]);

                    $dbstmt = $dbcon->prepare("INSERT INTO Course (ID, TID) VALUES (:c_id, :t_id)");
                    $dbstmt->execute(array(':c_id' => $j, ':t_id' => $tags[$i]['id']));
                }
            }
        }
    }

?>
