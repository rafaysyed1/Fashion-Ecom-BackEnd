const express = require('express');
const {doCreateUser,doLoginUser} = require('../Controllers/userControllers') // Assuming User model is in the same directory

const router = express.Router();

router.post('/createUser',doCreateUser);

router.post('/login', doLoginUser );

module.exports = router