import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/user.js';
import Router from './routes/questionRoutes.js';

dotenv.config();
const app=express();
const PORT=process.env.PORT || 8000;
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(express.json());

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));
app.use((req,res,next) => {
    res.locals.path=req.path;
    next();
})

app.use('/user',router);
app.use('/quiz',Router);
app.get('/',(req,res) => {
    res.redirect('/user');
});

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT,()=>{
        console.log('connected to db & listening on port',PORT);
    })
}).catch(error=> console.error('could not connect:',error));



