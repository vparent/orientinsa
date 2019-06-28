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

                $login = strtolower($sname[0]).strtolower($name);
                /* temporary: we define a default password, can be set to expire in the
                    database */
                $pass = hash('sha256', 'azerty');

                $dbstmt = $dbcon->prepare("INSERT INTO User (Nom, Prenom, Login, Password)
                     VALUES (:name, :sname, :login, :pass)");
                $dbstmt->execute(array(':name' => $sname, ':sname' => $name, ':login' =>
                    $login, ':pass' => $pass));

                if (isset($_POST['class']))
                {
                    $class = $_POST['class'];
                    $dbstmt = $dbcon->prepare("UPDATE User SET GRP = :grp");
                    $dbstmt->execute(array(':grp' => $class));
                }
                header('Location: view/addPupil.html');
            }
        }
    }
?>
