const express = require('express');
const userRouter = require('./user.router');
const postRouter = require('./post.router');
const protectedRouter = require('./protected');
const router = express.Router();

// Combine userRouter and postRouter
router.use('/user',userRouter);
router.use('/post',postRouter);
router.use('/post',protectedRouter);

module.exports = router;