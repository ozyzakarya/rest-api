const { auth } = require('../helpers');
const express = require('express');

const register = require('./register');
const login = require('./login');
const job = require('./jobs');

const v1 = express.Router();

v1.use('/register', register);
v1.use('/login', login);
v1.use('/jobs', auth, job);

module.exports = v1;
