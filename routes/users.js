const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');
const { verifyTokenHandler} = require('../middlewares/jwtHandler.js');
const {verifyRoles} = require('../middlewares/verifyRoles.js');


// get all users
router.get('/',userControllers.getAllUsers);

// get user by user id
router.get('/:id',userControllers.getUserByUserId);

// signup user
router.post('/signup',userControllers.createUser);

// login
router.post('/login',userControllers.loginUser);

// delete user
router.delete('/:id',[verifyTokenHandler,verifyRoles(['admin'])],userControllers.deleteUser);

// get user role
router.get('/role/:id',userControllers.getUserRoleByUserId);

// get grand total of each user after purchase.
router.get('/grandtotal/:id',userControllers.grandTotalOfCustomer);


module.exports = router;