document.getElementById('diagnostic-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const planta = document.getElementById('planta').value.trim();
    const diagnosticoDiv = document.getElementById('diagnostico');

    try {
        // Enviar el tipo de planta al servidor
        const response = await fetch('http://localhost:3000/diagnostico', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ planta }),
        });

        if (response.ok) {
            const data = await response.json();
            diagnosticoDiv.innerHTML = `
                <h2>Diagnóstico para ${planta}</h2>
                <p>${data.diagnostico}</p>
            `;
        } else {
            diagnosticoDiv.innerHTML = '<p>Error al obtener el diagnóstico.</p>';
        }
    } catch (error) {
        diagnosticoDiv.innerHTML = '<p>Ocurrió un error al conectarse al servidor.</p>';
        console.error(error);
    }

    diagnosticoDiv.style.display = 'block';
});
