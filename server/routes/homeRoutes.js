//home posts routes, creating a card with just the state name
import express from 'express';
import { getHomePosts, createHomePosts } from '../controllers/homePosts.js';

const homeRouter = express.Router()

//this will be reached by localhost:3000/home because of index.js line 13
homeRouter.get('/', getHomePosts)
homeRouter.get('/', createHomePosts)


export default homeRouter;