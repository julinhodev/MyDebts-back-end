const express = require('express');
const router = express.Router();

const {
    login,
    addNewUser,
} = require('../controllers/user.controller');

router.post('/login', login);
router.post('/register', addNewUser);

module.exports = router;