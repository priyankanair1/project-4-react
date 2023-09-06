const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');

// GET /api/products
router.get('/', categoriesCtrl.index);

module.exports = router;
