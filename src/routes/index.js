const express = require('express');

const router = express.Router();

// Controller
// import controller here
const { addUsers } = require('../controllers/user');

// Route
// add route here
router.post('/user', addUsers);

module.exports = router;
