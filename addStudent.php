<?php
    require_once("util/dbcon.php");

    session_start();

    if (!isset($_SESSION['login']) or !isset($_SESSION['password']))
    {
        header("Location: view/login.php");
    }
    else
    {
        if (isset($_SESSION['role']) and strcmp($_SESSION['role'], "teacher") == 0)
        {
            if (isset($_POST['firstname']) and isset($_POST['lastname']))
            {
                $sname = $_POST['firstname'];
                $name = $_POST['lastname'];
                $class = '';
                if (isset($_POST['class']))
                {
                    $class = $_POST['class'];
                }

                $login = strtolower($sname[0]).strtolower($name);


                $dbstmt = $dbcon->prepare("INSERT INTO User (Nom, Prenom, Login, GRP, Password) VALUES (:name, :sname, :login, :grp, :pass)");
                $dbstmt->execute(array(':name' => $sname, ':sname' => $name, ':login' => $login, ':grp' => $class, ':pass' => hash('sha256', 'azerty')));
            }
        }
    }
?>
