/**
 * ==========================================================================
 * SERVEUR LOCAL SIMPLE (Zéro-Dépendance)
 * Pour lancer l'application en mode Web et résoudre l'Erreur 153 de YouTube.
 * Usage : Dans le terminal, tapez `node server.js` puis ouvrez http://localhost:3000
 * ==========================================================================
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Nettoyer l'URL demandée pour éviter les injections de chemin
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>Fichier non trouvé (404)</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Erreur serveur interne: ${error.code} ..\n`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n=============================================================`);
    console.log(`🚀 Guide de l'IA pour Enseignants lancé avec succès !`);
    console.log(`👉 Ouvrez votre navigateur et allez sur : http://localhost:${PORT}`);
    console.log(`⌨️  Pour arrêter le serveur : Appuyez sur Ctrl + C`);
    console.log(`=============================================================\n`);
});
