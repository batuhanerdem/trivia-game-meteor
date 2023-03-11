import { Meteor } from 'meteor/meteor';
import { UserStatsCollection } from '../db/UserStatsCollection';

Meteor.publish("userStates", function publishQuestion() {
    return UserStatsCollection.find();
})