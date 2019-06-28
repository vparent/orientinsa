<?php

    require_once("util/dbcon.php");

    session_start();

    if (isset($_SESSION['login']) and isset($_SESSION['password']))
    {
        //print_r($_POST);
        if (isset($_POST['data']) and !empty($_POST['data']))
        {
            $groups = json_decode($_POST['data'], true);
            //print_r($groups);

            for ($i = 0; $i < count($groups); $i++)
            {
                for ($j = 0; $j < count($groups[$i]['members']); $j++)
                {
                    $lname = $groups[$i]['members'][$j]['lastname'];
                    $fname = $groups[$i]['members'][$j]['firstname'];
                    $gid = $groups[$i]['num'];

                    $dbstmt = $dbcon->prepare("SELECT ID FROM User WHERE Nom = :lname AND Prenom = :fname");
                    $dbstmt->execute(array(':lname' => $fname, ':fname' => $lname));

                    $id = $dbstmt->fetchAll()[0];

                    $dbstmt = $dbcon->prepare("INSERT INTO Groups (GID, UID) VALUES (:g_id, :u_id)");
                    $dbstmt->execute(array(':g_id' => $gid, 'u_id' => $id[0]));
                }
            }
        }
    }
?>
