import { Meteor } from 'meteor/meteor';
import { QuestionsCollection } from '../db/QuestionsCollection';

Meteor.methods({
    'question.insert'({ question }) {
        // @ts-ignore
        QuestionsCollection.schema.validate(question);
        QuestionsCollection.insert(question);
    },
    'question.remove'(id) {
        QuestionsCollection.remove({ id: id })
    }
})