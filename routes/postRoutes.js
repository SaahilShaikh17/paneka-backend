//postRoutes.js
const express = require('express');
const router = require('express').Router();
const PostController = require('../controllers/postController');

router.route('/')
    .get(PostController.getAllposts)
    .post(PostController.createPost)

router.put('/:id',PostController.updatePost);
router.delete('/:id',PostController.deletePost);
    // router.route('/:id')
    //     .get()

module.exports = router;