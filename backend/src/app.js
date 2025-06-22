import express from 'express';
import {aiRouter} from './routes/ai.routes.js'
const app = express();

app.get('/',(req,res)=>{
    res.send("Just testing");
})

app.use('/api',aiRouter)

export default app;