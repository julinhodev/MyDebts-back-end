const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const userRouter = require('./router/user.router');
const debtsRouter = require('./router/debts.router');

const databaseConnect = require('./database/mongo.connection');

const server = express();
dotenv.config();

server.use(cors());
server.use(express.json());

databaseConnect();

server.use('', userRouter);
server.use('', debtsRouter);

const port = process.env.PORT || 80;
server.listen(port, () => console.log(`The server is running on the port ${port}`));