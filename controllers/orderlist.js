const orderlistRepositories = require('../repositories/orderlist.js');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middlewares/asyncHandler.js');


// get all orderlist
const getAllOrderList = asyncHandler(async (req,res,next)=>{
    const orderlists = await orderlistRepositories.getAllOrderList();
    res.status(200).json({"all list":orderlists});
})

// get order list by id
const getOrderListById = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const orderList = await orderlistRepositories.getOrderListById(id);
    if(orderList){
        res.status(200).json({"Required List":orderList});
    }
    next(new ErrorResponse(`order list does not exist with id ${id}`,404));
})

// create order list
const createOrderList = asyncHandler(async (req,res,next)=>{
    const product_name = req.body;
    const unit_price = req.body;
    const quantity = req.body;
    const newlist = await orderlistRepositories.createOrderList(product_name,unit_price,quantity);
    if(newlist){
        res.status(200).json({"message":"successfully created new order list","data":newlist});
    }
})

// update order list
const updateOrderList = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const {product_name} = req.body;
    const {unit_price} = req.body;
    const {quantity} = req.body;
    const orderlist = await orderlistRepositories.getOrderListById(id);
    if(orderlist){
        const update = await orderlistRepositories.updateOrderList(id,product_name,unit_price,quantity);
        const updatedList = await orderlistRepositories.getOrderListById(id);
        res.status(200).json({"message":"successfully updated","data":updatedList});
    }
    next(new ErrorResponse(`order list does not exist with id ${id}`,404));
})

// delete order list
const deleteOrderList = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const orderList = await orderlistRepositories.getOrderListById(id);
    if(orderList){
        await orderlistRepositories.deleteOrderList(id);
        res.status(200).json({"message":`Successfully deleted order list with id ${id}`});
    }
    next(new ErrorResponse(`order list does not exist with id ${id}`,404));
})

module.exports = {
    getAllOrderList,
    getOrderListById,
    createOrderList,
    updateOrderList,
    deleteOrderList
}