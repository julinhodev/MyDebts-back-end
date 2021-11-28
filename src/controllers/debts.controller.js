const ModelDebts = require('../models/debts.model');


const getAllDebts = async (request, response) => {
    try {
        return await ModelDebts.find({})
    } catch (error) {
        return console.log('Deu erro');
    }
};

const addNewDebt = async (request, response) => {
    try {
        const body = request.body;
        const newDebt = await new ModelDebts(body);
        await newDebt.save();
    } catch (error) {
        return console.log('Deu erro');
    }
};

const deleteDebt = (request, response) => response.send('Deletando um débito');

const editDebit = (request, response) => response.send('Editando um débito');

module.exports = {
    getAllDebts,
    addNewDebt,
    deleteDebt,
    editDebit
};