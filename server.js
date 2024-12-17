const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const imagesDir = path.join(__dirname, 'images');

app.use(express.static(__dirname));

app.get('/images', (req, res) => {
    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'No se pudieron listar las imágenes' });
        }
        res.json(files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)));
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
