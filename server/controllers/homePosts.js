//creating all the handlers for our routes
//to reduce the logic in routes/homeRoutes
import homePostMessage from "../models/homePostSchema.js";

export const getHomePosts = async (req, res) => {
  try {
    //this line is retrieving all the posts we currently have in the database
    // const homePosts = await homePostMessage.find(); //.find (finding something inside of a model takes time, so this is an asych function. Therefore we need to put 'await')
    // res.status(200).json(homePosts);
    res.status(200).json("Yay it worked!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//logic for adding different posts
export const createHomePost = async (req, res) => {

  try {
    const post = req.body; //post is the informaiton passed from the client
    const newHomePost = new homePostMessage(post); //creating a new thing based on the homePostMessage model
    await newHomePost.save();
    res.status(201).json(newHomePost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
