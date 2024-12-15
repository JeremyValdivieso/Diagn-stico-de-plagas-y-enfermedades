<?php
// Habilitar la visualización de errores para la depuración
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Configuración de la base de datos
$servername = "localhost";  // Dirección del servidor
$username = "root";         // Nombre de usuario
$password = "";             // Contraseña de MySQL (vacía por defecto)
$dbname = "diagnostico_plagas";  // Nombre de la base de datos
$port = 3307;               // Puerto MySQL (el que configuraste en XAMPP)

// Conectar a la base de datos usando el puerto
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si se recibió el archivo
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "Formulario recibido";  // Para asegurarse de que el formulario ha llegado correctamente

    if (isset($_FILES['plantImage']) && $_FILES['plantImage']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';  // Carpeta de destino
        $uploadFile = $uploadDir . basename($_FILES['plantImage']['name']);  // Ruta del archivo

        // Mover el archivo a la carpeta uploads
        if (move_uploaded_file($_FILES['plantImage']['tmp_name'], $uploadFile)) {
            echo "Archivo subido con éxito.";

            // Obtener la descripción desde el formulario
            $descripcion = $_POST['description'];

            // Insertar el registro en la base de datos
            $sql = "INSERT INTO diagnosticos (imagen_url, descripcion) VALUES ('$uploadFile', '$descripcion')";
            
            if ($conn->query($sql) === TRUE) {
                echo "Archivo subido y diagnóstico registrado con éxito.";
            } else {
                echo "Error al guardar el diagnóstico: " . $conn->error;
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

// Cerrar la conexión
$conn->close();
?>
