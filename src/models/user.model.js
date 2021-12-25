const { model, Schema } = require('mongoose');

const DebtsSchema = Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const ModelDebts = model('User', DebtsSchema)

module.exports = ModelDebts;