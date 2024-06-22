const customerRepository = require('../repositories/customers');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middlewares/asyncHandler.js');

//@desc get all customers
//@rout GET/customers
//access public
const getAllCustomers = asyncHandler(async(req,res,next)=>{
    const customers = await customerRepository.getAllCustomers();
    if(customers){
        res.status(200).json({"success":true,"data":customers});
    }
})

//@desc get customer by id
//@rout GET/customers/id
//access public
const getCustomerById = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const customer = await customerRepository.getCustomerById(id);
    if(customer){
        res.status(200).json({"success":true,"data":customer});
    }
    next(new ErrorResponse(`Customer doesnot exist with id ${id}`,404));
})

//@desc create customer
//@rout POST/customers
//access public
const createCustomer = asyncHandler(async(req,res,next)=>{
    const name = req.body;
    const phone = req.body;
    const customer = await customerRepository.createCustomer(name,phone);
    if(customer){
        res.status(200).json({"success":true,"data":customer});
    }
    next(new ErrorResponse("customer not created",404));
})

//@desc update customer
//@rout PUT/customers/id
//access public
const updateCustomer = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const {name} = req.body;
    const customerExist = await customerRepository.getCustomerById(id);
    if(customerExist){
        const update = await customerRepository.updateCustomer(id,name);
        const updatedCustomer = await customerRepository.getCustomerById(id);
        res.status(200).json({"success":true,"data":updatedCustomer});
    }
    next(new ErrorResponse(`Customer doesnot exist with id ${id}`,404));
})

//@desc delete customer
//@rout DELETE/customers/id
//access public
const deleteCustomer = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const deletedCustomer = await customerRepository.deleteCustomer(id);
    if(deletedCustomer){
        res.status(200).json({"success":true,"message":`succesfully deleted customer with id ${id}`});
    }
    next(new ErrorResponse(`Customer doesnot exist with id ${id}`,404));
})

// grand total
const grandTotalOfCustomer = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    
    const Gtotal = await customerRepository.grandTotalOfCustomer(id);
    if(Gtotal){
        res.status(200).json({"success":true,"Grand total":`Grand total of customer ${id} is ${Gtotal}`});
    }
})

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    grandTotalOfCustomer
}