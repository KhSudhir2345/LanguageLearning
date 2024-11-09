import mongoose from "mongoose";
import Quiz from './models/quizSchema.js'
import fs from 'fs/promises';
import dotenv from 'dotenv';

dotenv.config();

const data=await fs.readFile('db.json','utf8');
const quizData=JSON.parse(data);
console.log(quizData.Quiz);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(async () => {
    console.log('Connected to MongoDB');

    await Quiz.insertMany(quizData.Quiz);
    console.log('Data inserted');
    mongoose.connection.close();
  }).catch(error=> console.error('could not connect:',error));