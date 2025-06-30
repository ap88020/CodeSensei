import aiservices from '../services/ai.services.js'; 

export const getReview = async (req,res) => {
    const code = req.body.code;

    if(!code){
        return res.status(400).send("promt is required");
    }

    const response = await aiservices(code);

    res.send(response);
} 