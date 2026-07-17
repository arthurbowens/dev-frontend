# MultiSearch - Frontend

Protótipo AngularJS do MultiSearch (desafio Full Stack).

A tela envia o texto digitado para a API Spring Boot e exibe os resultados agrupados por categoria.

## Stack

- AngularJS 1.8
- HTML5 / CSS3
- Bootstrap 5
- JavaScript

## Como rodar

1. Suba o backend em `http://localhost:8080`
2. Neste projeto:

```bash
npm install
npm start
```

3. Abra `http://localhost:4200`

## Integração

O frontend chama:

`GET http://localhost:8080/api/busca?texto=...`

Configuração em `src/app/config/api.config.js`.
