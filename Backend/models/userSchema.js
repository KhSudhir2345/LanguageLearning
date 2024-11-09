import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema=new Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    languagesLearnt: { type:[String],default:[]},
    progress: { type:Number,default: 0},
    score: {type:Number,default: 0}
});

userSchema.statics.signup=async function(username,password){
    if(!username || !password){
        throw Error('All fields must be filled');
    } 
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough');
    }

    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(password,salt);
    const user=await this.create({ email,password:hash});

    return user;
}

userSchema.statics.login=async function(username,password){
    if(!username || !password){
        throw Error('All fields must be filled')
    }

    const user=await this.findOne({username});
    if(!user){
        throw Error('Incorrect username');
    }

    const match=await bcrypt.compare(password,user.password);
    if(!match){
        throw Error('Incorrect password');
    }

    return user;
}

const User=mongoose.model('User',userSchema);
export default User;


