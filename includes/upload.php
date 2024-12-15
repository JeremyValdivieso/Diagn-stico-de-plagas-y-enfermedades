<?php
if (isset($_FILES['image'])) {
    $nombreArchivo = $_FILES['image']['name'];
    $rutaTemporal = $_FILES['image']['tmp_name'];
    $rutaDestino = "../uploads/" . $nombreArchivo;

    if (move_uploaded_file($rutaTemporal, $rutaDestino)) {
        echo "Archivo subido exitosamente.";
    } else {
        echo "Hubo un error al subir el archivo.";
    }
}
?>
