const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config(); // Para manejar variables de entorno

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Ruta para manejar solicitudes desde el cliente
app.post('/diagnostico', async (req, res) => {
    const { planta } = req.body;

    // Llama a la API de OpenAI con el tipo de planta
    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: 'text-davinci-003',
            prompt: `¿Cómo cuidar y prevenir plagas en una planta de ${planta}?`,
            max_tokens: 150,
            temperature: 0.7,
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        res.json({ diagnostico: response.data.choices[0].text });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al generar el diagnóstico.');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
