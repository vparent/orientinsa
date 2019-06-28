<?php

    require_once("util/dbcon.php");

    session_start();

    if (!isset($_SESSION['login']) or !isset($_SESSION['password']))
    {
        header("Location: view/login.html");
    }
    else
    {
        if (isset($_REQUEST['q']))
        {
            $query = $_REQUEST['q'];
            if (strcmp($query, 'rqstName') == 0)
            {
                $dbstmt = $dbcon->prepare("SELECT Nom, Prenom FROM User WHERE Login = :login");
                $dbstmt->execute(array(':login' => $_SESSION['login']));

                $res = $dbstmt->fetchAll();
                if (!empty($res))
                {
                    print_r($res[0]['Prenom'] . ' ' . $res[0]['Nom']);
                }
            }
            if (strcmp($query, 'val') == 0)
            {
                /* Online tag validation, the user is supposed to be authentificated */
                if (isset($_REQUEST['bid']) and isset($_REQUEST['tid']) and isset($_REQUEST['code']))
                {
                    $bid =  $_REQUEST['bid'];
                    $tid =  $_REQUEST['tid'];
                    $code = $_REQUEST['code'];

                    print_r($_REQUEST);
                }
            }
            if (strcmp($query, 'addTag') == 0)
            {
                if (isset($_GET['nb']) and isset($_GET['vdeg']) and isset($_GET['vmin']) and isset($_GET['vsec']) and isset($_GET['hdeg']) and isset($_GET['hmin']) and isset($_GET['hsec']))
                {
                    $dbstmt = $dbcon->prepare("INSERT INTO Tag (Nb, LatDeg, LatMin, LatSec, LongDeg, LongMin, LongSec) 
                        VALUES (:nb, :vdeg, :vmin, :vsec, :hdeg, :hmin, :hsec)");
                    $dbstmt->execute(array(':nb' => $_GET['nb'], ':vdeg' => $_GET['vdeg'],
                        ':vmin' => $_GET['vmin'], ':vsec' => $_GET['vsec'], ':hdeg' =>
                        $_GET['hdeg'], ':hmin' => $_GET['hmin'], ':hsec' => $_GET['hsec']));
                    header('Location: view/addMarker.html');
                }
            }
        }
        else
        {
            /* We get the login of the user authentificated, if it is a teacher we send the user
             to  the teacherServiceChoice page, else to the progress page */

            if (isset($_SESSION["role"]))
            {
                $role = $_SESSION["role"];
                if (strcmp($role, "teacher") == 0)
                {
                    header("Location: view/teacherServiceChoice.html");
                }
                if (strcmp($role, "student") == 0)
                {
                    header("Location: view/progress.html");
                }
            }
        }
    }
?>
