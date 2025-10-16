const fs = require('fs');
const path = require('path');

const cssFiles = [
    'reset.css',
    'cabecalho.css',
    'paineis.css',
    'quem-somos.css',
    'rodape.css',
    'resposivo.css'
];

const cssDir = path.join(__dirname, 'src', 'css');
const outputFile = path.join(cssDir, 'style.css');

let combinedCss = '';

cssFiles.forEach(file => {
    const filePath = path.join(cssDir, file);
    if (fs.existsSync(filePath)) {
        combinedCss += fs.readFileSync(filePath, 'utf8');
    }
});

fs.writeFileSync(outputFile, combinedCss);

console.log('CSS files combined into style.css');