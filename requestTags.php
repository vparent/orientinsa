<?php

    require_once("util/dbcon.php");

    session_start();

    if (isset($_SESSION['login']) and isset($_SESSION['password']) and isset($_SESSION['role']) and strcmp($_SESSION['role'], "teacher") == 0)
    {
        $dbstmt = $dbcon->prepare("SELECT ID, Nb, LatDeg, LatMin, LatSec, LongDeg, LongMin, LongSec FROM Tag");
        $dbstmt->execute();

        $res = $dbstmt->fetchAll();

        print_r(json_encode($res));
    }
    else
    {
        header("Location: index.php");
    }

?>
