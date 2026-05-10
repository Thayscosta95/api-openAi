require('dotenv').config(); // aqui é como se ele estivesse dizendo : Node, leia meu arquivo .env e traga as variáveis dele para o sistema.

//importar as bibliotecas 

const express = require('express'); 
const cors = require('cors'); // Permite que o frontend (que pode estar rodando em outro domínio ou porta) acesse minha API sem problemas de CORS (Cross-Origin Resource Sharing).
const { OpenAI } = require('openai');// Importa a classe OpenAI da biblioteca openai para que possamos criar uma instância do cliente e fazer chamadas para a API do OpenAI.

const app = express(); //cria minha api ou seja cria um servidor chamado app Sem isso: frontend não consegue acessar minha API

app.use(cors());

app.use(express.json()); //Permite ler JSON no body da requisição.

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});  // cria a conexão com a API do OpenAI usando a chave de API que está no arquivo .env


//cria a rota para receber as mensagens do frontend ou seja quando alguém enviar dados para /chat, execute isso
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body; //pega a mensagem que o frontend enviou no corpo da requisição

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini", // aqui estou dizendo qual modelo do OpenAI eu quero usar para gerar a resposta
      messages: [
        {
          role: "user",
          content: message,
        }, // aqui estou montando a conversa (role: quem está falando/ content: o que está sendo falado, ou seja o texto ou mensagem da pessoa)
      ],
    });

    res.json({
      reply: response.choices[0].message.content,
    }); // retorna a resposta do OpenAI para o frontend, ou seja, a resposta do chat (pega o texto principal da resposta da IA)
  } catch (error) {
    console.log(error); // Mostra o erro no terminal

    res.status(500).json({
      error: "Erro ao chamar OpenAI",
    }); // Se algo quebrar, entra aqui e retorna um erro para o frontend
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
