//home posts routes, creating a card with just the state name
import express from 'express';
import { getHomePosts, createHomePost } from '../controllers/homePosts.js';

const homeRouter = express.Router()

//this will be reached by localhost:3000/home because of index.js line 13
homeRouter.get('/', getHomePosts)
homeRouter.post('/', createHomePost)


export default homeRouter;