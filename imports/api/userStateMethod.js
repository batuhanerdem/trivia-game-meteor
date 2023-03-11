import { Meteor } from 'meteor/meteor';
import { UserStatsCollection } from '../db/UserStatsCollection';

Meteor.methods({
    'userState.insert'({ user }) {
        // @ts-ignore
        UserStatsCollection.schema?.validate(user);
        UserStatsCollection.insert(user);
    },
    'userState.update'(isCorrect) {
        const username = Meteor.user().username
        const user = UserStatsCollection.findOne({ username: username })
        const correctAnswers = isCorrect ? user.correctAnswers + 1 : user.correctAnswers
        const totalQuestions = user.totalQuestions + 1
        UserStatsCollection.update(user, {
            username: username,
            totalQuestions: totalQuestions,
            correctAnswers: correctAnswers
        })
    }
})
