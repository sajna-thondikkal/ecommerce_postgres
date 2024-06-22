const orderRpository = require('../repositories/orders.js');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middlewares/asyncHandler.js');

// get all orders
const getAllOrder = asyncHandler(async(req,res,next)=>{
    const orders = await orderRpository.getAllOrder();
    res.status(200).json({"success":true,"data":orders});
})

// get order by id
const getOrderById = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const order = await orderRpository.getOrderById(id);
    if(order){
        res.status(200).json({"success":true,"data":order});
    }
    next(new ErrorResponse(`order does not exist with id ${id}`,404));

})

// create order
const createOrder = asyncHandler(async (req,res,next)=>{
    const date = new Date();
    const {totalAmount,customer_id} = req.body;
    const create = await orderRpository.createOrder(date,totalAmount,customer_id);
    if(create){
        res.status(200).json({"success":true,"data":create});
    }
    next(new ErrorResponse(`Order does not exist with id ${id}`,404));
})

// update orders
const updateOrder = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const {totalAmount} = req.body;
    const exist = await orderRpository.getOrderById(id);
    if(exist){
        const update = await orderRpository.updateOrder(id,totalAmount);
        const updatedOrder = await orderRpository.getOrderById(id);
        res.status(200).json({"success":true,"data":updatedOrder});
    }
    next(new ErrorResponse(`Order does not exist with id ${id}`,404));
})

// delete order
const deleteOrder = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const order = orderRpository.getOrderById(id);
    if(order){
        await orderRpository.deleteOrder(id);
        res.status(200).json({"success":true,"message":`succesfully deleted order ${id}`});
    }
    next(new ErrorResponse(`Order does not exist with id ${id}`,404));
})


module.exports = {
    getAllOrder,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}