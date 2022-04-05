const express = require('express');

const router = express.Router();

// Controller
const {
  addUsers,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserProducts,
} = require('../controllers/user');
const { getProduct, addProduct } = require('../controllers/product');
const {
  getTransactions,
  addTransaction,
} = require('../controllers/transaction');

// Route
router.post('/user', addUsers);
router.get('/user-products', getUserProducts);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

router.get('/products', getProduct);
router.post('/product', addProduct);

router.get('/transactions', getTransactions);
router.post('/transaction', addTransaction);

module.exports = router;
