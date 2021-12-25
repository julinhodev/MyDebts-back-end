const ModelUser = require('../models/user.model');

const login = async (request, response) => {
    try {
        const email = request.body.email;
        const password = request.body.password;
        const user = await ModelUser.findOne({ email: email, password: password });
        if(user == null) {
            return response.status(404).send("Usuário não foi encontrado");
        }
        return response.status(201).send(user);
    } catch (error) {
        return console.log('Erro ao pegar login');
    }
};

const addNewUser = async (request, response) => {
    try {
        const body = request.body;
        const newUser = await new ModelUser(body);
        if(await ModelUser.findOne({ email: newUser.email}) != null) return response.status(409).send("Já existe um usuário com esse email");

        await newUser.save();
        return response.status(201).send(newUser);
    } catch (error) {
        return console.log(error.message);
    }
};

module.exports = {
    login,
    addNewUser,
};


/*

    User
    userId

    Profile
    profileId
    userId = 2

    Debts
    debtsId
    profileId

*/