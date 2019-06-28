<?php
    /* Page for bracelet validation */
    require_once('util/dbcon.php');
    require 'vendor/autoload.php';

    use OTPHP\TOTP;

    if (isset($_GET['q']))
    {
        $query = $_GET['q'];
        if (strcmp($query, 'brval') == 0)
        {
            if (isset($_GET['idbr']) and isset($_GET['code']))
            {
                $code = $_GET['code'];
                $idbr = $_GET['idbr'];

                $stmt = $dbcon->prepare("INSERT INTO Test (Code, IdBR) VALUES (:code, :idbr)");
                $stmt->execute(array(':code' => $code, ':idbr' => $idbr));
            }
            else
            {
                echo "<p>Fail</p>";
            }
        }
        else
        {
            echo "<p>Fail</p>";
        }
    }
    else
    {
        echo "<p>Fail</p>";
    }

    /*function genCode($seed, $time)
    {
        $totp = TOTP::create($seed, $time);
    }*/
?>
