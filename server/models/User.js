const {Schema, model, ObjectID} = require("mongoose");

const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    diskSpace: {type: Number, default: 1024**3*10},
    usedSpace: {type: Number, default: 0},
    avatar: {type: String},
    files: [{type: ObjectID, ref: 'File'}]
})

module.exports = model("User", User);