import express from 'express';
import aiRoute from './routes/ai.routes.js';

const app = express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello from code reviewer");
})

app.use('/ai',aiRoute);

export default app;