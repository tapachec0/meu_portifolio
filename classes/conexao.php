<?php

$host = "localhost";
$user = "root";
$password = "";
$db = "projects";

$mysqli = new mysqli($host, $user, $password, $db); //constructor

if($mysqli->connect_errno) {
	echo "Conect Failed: (" .$mysqli->connect_errno.") " .$mysqli ->connect_error; //error + error description
}


?>