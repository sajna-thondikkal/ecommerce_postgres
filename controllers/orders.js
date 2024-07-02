const orderRpository = require('../repositories/orders.js');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middlewares/asyncHandler.js');
const orderServices = require('../services/orders.js');

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
    const {user_id,orderlineitems} = req.body;
    // to find total of each item
    const item_price = orderServices.itemTotel(orderlineitems)
    // to find grand total of purchase
    const grand_total = orderServices.grandTotal(orderlineitems);
    const order = await orderRpository.createOrder(user_id,date,grand_total);
    const create_orderline_item = await orderRpository.createOrderLineItems(orderlineitems,order.order_id);
    const order_items = await orderRpository.getOrderLineItemById(order.order_id);
    res.status(200).json({"success":true,"user_id":user_id,"date":date,"Order Items":order_items,"grand total":grand_total});
    // next(new ErrorResponse("order not created",404));
})

// update orders
const updateOrder = asyncHandler(async(req,res,next)=>{
    const date = new Date();
    const order_id = req.params.id;
    const {user_id,orderlineitems} = req.body;
    const total_price = orderServices.itemTotel(orderlineitems);
    const grand_total = orderServices.grandTotal(orderlineitems);
    const update_order = await orderRpository.updateOrder(order_id,user_id,date,grand_total);
    const delete_lineitem = await orderRpository.deleteOrderLineItem(order_id);
    const update_order_items = await orderRpository.createOrderLineItems(orderlineitems,order_id);
    const updated_order = await orderRpository.getOrderById(order_id);
    const updated_orderline_item = await orderRpository.getOrderLineItemById(order_id);
    if(update_order && update_order_items){
        res.status(200).json({"success":true,"order_id":order_id,"user_id":user_id,"updated_items":updated_orderline_item,"grand total":grand_total});
    }
    next(new ErrorResponse(`Order does not exist with id ${order_id}`,404));
})

// delete order
const deleteOrder = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const order = orderRpository.getOrderById(id);
    if(order){
        await orderRpository.deleteOrderLineItem(id);
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