//commentRoutes.js
const express = require('express');
const router = require('express').Router();
const commentController = require('../controllers/commentController');

router.post('/:postId', commentController.createComment);
router.put('/:id',commentController.updateComment);
router.delete('/:id',commentController.deleteComment);
router.get('/post/:postId',commentController.getCommentsForPost)



module.exports = router;