const express = require('express');
const router = express.Router();
const Category = require('../models/categories');
const categoryControllers = require('../controllers/categories');

// get all category
router.get('/',categoryControllers.getAllCategories);

// get category by id
router.get('/:id',categoryControllers.getCategoryById);

// create category
router.post('/',categoryControllers.createCategory);

// update category
router.put('/:id',categoryControllers.updateCategory);

// delete category
router.delete('/:id',categoryControllers.deleteCategory);

module.exports = router;