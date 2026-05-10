# 🚀 API REST com Node.js + Integração com OpenAI

Este projeto é uma API REST desenvolvida com **Node.js e Express**, integrada à API da OpenAI, com foco em estudo de **backend, APIs e Inteligência Artificial Generativa**.

---
## 📝 Observações sobre o código

Este projeto contém comentários no código com o objetivo de facilitar o entendimento do fluxo da aplicação.

Os comentários foram adicionados de forma intencional para:

- Explicar o funcionamento de cada etapa da API
- Facilitar o aprendizado durante o desenvolvimento
- Auxiliar na revisão futura do código
- Demonstrar compreensão da lógica do backend

Com o avanço do projeto e da maturidade técnica, esses comentários podem ser reduzidos ou removidos em versões futuras para código mais limpo e próximo de um ambiente de produção.

---

## 📌 Objetivo do Projeto

O objetivo deste projeto é praticar:

- Criação de APIs REST com Node.js
- Integração com APIs externas (OpenAI)
- Manipulação de requisições HTTP
- Uso de variáveis de ambiente (.env)
- Estruturação de backend moderno

---

## ⚙️ Tecnologias Utilizadas

- Node.js
- Express
- OpenAI API
- Dotenv
- CORS

---

## 🧠 Como funciona

A API recebe uma mensagem do usuário via requisição HTTP e envia essa mensagem para a OpenAI. Em seguida, retorna a resposta gerada pela inteligência artificial.

### Fluxo:

Cliente → API Node.js → OpenAI → Resposta

---

## 📡 Endpoints

### 🔹 POST /chat

Envia uma mensagem para a IA e retorna a resposta.

#### 📥 Body (JSON):

```json
{
  "message": "Explique o que é Node.js"
}
