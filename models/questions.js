var mongoose = require("mongoose");

var QuestionSchema = new mongoose.Schema(
    {question : String},
    {answer : [ {options : String} ] }
);

module.exports = mongoose.model("Questions" , QuestionSchema);