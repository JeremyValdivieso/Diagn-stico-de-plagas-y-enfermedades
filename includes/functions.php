<?php
// Incluir la conexión a la base de datos
include('db.php');

// Función para guardar un diagnóstico
function guardarDiagnostico($cultivo_id, $sintomas, $imagen) {
    global $conexion;
    $sql = "INSERT INTO diagnosticos (cultivo_id, sintomas, imagen) VALUES ('$cultivo_id', '$sintomas', '$imagen')";
    return $conexion->query($sql);
}

// Función para obtener plagas según cultivo
function obtenerPlagasPorCultivo($cultivo_id) {
    global $conexion;
    $sql = "SELECT * FROM plagas WHERE cultivo_id = '$cultivo_id'";
    $resultado = $conexion->query($sql);
    return $resultado->fetch_all(MYSQLI_ASSOC);
}
?>
