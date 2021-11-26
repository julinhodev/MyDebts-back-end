const express = require('express');
const router = express.Router();

const {
    getAllDebts,
    addNewDebt,
    deleteOneDebt,
    editDebit
} = require('../controllers/debts.controller');

router.get('/debts', getAllDebts);

router.put('/debts', addNewDebt);

router.delete('/debts/:id', deleteOneDebt);

router.patch('/debts/:id', editDebit);

module.exports = router;