import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { QuestionsCollection } from '/imports/db/QuestionsCollection'
import '/imports/db/QuestionSchema'
import '/imports/api/questionMethods'
import '/imports/api/questionPublications'
import '/imports/db/UserStatsCollection'
import '/imports/api/userStateMethod'
import '/imports/api/userStatePublications'
import '/imports/api/accountsPublications'
import { UserStatsCollection } from '/imports/db/UserStatsCollection';

Meteor.startup(() => {
    //UserStatsCollection.remove({})
    //QuestionsCollection.remove({});
    if (!QuestionsCollection.findOne({})) {
        for (let i = 1; i < 10; i++) {
            let question = {
                number: i,
                text: `${i}. question`,
                answers: ["answer1", "answer2", "answer3", "answer4"],
                correctAnswer: 1
            }
            Meteor.call('question.insert', { question })
        }
    }
    if (!Accounts.findUserByUsername("admin")) {
        Accounts.createUser({
            username: "admin",
            password: "123",

        })
    }
});
