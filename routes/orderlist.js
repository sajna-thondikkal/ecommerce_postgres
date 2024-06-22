const express= require('express');
const router = express.Router();
const orderlistControllers = require('../controllers/orderlist');

// get all order list
router.get('/',orderlistControllers.getAllOrderList);

// get orderlist by id
router.get('/:id',orderlistControllers.getOrderListById);

// create order list
router.post('/',orderlistControllers.createOrderList);

// update order list
router.put('/:id',orderlistControllers.updateOrderList);

// delete order list
router.delete('/:id',orderlistControllers.deleteOrderList);

module.exports = router;