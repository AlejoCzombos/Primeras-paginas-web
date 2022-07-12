<?php

$db = mysqli_connect('localhost', 'root', 'root', 'appsalon');
$db->set_charset('utf8');

if(!$db) {
    echo "Error en la coneccion";
    exit;
} 