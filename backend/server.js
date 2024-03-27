import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { Socket } from 'socket.io';
import http from 'http';
import path from 'path';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
const MONGO_DB_URL  = process.env.MONGO_DB_URL;

//MongoDB Connection
mongoose.connect(MONGO_DB_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));


//Server initialization
app.listen(PORT, () => console.log(`Server started listening on PORT:${PORT}`));