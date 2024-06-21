const express = require('express');
const router = express.Router();
const customerControllers = require('../controllers/customers.js');

// get all customers
router.get('/',customerControllers.getAllCustomers);

// get customer by id
router.get('/:id',customerControllers.getCustomerById);

// create customers
router.post('/',customerControllers.createCustomer);

// update customer
router.put('/:id',customerControllers.updateCustomer);

// delet customer
router.delete('/:id',customerControllers.deleteCustomer);

module.exports = router;