<?php
require 'includes/db_config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['plantImage']) && $_FILES['plantImage']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';
        $fileName = uniqid() . '_' . basename($_FILES['plantImage']['name']);
        $uploadFile = $uploadDir . $fileName;

        if (move_uploaded_file($_FILES['plantImage']['tmp_name'], $uploadFile)) {
            // Inserta la ruta y descripción en la base de datos
            $description = $_POST['description'];
            $sql = "INSERT INTO diagnosticos (image_path, description) VALUES (:image_path, :description)";
            $stmt = $pdo->prepare($sql);

            try {
                $stmt->execute(['image_path' => $uploadFile, 'description' => $description]);
                echo "Diagnóstico registrado con éxito.";
            } catch (PDOException $e) {
                echo "Error al guardar en la base de datos: " . $e->getMessage();
            }
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
