const express = require('express');

const router = express.Router();

// Controller
// import controller function here
const { addUsers, getUsers, getUser } = require('../controllers/user');

// Route
router.post('/user', addUsers);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
// add route here

module.exports = router;
