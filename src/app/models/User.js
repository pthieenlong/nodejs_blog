const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    name: String,
    password: String,
});
// const Quiz = new Schema({
//     code: String,
//     questions: {
//         question: String,
//         answers : {
//             answer: String,
//             result: Boolean
//         },
//     },
//     createAt: {type: Date, default: Date.now},
//     updateAt: {type: Date, default: Date.now},
// })

module.exports = mongoose.model('User', User);
