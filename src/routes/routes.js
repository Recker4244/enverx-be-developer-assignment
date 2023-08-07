const Router = require('express');
const router = Router();
const blogController = require('../controllers/blog');

router.post('/posts', blogController.createBlog);

module.exports = { router };