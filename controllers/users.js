const userRepository = require('../repositories/users.js');
const ErrorResponse = require('../utils/errorResponse.js');
const asyncHandler = require('../middlewares/asyncHandler.js');
const {hashPassword} = require('../utils/passwordHelper');
const { createjwt } = require('../utils/jwtHelper');
const {compareWithHashedPassword} = require('../utils/passwordHelper');

// get all users
const getAllUsers = asyncHandler(async(req,res,next)=>{
    const users = await userRepository.getAllUsers();
    res.status(200).json({"message":"All users are: ","Users":users});
})

// get user by user id
const getUserByUserId = asyncHandler(async (req,res,next)=>{
    const user_id = req.params.id;
    const user = await userRepository.getUserByUserId(user_id);
    if(user){
        res.status(200).json({"message":"Success","user":user});
    }
    next(new ErrorResponse(`User not exist with id ${user_id}`));
})

// create user
// sign up
const createUser = asyncHandler(async (req,res,next)=>{
    const {user_name,password,phone,role_id} = req.body;
    const hashedpassword = hashPassword(password);
    console.log("msg fro cntro roleid",role_id);

    const userExist = await userRepository.getUserByUserName(user_name);
    if(userExist){
        return(next(new ErrorResponse("User Already exist",400))) ;
    }
    const newUser = await userRepository.createUser(user_name,hashedpassword,phone,role_id);
    console.log("msg from controllers",newUser);
    const token = createjwt(newUser);
    if(newUser){
        res.status(200).json({"message":"successfully created new user",user_name:user_name,token:token});
    }
})

// login use
const loginUser = asyncHandler(async(req,res,next)=>{
    const {user_name,password} = req.body;
    const user = await userRepository.getUserByUserName(user_name);
    if(!user ){
        return(next(new ErrorResponse("invalid credentials",400)));
    }
    const isValid = compareWithHashedPassword(password,user.password);
    if(isValid){
        const token = createjwt(user.user_id);
        return res.status(200).json({message:"Logged In suuccessfully",user:{user_name:user.user_name},token:token});
    }
    return(next(new ErrorResponse("Invalid credentials",400)));
})

const deleteUser = asyncHandler(async (req,res,next)=>{
    const user_id = req.params.id;
    const isExist = await userRepository.getUserByUserId(user_id);
    if(isExist){
        await userRepository.deleteUser(user_id);
        res.status(200).json({"message":`successfully deleted user with id ${user_id}`});
    }
    next(new ErrorResponse("Invalid"));
})

// get user role by user id
const getUserRoleByUserId = asyncHandler(async (req,res,next)=>{
    const user_id = req.params.id;
    const role = await userRepository.getUserRoleByUserId(user_id);
    console.log("msg from contrl role",role);
    if(role){
    res.status(200).json({"message":`user role is ${role}`});
    }
})

// grand total
const grandTotalOfCustomer = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    
    const Gtotal = await userRepository.grandTotalOfCustomer(id);
    if(Gtotal){
        res.status(200).json({"success":true,"Grand total":`Grand total of customer ${id} is ${Gtotal}`});
    }
})


module.exports = {
    createUser,
    loginUser,
    getAllUsers,
    getUserByUserId,
    deleteUser,
    getUserRoleByUserId,
    grandTotalOfCustomer
}