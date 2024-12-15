document.getElementById('diagnostic-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que se recargue la página
    
    const planta = document.getElementById('planta').value.trim().toLowerCase();
    const diagnosticoDiv = document.getElementById('diagnostico');

    let diagnostico = '';

    // Diagnósticos básicos por planta (puedes expandir este conjunto)
    switch(planta) {
        case 'tomate':
            diagnostico = `
                <h2>Diagnóstico para Tomate</h2>
                <p>Para cuidar y prevenir plagas y enfermedades en tus plantas de tomate, sigue estos consejos:</p>
                <ul>
                    <li>Controla la humedad, ya que la humedad excesiva favorece la aparición de hongos.</li>
                    <li>Aplica pesticidas orgánicos como el aceite de neem para combatir plagas como pulgones y ácaros.</li>
                    <li>Evita el riego excesivo y la acumulación de agua en las raíces.</li>
                    <li>Revisa regularmente las hojas para detectar manchas marrones o amarillas.</li>
                </ul>
            `;
            break;

        case 'pimiento':
            diagnostico = `
                <h2>Diagnóstico para Pimiento</h2>
                <p>Para cuidar y prevenir plagas y enfermedades en tus plantas de pimiento:</p>
                <ul>
                    <li>Protege tus plantas de pimiento de la mosca blanca utilizando trampas amarillas.</li>
                    <li>Controla las temperaturas extremas para evitar el estrés en la planta.</li>
                    <li>Evita el exceso de riego para prevenir la pudrición de las raíces.</li>
                </ul>
            `;
            break;

        // Agrega más casos según las plantas que quieras incluir
        default:
            diagnostico = `
                <h2>Planta no reconocida</h2>
                <p>Lo siento, no tenemos información sobre esta planta en nuestra base de datos. Intenta con otra planta.</p>
            `;
    }

    diagnosticoDiv.innerHTML = diagnostico;
    diagnosticoDiv.style.display = 'block';  // Muestra el diagnóstico
});
