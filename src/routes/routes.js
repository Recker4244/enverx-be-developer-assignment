const Router = require('express');
const router = Router();
const blogController = require('../controllers/blog');

router.post('/posts', blogController.createBlog);
router.get('/posts', blogController.getBlogs);
router.get('/posts/:id', blogController.getBlogById);
router.put('/posts/:id', blogController.updateBlogById);
router.delete('/posts/:id', blogController.deleteBlogById);

module.exports = { router };