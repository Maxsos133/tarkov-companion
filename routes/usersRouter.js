const express = require('express');
const Router = express.Router();
const controller = require('../controllers/userController');
const { User } = require('../models'); // Import the User model

Router.get('/', controller.getUsers);
Router.get('/:id', controller.getUsersById);



module.exports = Router;
