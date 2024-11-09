import mongoose from 'mongoose';

const questionSchema=new mongoose.Schema({
    english:{ type:String, required:true},
    options:{ type:[String],required:true},
    hindi:{ type:String},
    spanish:{ type:String},
    telugu:{ type:String}
});

const quizSchema=new mongoose.Schema({
    level:{ type:String, required:true},
    language:{ type:String,required:true},
    questions:[questionSchema]
});

quizSchema.index({ level:1,language: 1},{unique: true});

const Quiz=mongoose.model('Quiz',quizSchema);
export default Quiz;