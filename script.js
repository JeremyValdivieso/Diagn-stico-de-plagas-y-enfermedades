document.addEventListener('DOMContentLoaded', () => {
    const categoriaSelect = document.getElementById('categoria');
    const plantaSelect = document.getElementById('planta');
    const diagnosticoDiv = document.getElementById('diagnostico');

    // Objetos de diagnóstico para cada planta
    const diagnosticos = {
        hortalizas: {
            tomate: `
                <h2>Diagnóstico para Tomate</h2>
                <p>Para cuidar y prevenir plagas y enfermedades en tus plantas de tomate:</p>
                <ul>
                    <li>Controla la humedad, ya que la humedad excesiva favorece la aparición de hongos.</li>
                    <li>Aplica pesticidas orgánicos como el aceite de neem para combatir plagas como pulgones y ácaros.</li>
                    <li>Evita el riego excesivo y la acumulación de agua en las raíces.</li>
                    <li>Revisa regularmente las hojas para detectar manchas marrones o amarillas.</li>
                </ul>
            `,
            papa: `
                <h2>Diagnóstico para Papa</h2>
                <p>La papa es susceptible a diversas plagas y enfermedades. Aquí te damos algunos consejos:</p>
                <ul>
                    <li>Evita el exceso de humedad, que favorece el tizón tardío.</li>
                    <li>Controla la plaga de la polilla de la papa con trampas o insecticidas específicos.</li>
                    <li>El riego debe ser controlado, ya que el exceso de agua puede causar pudrición de las raíces.</li>
                </ul>
            `,
            zanahoria: `
                <h2>Diagnóstico para Zanahoria</h2>
                <p>Las zanahorias son susceptibles a varias plagas y enfermedades. Algunas recomendaciones son:</p>
                <ul>
                    <li>Controla el gusano de la raíz utilizando pesticidas orgánicos.</li>
                    <li>Las moscas de la zanahoria son una amenaza común, usa trampas o insecticidas específicos.</li>
                    <li>Riega de manera controlada para evitar enfermedades fúngicas.</li>
                </ul>
            `,
            guisante: `
                <h2>Diagnóstico para Guisante</h2>
                <p>Los guisantes pueden ser afectados por varias plagas y enfermedades:</p>
                <ul>
                    <li>Los pulgones y la mosca blanca son comunes en los guisantes. Utiliza insecticidas ecológicos o trampas.</li>
                    <li>El mildiú polvoriento es una enfermedad fúngica común. Aplica fungicidas preventivos.</li>
                    <li>Asegúrate de mantener un riego adecuado, sin excesos de agua.</li>
                </ul>
            `,
            brocoli: `
                <h2>Diagnóstico para Brócoli</h2>
                <p>Para prevenir plagas y enfermedades en el brócoli:</p>
                <ul>
                    <li>Controla las orugas y las polillas utilizando trampas o insecticidas específicos.</li>
                    <li>La mosca blanca es otra plaga frecuente; usa aceites esenciales o pesticidas orgánicos.</li>
                    <li>El mildiú polvoriento puede ser prevenido con aplicaciones periódicas de fungicidas.</li>
                </ul>
            `
        },
        frutales: {
            manzana: `
                <h2>Diagnóstico para Manzana</h2>
                <p>Para el cultivo de manzanas, sigue estos consejos:</p>
                <ul>
                    <li>Previene la roya con aplicaciones de fungicidas apropiados.</li>
                    <li>Revisa la presencia de la polilla de la manzana y usa trampas para controlar su población.</li>
                    <li>El exceso de agua puede provocar la aparición de hongos, por lo que un riego controlado es esencial.</li>
                </ul>
            `,
            durazno: `
                <h2>Diagnóstico para Durazno</h2>
                <p>Para los duraznos, aquí tienes recomendaciones:</p>
                <ul>
                    <li>Aplica fungicidas para controlar la moniliasis, que es una de las enfermedades más comunes.</li>
                    <li>Las plagas más comunes son las polillas y los ácaros, usa control biológico o insecticidas específicos.</li>
                    <li>Evita el riego excesivo y asegúrate de una buena aireación entre los árboles.</li>
                </ul>
            `,
            ciruela: `
                <h2>Diagnóstico para Ciruela</h2>
                <p>La ciruela puede verse afectada por diversas plagas y enfermedades:</p>
                <ul>
                    <li>El agujero de la fruta es causado por la polilla de la ciruela, usa trampas o insecticidas.</li>
                    <li>Las enfermedades fúngicas como la moniliasis pueden ser controladas con fungicidas específicos.</li>
                    <li>Un drenaje adecuado es esencial para evitar la aparición de hongos.</li>
                </ul>
            `,
            peral: `
                <h2>Diagnóstico para Peral</h2>
                <p>El peral es susceptible a varias plagas y enfermedades:</p>
                <ul>
                    <li>La roya del peral puede ser controlada con fungicidas preventivos.</li>
                    <li>El control de plagas como los pulgones y la mosca de la fruta es esencial para mantener la salud del árbol.</li>
                </ul>
            `
        },
        hierbas: {
            albahaca: `
                <h2>Diagnóstico para Albahaca</h2>
                <p>La albahaca es susceptible a plagas como los ácaros y la mosca blanca:</p>
                <ul>
                    <li>Usa aceites esenciales o pesticidas orgánicos para controlar los ácaros.</li>
                    <li>Evita el riego en exceso para prevenir enfermedades fúngicas como el mildiú polvoriento.</li>
                </ul>
            `,
            romero: `
                <h2>Diagnóstico para Romero</h2>
                <p>El romero es una planta resistente, pero aún así se debe tener en cuenta lo siguiente:</p>
                <ul>
                    <li>Resistente a plagas, pero debes controlar los pulgones en caso de que aparezcan.</li>
                    <li>El exceso de humedad puede causar la aparición de hongos, así que es importante un buen drenaje.</li>
                </ul>
            `,
            menta: `
                <h2>Diagnóstico para Menta</h2>
                <p>La menta es susceptible a algunas plagas y enfermedades:</p>
                <ul>
                    <li>Las plagas como la mosca de la menta pueden ser controladas con insecticidas orgánicos.</li>
                    <li>Evita el exceso de humedad que puede causar mildiu o hongos.</li>
                </ul>
            `,
            tomillo: `
                <h2>Diagnóstico para Tomillo</h2>
                <p>El tomillo es resistente, pero puedes seguir estos consejos:</p>
                <ul>
                    <li>Resiste bien las plagas, pero es susceptible a la roya, así que controla las hojas afectadas.</li>
                    <li>Un drenaje adecuado es fundamental para evitar la aparición de hongos.</li>
                </ul>
            `
        },
        nativas: {
            quinua: `
                <h2>Diagnóstico para Quinua</h2>
                <p>La quinua es resistente a muchas plagas, pero puede sufrir de las siguientes enfermedades:</p>
                <ul>
                    <li>El mildiú polvoriento es un problema común, utiliza fungicidas orgánicos si es necesario.</li>
                    <li>Las plagas como los pulgones pueden ser controladas con insecticidas suaves.</li>
                </ul>
            `,
            oca: `
                <h2>Diagnóstico para Oca</h2>
                <p>La oca es resistente, pero debes tener cuidado con:</p>
                <ul>
                    <li>Evitar el exceso de humedad para prevenir enfermedades fúngicas.</li>
                    <li>Controlar los insectos que atacan las raíces, como los gusanos del suelo.</li>
                </ul>
            `,
            canahua: `
                <h2>Diagnóstico para Cañahua</h2>
                <p>La cañahua es muy resistente, pero algunos consejos incluyen:</p>
                <ul>
                    <li>El exceso de agua puede causar pudrición de las raíces. Asegúrate de tener un buen drenaje.</li>
                    <li>Usa control biológico para mantener a raya las plagas del suelo.</li>
                </ul>
            `,
            amaranto: `
                <h2>Diagnóstico para Amaranto</h2>
                <p>El amaranto es resistente a muchas plagas, pero puede ser afectado por:</p>
                <ul>
                    <li>El gusano cortador puede dañar las hojas y tallos.</li>
                    <li>Las enfermedades fúngicas pueden ser prevenidas con fungicidas orgánicos.</li>
                </ul>
            `
        },
        medicinales: {
            eucalipto: `
                <h2>Diagnóstico para Eucalipto</h2>
                <p>El eucalipto es resistente, pero aún así debes controlar las siguientes plagas:</p>
                <ul>
                    <li>Controla la plaga del escarabajo del eucalipto con insecticidas adecuados.</li>
                    <li>Revisa las hojas por signos de hongos o manchas, aplica fungicidas si es necesario.</li>
                </ul>
            `,
            ruda: `
                <h2>Diagnóstico para Ruda</h2>
                <p>La ruda es resistente a muchas plagas, pero puedes seguir estos consejos:</p>
                <ul>
                    <li>Resiste plagas, pero controla los ácaros si es necesario con aceites esenciales.</li>
                </ul>
            `,
            matico: `
                <h2>Diagnóstico para Matico</h2>
                <p>El matico es resistente, pero puede verse afectado por las siguientes plagas:</p>
                <ul>
                    <li>Controla los pulgones que pueden atacar las hojas.</li>
                    <li>Presta atención al riego, ya que el exceso de agua puede llevar a la aparición de hongos.</li>
                </ul>
            `
        },
        ornamentales: {
            geranios: `
                <h2>Diagnóstico para Geranios</h2>
                <p>Los geranios son susceptibles a:</p>
                <ul>
                    <li>Los ácaros y pulgones. Usa aceites esenciales para su control.</li>
                    <li>La roya es común en ambientes húmedos, por lo que es importante mantener un buen drenaje.</li>
                </ul>
            `,
            petunia: `
                <h2>Diagnóstico para Petunia</h2>
                <p>Las petunias pueden ser afectadas por:</p>
                <ul>
                    <li>Los pulgones y las moscas blancas. Usa insecticidas suaves o control biológico.</li>
                </ul>
            `,
            calendula: `
                <h2>Diagnóstico para Caléndula</h2>
                <p>La caléndula es generalmente resistente, pero sigue estos consejos:</p>
                <ul>
                    <li>Controla los pulgones que pueden atacar las flores.</li>
                    <li>Evita el riego excesivo para prevenir enfermedades fúngicas.</li>
                </ul>
            `
        }
    };

    // Definir las opciones de plantas por categoría
    const plantasPorCategoria = {
        hortalizas: ['tomate', 'papa', 'zanahoria', 'guisante', 'brocoli'],
        frutales: ['manzana', 'durazno', 'ciruela', 'peral'],
        hierbas: ['albahaca', 'romero', 'menta', 'tomillo'],
        nativas: ['quinua', 'oca', 'canahua', 'amaranto'],
        medicinales: ['eucalipto', 'ruda', 'matico'],
        ornamentales: ['geranios', 'petunia', 'calendula']
    };

    // Limpiar el select de categorías y agregar las opciones sin duplicados
    categoriaSelect.innerHTML = '<option value="">Selecciona una categoría</option>';
    Object.keys(plantasPorCategoria).forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        categoriaSelect.appendChild(option);
    });

    // Actualizar el select de plantas según la categoría seleccionada
    categoriaSelect.addEventListener('change', (e) => {
        const categoria = e.target.value;
        const plantas = plantasPorCategoria[categoria] || [];
        
        plantaSelect.innerHTML = '<option value="">Selecciona una planta</option>';
        plantas.forEach(planta => {
            const option = document.createElement('option');
            option.value = planta;
            option.textContent = planta.charAt(0).toUpperCase() + planta.slice(1);
            plantaSelect.appendChild(option);
        });
    });

    // Mostrar el diagnóstico cuando se seleccione una planta
    document.getElementById('diagnostic-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const categoria = categoriaSelect.value;
        const planta = plantaSelect.value;

        if (categoria && planta && diagnosticos[categoria] && diagnosticos[categoria][planta]) {
            diagnosticoDiv.innerHTML = diagnosticos[categoria][planta];
        } else {
            diagnosticoDiv.innerHTML = '<p>Por favor, selecciona una categoría y planta válidas.</p>';
        }
    });
});
