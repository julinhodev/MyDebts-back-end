const express = require('express');
const dotenv = require('dotenv')

const server = express();
dotenv.config();

const port = process.env.PORT;
server.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));