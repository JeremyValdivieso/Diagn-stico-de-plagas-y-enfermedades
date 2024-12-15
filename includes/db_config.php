<?php
// Configuración para conectar a MySQL usando PDO
$host = getenv('MYSQL_HOST'); // Dirección del servidor
$dbname = getenv('MYSQL_DATABASE'); // Nombre de la base de datos
$user = getenv('MYSQL_USER'); // Usuario
$password = getenv('MYSQL_PASSWORD'); // Contraseña

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
?>
