<?php
    session_start();
    
    if (isset($_SESSION['login']) and isset($_SESSION['password']))
    {
        unset($_SESSION['login']);
        unset($_SESSION['password']);
        unset($_SESSION['newsession']);

        header('Location: http://localhost:9000/index.php');
    }
?>
