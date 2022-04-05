const express = require('express');

const router = express.Router();

// Controller
const {
  addUsers,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getProfile,
} = require('../controllers/user');
// import controller function here

// Route
router.post('/user', addUsers);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

// add route here
router.get('/profiles', getProfile);

module.exports = router;
