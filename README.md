<h1 align="center">
  <img alt="logo-gobarber" src="https://cybersaturn-hackathon.github.io/cybersaturn/src/assets/logo.png" width="500px">
</h1>

<h3 align="center">
  SaturnSports RealTime Match
</h3>

<p align="center">Acompanhe o placar em tempo real!</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/CyberSaturn-Hackathon/realtime-match?color=darkblue">

  <a href="http://github.com/iamthepoe" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-CyberSaturn-darkblue">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/CyberSaturn-Hackathon/realtime-match?color=darkblue">

  <a href="https://github.com/PeruibeTEC/Server/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/CyberSaturn-Hackathon/realtime-match?color=darkblue">
  </a>
</p>

## 📋 Índice

- [Geral](#geral)
- [Tecnologias](#tecnologias)
- [Iniciando o projeto](#iniciando-o-projeto)
  - [Requisitos](#requisitos)
  - [Instalando e configurando o projeto](#instalando-e-configurando-o-projeto)
- [Rotas](#-rotas)

## 👀 Geral

SaturnSports é uma aplicação desenvolvida durante o hackathon da Etec de Peruíbe em 2023 com o objetivo de facilitar o gerenciamento e consumo dos jogos escolares. Este repositório contém apenas uma parte da aplicação, o placar em tempo real da partida.

## 🚀 Tecnologias

As principais tecnologias utilizadas foram:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Socket.io](https://socket.io/)
- [EJS](https://ejs.co/)

## 💻 Iniciando o Projeto

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://classic.yarnpkg.com/)

### Instalando e configurando o projeto

*Clone o repositório e acesse sua pasta*

```bash
$ git clone https://github.com/CyberSaturn-Hackathon/realtime-match && cd realtime-match
```

*Siga os passos*

```bash
# Instale as dependências
$ npm install

# Inicie o servidor
$ npm run serve

# O servidor estará rodando em watch mode na porta 3000
```

## 🤔 Rotas

<ul>
  <li><code>'/'</code>: rota principal, onde o usuário pode consumir os dados do placar em tempo real.</li>
  <li><code>'/adm'</code>: rota do administrador, onde ele pode atualizar os pontos do placar e enviá-los ao usuário.</li>
  <li><code>'/session/points'</code>: rota que devolve os pontos atuais daquela partida, caso não haja nenhum, retorna "null".</li>
</ul>
