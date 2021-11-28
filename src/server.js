const express = require('express');
const dotenv = require('dotenv');

const router = require('./router/debts.router');
const databaseConnect = require('./database/mongo.connection');

const server = express();
dotenv.config();
server.use(express.json());

databaseConnect();

server.use('', router);

const port = process.env.PORT;
server.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));