const Router = require('express');
const router = Router();
const blogController = require('../controllers/blog');
const validator = require('../utils/middleware/validation');

router.post('/posts', validator.blogValidator, blogController.createBlog);
router.get('/posts', validator.optionsValidator, blogController.getBlogs);
router.get('/posts/:id', blogController.getBlogById);
router.put('/posts/:id', validator.blogValidator, blogController.updateBlogById);
router.delete('/posts/:id', blogController.deleteBlogById);

module.exports = { router };