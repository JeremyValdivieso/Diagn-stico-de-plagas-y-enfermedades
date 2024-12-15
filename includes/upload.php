<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Verificar si se ha subido una imagen
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $nombreArchivo = $_FILES['image']['name'];
        $rutaTemporal = $_FILES['image']['tmp_name'];
        $rutaDestino = "../uploads/" . $nombreArchivo;

        // Verificar si la imagen se movió correctamente a la carpeta de destino
        if (move_uploaded_file($rutaTemporal, $rutaDestino)) {
            echo "Archivo subido exitosamente.";
        } else {
            echo "Hubo un error al mover el archivo.";
        }
    } else {
        echo "No se seleccionó ninguna imagen o hubo un error en la carga.";
    }
} else {
    // Si no es una solicitud POST, redirigir o mostrar un mensaje de error
    echo "Método de solicitud no permitido.";
}
?>
