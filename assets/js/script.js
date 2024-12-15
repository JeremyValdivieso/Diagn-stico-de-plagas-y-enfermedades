document.getElementById('diagnosticForm').addEventListener('submit', function (event) {
    const fileInput = document.getElementById('plantImage');
    if (fileInput.files.length === 0) {
        alert('Por favor, sube una imagen antes de enviar.');
        event.preventDefault();
    }
});
