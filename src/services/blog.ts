const { Sequelize } = require('sequelize');
import { options } from 'joi';
import db from '../../database/models';
import { BlogInstance } from '../../database/models/blog';
const HTTPError = require('../utils/errors/http_errors');

type BlogData = {
    title: string;
    content: string;
    category: string;
};

const createBlog = async (blogData: BlogData) => {
    const blog = await db.Blog.create(blogData);
    return blog;
};

const getBlogs = async () => {
    const blogs = await db.Blog.findAll({});
    return blogs;
};

const getBlogById = async (id: number) => {
    const blog = await db.Blog.findOne({ where: { id } });
    if (!blog) {
        throw new HTTPError('Blog not found', 404);
    }
    return blog;
};

module.exports = { createBlog, getBlogs, getBlogById };
