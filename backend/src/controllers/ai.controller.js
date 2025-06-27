import aiservices from '../services/ai.services.js'; 

export const response = async (req,res) => {
    const promt = req.query.promt;

    if(!promt){
        return res.status(400).send("promt is required");
    }

    const response = await aiservices(promt);

    res.send(response);
} 