import db from '../../database/models';
const HTTPError = require('../utils/errors/http_errors');

type BlogData = {
    title: string;
    content: string;
    category: string;
};

type Options = {
    sort?: string;
    filter?: string;
}

const createBlog = async (blogData: BlogData) => {
    const blog = await db.Blog.create(blogData);
    return blog;
};

const getBlogs = async (options: Options) => {
    let blogs = await db.Blog.findAll({});
    if (options.filter) {
        blogs = blogs.filter(blog => blog.category === options.filter);
    }
    if (options.sort) {
        if (options.sort === 'name') {
            blogs = blogs.sort((a, b) => { return a.title.localeCompare(b.title) });
        }
        else if (options.sort === 'date') {
            blogs = blogs.sort((a, b) => { return a.createdAt.getTime() - b.createdAt.getTime() });
        }
    };

    return blogs;
}

const getBlogById = async (id: number) => {
    const blog = await db.Blog.findOne({ where: { id } });
    if (!blog) {
        throw new HTTPError('Blog not found', 404);
    }
    return blog;
};

const updateBlogById = async (id: number, blogData: BlogData) => {
    const blog = await db.Blog.findOne({ where: { id } });
    if (!blog) {
        throw new HTTPError('Blog not found', 404);
    }
    const updatedBlog = await blog.update(blogData);
    return updatedBlog;
};

const deleteBlogById = async (id: number) => {
    const blog = await db.Blog.findOne({ where: { id } });
    if (!blog) {
        throw new HTTPError('Blog not found', 404);
    }
    await blog.destroy();
    return blog;
};

module.exports = { createBlog, getBlogs, getBlogById, updateBlogById, deleteBlogById };
