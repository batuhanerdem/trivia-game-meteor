import SimpleSchema from 'simpl-schema';
import { QuestionsCollection } from './QuestionsCollection';

// @ts-ignore
QuestionsCollection.schema = new SimpleSchema({
    number: { type: Number },
    text: { type: String },
    answers: { type: Array },
    "answers.$": { type: String },
    correctAnswer: { type: Number }
})
