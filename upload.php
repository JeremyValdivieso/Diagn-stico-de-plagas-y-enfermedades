<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['plantImage']) && $_FILES['plantImage']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($_FILES['plantImage']['name']);

        if (move_uploaded_file($_FILES['plantImage']['tmp_name'], $uploadFile)) {
            echo "Archivo subido con éxito: " . htmlspecialchars(basename($_FILES['plantImage']['name']));
        } else {
            echo "Error al subir el archivo.";
        }
    } else {
        echo "No se recibió ningún archivo o ocurrió un error.";
    }
} else {
    echo "Método no permitido.";
}
?>
