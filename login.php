<?php
    require_once("util/dbcon.php");

    session_start();
    $_SESSION['newsession'] = "LOGIN";

    if (isset($_GET['login']) and isset($_GET['password']))
    {
        $login = $_GET['login'];
        $pass = $_GET['password'];

        $stmt = $dbcon->prepare("SELECT Password FROM User WHERE Login = :login");
        $stmt->execute(array(':login' => $login));
        
        $res = $stmt->fetchAll();
        if (!empty($res))
        {
            $db_pass = $res[0]['Password'];
            if (strcmp($pass, $db_pass) == 0)
            {
                $_SESSION['login'] = $login;
                $_SESSION['password'] = $pass;

                $stmt = $dbcon->prepare("SELECT ID FROM User NATURAL JOIN Teacher WHERE Login = :login");
                $stmt->execute(array(':login' => $_SESSION['login']));

                $res = $stmt->fetchAll();
                if (empty($res))
                {
                    $_SESSION["role"] = "student";
                    header("Location: view/progress.html");
                }
                else
                {
                    $_SESSION["role"] = "teacher";
                    header("Location: view/teacherServiceChoice.html");
                }
            }
            else
            {
                header('Location: index.php');
            }
        }
        else
        {
            header('Location: index.php');
        }
    }
    else
    {
        header('Location: index.php');
    }
?>
