<?php
    require_once("util/dbcon.php");

    session_start();
    $_SESSION['newsession'] = $value;

    if (!isset($_SESSION['login']) or !isset($_SESSION['password']))
    {
        header("Location: http://localhost:9000/view/login.html");
    }
    else
    {
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
?>
