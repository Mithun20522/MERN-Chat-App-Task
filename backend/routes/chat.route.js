import express from 'express';
import { getMessage, sendMessage } from '../controllers/chat.controller.js';

const chatRouter = express.Router();

chatRouter.post('/send-message', sendMessage);
chatRouter.get('/get-message/:chatId',getMessage);

export default chatRouter;