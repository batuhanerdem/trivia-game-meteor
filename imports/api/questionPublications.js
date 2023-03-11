import { Meteor } from 'meteor/meteor';
import { QuestionsCollection } from '../db/QuestionsCollection';

Meteor.publish("questions", function publishQuestion() {
    return QuestionsCollection.find();
})