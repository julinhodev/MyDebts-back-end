const mongoose = require('mongoose');

const databaseConnect = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clustertasklist.crs6v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    error => error ? console.log(`Erro ao conectar ao Mongo: ${error.message}`) : console.log("Mongo was successfully connected!"));
};

module.exports =  databaseConnect;