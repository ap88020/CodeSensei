import express from 'express';
import router from './routes/ai.routes.js';
const app = express();

app.use(express.json()); 
app.use('/api', router);

app.get('/', (req, res) => {
  res.send("app is running");
});

export default app;
