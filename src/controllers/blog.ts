const blogService = require('../services/blog.ts');
import { Request, Response } from 'express';
const HTTPError = require('../utils/errors/http_errors');

const createBlog = async (req: Request, res: Response) => {
    try {
        const blogData = req.body;
        const blog = await blogService.createBlog(blogData);
        res.status(200).json(blog);
    } catch (error: any) {
        res.status(500).json(error.message);
    }
};

const getBlogs = async (req: Request, res: Response) => {
    try {
        const blogs = await blogService.getBlogs();
        res.status(200).json(blogs);
    } catch (error: any) {
        res.status(500).json(error.message);
    }
};

const getBlogById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const blog = await blogService.getBlogById(id);
        res.status(200).json(blog);
    } catch (error: any) {
        if (error instanceof HTTPError)
            res.status(error.code).json(error.message);
        else
            res.status(500).json(error.message);
    }
};

const updateBlogById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const blogData = req.body;
        const blog = await blogService.updateBlogById(id, blogData);
        res.status(200).json(blog);
    } catch (error: any) {
        if (error instanceof HTTPError)
            res.status(error.code).json(error.message);
        else
            res.status(500).json(error.message);
    }
};

const deleteBlogById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const blog = await blogService.deleteBlogById(id);
        res.status(200).json(blog);
    } catch (error: any) {
        if (error instanceof HTTPError)
            res.status(error.code).json(error.message);
        else
            res.status(500).json(error.message);
    }
}

module.exports = { createBlog, getBlogs, getBlogById, updateBlogById, deleteBlogById };
