# MultiSearch - Frontend

Protótipo AngularJS do MultiSearch (desafio Full Stack).

A tela envia o texto digitado para a API Spring Boot e exibe os resultados agrupados por categoria.

## Stack

- AngularJS 1.8
- HTML5 / CSS3
- Bootstrap 5
- JavaScript

## Como rodar (local)

1. Suba o backend local em `http://localhost:8080`  
   **ou** use o backend na nuvem (já configurado no Render)
2. Neste projeto:

```bash
npm install
npm start
```

3. Abra `http://localhost:4200`

## API (automático)

Em `src/app/config/api.config.js`:

- `localhost` → `http://localhost:8080/api/busca`
- front na nuvem → `https://dev-backend-8klo.onrender.com/api/busca`

Para testar o **Render com o front local**, mude:

```js
var forcarBackendNuvem = true;
```

## Backend na nuvem

`https://dev-backend-8klo.onrender.com`
