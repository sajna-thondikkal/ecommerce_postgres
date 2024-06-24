const express = require('express');
const router = express.Router();
const roleControllers = require('../controllers/roles');

// get all user role
router.get('/',roleControllers.getAllUserRole),

// get user role by id
router.get('/:id',roleControllers.getUserRoleById);

// create user role
router.post('/',roleControllers.createUserRole);

// update user role
router.put('/:id',roleControllers.updateUserRole);

// delete user role
router.delete('/:id',roleControllers.deleteUserRole);

module.exports = router