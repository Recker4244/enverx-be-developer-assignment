const { Sequelize } = require('sequelize');
import db from '../../database/models';
import { BlogInstance } from '../../database/models/blog';

type BlogData = {
    title: string;
    content: string;
    category: string;
};

const createBlog = async (blogData: BlogData) => {
    const blog = await db.Blog.create(blogData);
    return blog;
};

module.exports = { createBlog };
