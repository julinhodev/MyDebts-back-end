const express = require('express');
const router = express.Router();

const {
    getAllDebts,
    addNewDebt,
    deleteDebt,
    editDebit
} = require('../controllers/debts.controller');

router.get('/debts', getAllDebts);

router.put('/debts', addNewDebt);

router.delete('/debts/:id', deleteDebt);

router.patch('/debts/:id', editDebit);

module.exports = router;