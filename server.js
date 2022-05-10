import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors'
import morgan from 'morgan';
import mongoose from 'mongoose';
import bookRouter from './routes/bookRouter';

dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routes
app.use("/api",bookRouter)

//DB
mongoose.connect(process.env.DATABASE)
.then(()=>console.log('DB is connected'))
.catch((err)=>console.log('DB Connection is failed',err))

const port = process.env.PORT
app.listen(port,()=>console.log(`server is running on ${port}`))