const blogService = require('../services/blog.ts');
import { Request, Response } from 'express';

const createBlog = async (req: Request, res: Response) => {
    try {
        const blogData = req.body;
        const blog = await blogService.createBlog(blogData);
        res.status(200).json(blog);
    } catch (error: any) {
        res.status(500).json(error.message);
    }
};

module.exports = { createBlog };
