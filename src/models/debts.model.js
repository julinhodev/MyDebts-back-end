const { model, Schema } = require('mongoose');

const DebtsSchema = Schema({
    description:{
        type: String,
        required: true
    },
    value: {
        type: Number,
        default: 0,
        required: true
    },
    installments:{
        type: Number,
        default: 0
    },
    paidInstallments: {
        type: Number,
        default: 0
    },
    paymentStatus: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: new Date().toUTCString()
    },
    everything: {
        type: String,
        default: "Sem observações para essa dívida!",
        required: true
    }
});

const ModelDebts = model('Debts', DebtsSchema)

module.exports = ModelDebts;