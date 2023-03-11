import SimpleSchema from 'simpl-schema';
import { UserStatsCollection } from './UserStatsCollection';
// @ts-ignore
UserStatsCollection.schema = new SimpleSchema({
    username: { type: String },
    totalQuestions: { type: Number },
    correctAnswers: { type: Number }
})