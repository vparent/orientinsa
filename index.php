<?php

    require_once("util/dbcon.php");

    session_start();

    if (!isset($_SESSION['login']) or !isset($_SESSION['password']))
    {
        header("Location: http://localhost:9000/view/login.html");
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
                if (isset($_REQUEST['bid']) and isset($_REQUEST['tid']) and isset($_REQUEST['code']))
                {
                    $bid =  $_REQUEST['bid'];
                    $tid =  $_REQUEST['tid'];
                    $code = $_REQUEST['code'];

                    print_r($_REQUEST);
                }
            }
        }
        else
        {
            /* We get the login of the user authentificated, if it is a teacher we send the user
             to  the teacherServiceChoice page, else to the progress page */

            $login = $_SESSION['login'];

            $dbstmt = $dbcon->prepare("SELECT ID FROM User NATURAL JOIN Teacher WHERE Login =
                :login");
            $dbstmt->execute(array(':login' => $_SESSION['login']));

            $res = $dbstmt->fetchAll();
            if (empty($res))
            {
                header("Location: http://localhost:9000/view/progress.html");
            }
            else
            {
                header("Location: http://localhost:9000/view/teacherServiceChoice.html");
            }
        }
    }
?>
