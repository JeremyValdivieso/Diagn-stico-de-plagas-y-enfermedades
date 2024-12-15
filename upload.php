<?php
// Conexión a la base de datos directamente en upload.php
$host = 'localhost';  // Dirección del servidor
$dbname = 'diagnostico_plagas';  // Nombre de la base de datos
$user = 'root';  // Usuario
$password = '';  // Contraseña de MySQL (vacía por defecto)

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

// Verificar si se recibió el archivo
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['plantImage']) && $_FILES['plantImage']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';  // Carpeta de destino
        $uploadFile = $uploadDir . basename($_FILES['plantImage']['name']);  // Ruta del archivo

        // Mover el archivo a la carpeta uploads
        if (move_uploaded_file($_FILES['plantImage']['tmp_name'], $uploadFile)) {
            // Obtener la descripción desde el formulario
            $descripcion = $_POST['description'];

            try {
                // Insertar el registro en la base de datos
                $sql = "INSERT INTO diagnosticos (imagen_url, descripcion) VALUES (:imagen_url, :descripcion)";
                $stmt = $db->prepare($sql);
                $stmt->bindParam(':imagen_url', $uploadFile);
                $stmt->bindParam(':descripcion', $descripcion);

                if ($stmt->execute()) {
                    echo "Archivo subido y diagnóstico registrado con éxito.";
                } else {
                    echo "Error al guardar el diagnóstico.";
                }
            } catch (PDOException $e) {
                echo "Error al insertar en la base de datos: " . $e->getMessage();
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
