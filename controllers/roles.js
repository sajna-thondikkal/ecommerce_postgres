const userRoleRepository = require('../repositories/roles.js');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middlewares/asyncHandler.js');

// get all users
const getAllUserRole = asyncHandler(async (req,res,next)=>{
    const users = await userRoleRepository.getAllUserRole();
    res.status(200).json({"message":"success","data":users});
})

// get user by id
const getUserRoleById = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const user =await userRoleRepository.getUserRoleById(id);
    if(user){
        res.status(200).json({"success":true,"data":user});
    }
    next(new ErrorResponse(`user role does not exist with id ${id}`,404));
})

// create user role
const createUserRole = asyncHandler(async(req,res,next)=>{
    const {role_name} = req.body;
    const created = await userRoleRepository.createUserRole(role_name);
    if(created){
        res.status(200).json({"success":true,"data":created});
    }
    next(new ErrorResponse("user role not created",404));
})

// update user role
const updateUserRole = asyncHandler(async(req,res,next)=>{
    const id= req.params.id;
    const {role_name} = req.body;
    const rolexist = await userRoleRepository.getUserRoleById(id);
    if(rolexist){
        const updaterole = await userRoleRepository.updateUserRole(id,role_name);
        const updated = await userRoleRepository.getUserRoleById(id);
        res.status(200).json({"message":"success","data":updated});
    }
    next(new ErrorResponse(`user role does not exist with id ${id}`,404));
})

// delete user role
const deleteUserRole = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const deleted = await userRoleRepository.deleteUserRole(id);
    if(deleted){
        res.status(200).json({"message":`successfully deleted user role with id ${id}`});
    }
    next(new ErrorResponse(`user role does not exist with id ${id}`,404));
})

module.exports = {
    getAllUserRole,
    getUserRoleById,
    createUserRole,
    updateUserRole,
    deleteUserRole
}