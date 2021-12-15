const ModelDebts = require('../models/debts.model');

const getAllDebts = async (request, response) => {
    try {
        const debts = await ModelDebts.find({});
        return response.status(201).send(debts);
    } catch (error) {
        return console.log('Erro em pegar todas as dividas');
    }
};

const addNewDebt = async (request, response) => {
    try {
        const body = request.body;
        const newDebt = await new ModelDebts(body);
        await newDebt.save();
        return response.status(201).send(newDebt);
    } catch (error) {
        return console.log(error.message);
    }
};

const deleteDebt = async (request, response) => {
    try {
        const debtId = request.params.id;
        const debtDeleted = await ModelDebts.findByIdAndDelete(debtId);
        return response.status(201).send(debtDeleted);
    } catch (error) {
        return console.log('Erro em deletar um débito');
    }
};

const editDebit = async (request, response) => {
        try {
    const body = request.body;
    const debtId = request.params.id;
    const debt = await ModelDebts.findByIdAndUpdate(debtId, body);
    await debt.save();
    return response.status(201).send('Débito modificado');
} catch (error) {
    return console.log('Erro em editar um debito');
}
};

module.exports = {
    getAllDebts,
    addNewDebt,
    deleteDebt,
    editDebit
};