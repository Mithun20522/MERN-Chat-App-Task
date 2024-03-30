import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user.route.js';
import chatRouter from './routes/chat.route.js';
import {createServer} from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server,{
    cors: {
        origin: "http://localhost:5173",
        methods: ["POST", "GET"],
        credentials: true
      }
    
});

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;
const MONGO_DB_URL  = process.env.MONGO_DB_URL;

//MongoDB Connection
mongoose.connect(MONGO_DB_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));


// adding routes
app.get('/',(req, res) => {
    res.send({message: 'Test API working'});
})
app.use('/api/user', userRouter);
app.use('/api/chat/', chatRouter);


io.on('connection', (socket) => {
    console.log('A user connected');
  
    // Emit messages with a delay
    const messages = [
      "Hi there! 👋",
      "I'm Wysa - an AI chatbot built by therapists.",
      "I'm here to understand your concerns and connect you with the best resources available to support you.",
      "Can I help?"
    ];
  
    let index = 0;
    const interval = setInterval(() => {
      if (index < messages.length) {
        socket.emit('message', messages[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 2000);
  
    socket.on('disconnect', () => {
      console.log('User disconnected');
      clearInterval(interval);
    });
  });
  

//Server initialization
server.listen(PORT, () => console.log(`Server started listening on PORT:${PORT}`));