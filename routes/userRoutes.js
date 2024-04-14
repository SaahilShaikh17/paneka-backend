//userRoutes.js
const express = require('express');
const router = require('express').Router();
const UserController = require('../controllers/userController');

router.route('/')
    .get(UserController.getAllUsers)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser)

    // router.route('/:id')
    //     .get()

module.exports = router;