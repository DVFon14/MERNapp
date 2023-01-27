//creating all the handlers for our routes
//to reduce the logic in routes/homeRoutes
import homePostMessage from "../models/homePostSchema.js";

export const getHomePosts = async (req, res) => {
  try {
    //this line is retrieving all the posts we currently have in the database
    const homePosts = await homePostMessage.find(); //.find (finding something inside of a model takes time, so this is an asych function. Therefore we need to put 'await')
    res.status(200).json(homePosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createHomePosts = (req, res) => {
  res.send("post creation");
};
