const getAllDebts = (request, response) => response.send('Buscando todos os débitos');

const addNewDebt = (request, response) => response.send('Adicionando novo débito');

const deleteOneDebt = (request, response) => response.send('Deletando um débito');

const editDebit = (request, response) => response.send('Editando um débito');

module.exports = {
    getAllDebts,
    addNewDebt,
    deleteOneDebt,
    editDebit
};