const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');

function copiar(origem, destino) {
  fs.mkdirSync(destino, { recursive: true });

  for (const entrada of fs.readdirSync(origem, { withFileTypes: true })) {
    const caminhoOrigem = path.join(origem, entrada.name);
    const caminhoDestino = path.join(destino, entrada.name);

    if (entrada.isDirectory()) {
      copiar(caminhoOrigem, caminhoDestino);
    } else {
      fs.copyFileSync(caminhoOrigem, caminhoDestino);
    }
  }
}

const pastaDist = path.join(raiz, 'dist');
fs.rmSync(pastaDist, { recursive: true, force: true });
copiar(path.join(raiz, 'src'), pastaDist);

console.log('Build gerado em dist/');
