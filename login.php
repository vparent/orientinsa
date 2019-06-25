<?php
    require_once("util/dbcon.php");

    session_start();
    $_SESSION['newsession'] = $value;

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
                header('Location: http://localhost:9000/index.php');
            }
        }
        else
        {
            header('Location: http://localhost:9000/index.php');
        }
    }
    else
    {
        header('Location: http://localhost:9000/index.php');
    }
?>
