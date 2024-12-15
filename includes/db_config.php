<?php
$host = 'localhost'; // Cambia esto si estás usando un servidor remoto
$dbname = 'diagnostico_plantas';
$username = 'root'; // Cambia esto por tu usuario
$password = ''; // Cambia esto por tu contraseña

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error al conectar con la base de datos: " . $e->getMessage());
}
?>
