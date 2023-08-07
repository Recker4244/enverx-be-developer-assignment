import { NextFunction, Request, Response } from "express";

const Joi = require('joi');

const blogSchema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    category: Joi.string().min(3).max(50).required(),
    content: Joi.string().min(3).max(200).required(),
});

const optionSchema = Joi.object({
    sort: Joi.string().min(3).max(50),
    filter: Joi.string().min(3).max(50)
});

const blogValidator = (req: Request, res: Response, next: NextFunction) => {
    const { error } = blogSchema.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
};
const optionsValidator = (req: Request, res: Response, next: NextFunction) => {
    const { error } = optionSchema.validate(req.query);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
    } else {
        next();
    }
};

module.exports = { blogValidator, optionsValidator };