//home posts routes, creating a card with just the state name
import express from "express";
import {
  getStatePosts,
  createNewState,
  deleteStatePost,
  editStatePost,
  createNewAdventure,
  getAdventuresPosts,
  deleteAdventurePost,
  editAdventuresPost,
} from "../controllers/homePosts.js";

const homeRouter = express.Router();

//this will be reached by localhost:3000/home because of index.js line 13

// State routes
homeRouter.get("/", getStatePosts);
homeRouter.post("/newState", createNewState);
homeRouter.post("/deleteState", deleteStatePost);
homeRouter.post("/editState", editStatePost);

// Adventure routes
homeRouter.post("/newAdventure", createNewAdventure);
homeRouter.post("/getAdventures", getAdventuresPosts);
homeRouter.post("/deleteAdventures", deleteAdventurePost);
homeRouter.post("/editAdventures", editAdventuresPost);

export default homeRouter;
