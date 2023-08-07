const Router = require('express');
const router = Router();
const blogController = require('../controllers/blog');

router.post('/posts', blogController.createBlog);
router.get('/posts', blogController.getBlogs);
router.get('/posts/:id', blogController.getBlogById);

module.exports = { router };