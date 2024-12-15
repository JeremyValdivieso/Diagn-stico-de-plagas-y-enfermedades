<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $blobToken = getenv('BLOB_READ_WRITE_TOKEN');
    $blobEndpoint = 'https://blob.vercel-storage.com/api/blob';

    if (!$blobToken) {
        http_response_code(500);
        echo json_encode(['error' => 'Token de blob no configurado']);
        exit;
    }

    if (isset($_FILES['plantImage']) && $_FILES['plantImage']['error'] === UPLOAD_ERR_OK) {
        // Preparar los datos para enviar a Vercel Blob Storage
        $file = $_FILES['plantImage'];
        $fileContents = file_get_contents($file['tmp_name']);
        $fileName = $file['name'];

        $ch = curl_init($blobEndpoint);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: Bearer ' . $blobToken,
            'Content-Type: application/octet-stream',
            'x-vercel-filename: ' . $fileName
        ]);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fileContents);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode === 201) {
            $responseData = json_decode($response, true);
            $fileUrl = $responseData['url'] ?? null;

            if ($fileUrl) {
                echo json_encode(['success' => true, 'url' => $fileUrl]);
            } else {
                http_response_code(500);
                echo json_encode(['error' => 'No se pudo obtener la URL del archivo subido.']);
            }
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Error al subir el archivo a Vercel Blob Storage.']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'No se recibió un archivo válido.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido.']);
}
