const express = require('express');
const router = express.Router();

const {
  addAccount,
  getAccount,
  updateAccount,
  deleteAccount,
  transferAccount,
} = require('../controllers/accountController');

router.get('/', getAccount);
router.post('/create', addAccount);
router.put('/update/:id', updateAccount);
router.put('/transfer/:id', transferAccount);
router.get('/account/:id', deleteAccount);

module.exports = router;
