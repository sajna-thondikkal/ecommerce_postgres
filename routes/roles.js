const express = require('express');
const router = express.Router();
const roleControllers = require('../controllers/roles');
const { verifyTokenHandler} = require('../middlewares/jwtHandler.js');
const {verifyRoles} = require('../middlewares/verifyRoles.js');


// get all user role
router.get('/',roleControllers.getAllUserRole),

// get user role by id
router.get('/:id',roleControllers.getUserRoleById);

// create user role
router.post('/',[verifyTokenHandler,verifyRoles(['admin'])],roleControllers.createUserRole);

// update user role
router.put('/:id',[verifyTokenHandler,verifyRoles(['admin'])],roleControllers.updateUserRole);

// delete user role
router.delete('/:id',[verifyTokenHandler,verifyRoles(['admin'])],roleControllers.deleteUserRole);

module.exports = router