import Quiz from "../models/quizSchema.js";

const find_Quiz=async (req,res) => {
    let { level,language } = req.query;
    if(level==0){
        level="Basic";
    }
    else if(level==1){
        level="Beginner";
    }
    else if(level==2){
        level="Elementary";
    }
    if (!level || !language) {
        return res.status(400).json({ message: 'Level and language are required parameters.' });
    }
    try{
        const quiz=await Quiz.findOne({ level,language });
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found for the specified level and language.' });
        }
        return res.status(200).json({message:'Quiz Found',quiz});

    } catch(error){
        console.error('Error : ',error);
        return res.status(500).json({ message: 'Server error. Unable to fetch quiz.' });

    }

};

export default find_Quiz;