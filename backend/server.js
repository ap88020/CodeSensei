import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js'

// console.log(process.env.GOOGLE_API_KEY);


app.listen(3000,()=>{
    console.log('app is listening at port 3000');
})