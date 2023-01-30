//home posts routes, creating a card with just the state name
import express from "express";
import {
  getStatePosts,
  createNewState,
  deleteStatePost,
} from "../controllers/homePosts.js";

const homeRouter = express.Router();

//this will be reached by localhost:3000/home because of index.js line 13
homeRouter.get("/", getStatePosts);
homeRouter.post("/newState", createNewState);
homeRouter.post("/deleteState", deleteStatePost);

export default homeRouter;
