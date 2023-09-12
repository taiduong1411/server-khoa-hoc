const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AccountModel = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        // required: true
    },
    dob: {
        type: String,
        // required: true
    },
    phone: {
        type: String,
        // required: true,
        // unique: true
    },
    avatar: {
        type: String
    },
    level: {
        type: String,
        default: "1"
    },
    verifyAccount: {
        type: Boolean,
        default: false
    }

});
module.exports = mongoose.model("Account", AccountModel);