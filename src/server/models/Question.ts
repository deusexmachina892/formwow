import * as mongoose from 'mongoose';
import * as Joi from 'joi';

export const QuestionSchema: mongoose.Schema = new mongoose.Schema({
    title: {
        type: String
    },
    isParagraph: {
        type: Boolean,
        default: true
    },
    content: {
        type: mongoose.Schema.Types.Mixed
    },
    answers: [
       { 
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Answer'
       }
    ],
    created_date: {
        type: Date,
        default: Date.now()
    }
});

export const validateQuestion = (question) => {
    const schema = {
        title: Joi.string().min(3).max(255).required(),
        isParagraph: Joi.boolean().required(),
        content: Joi.required()
    }

    return Joi.validate(question, schema);
}