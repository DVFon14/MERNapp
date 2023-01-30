//creating all the handlers for our routes
//to reduce the logic in routes/homeRoutes
import homePostMessage from "../models/homePostSchema.js";
import adventuresModel from "../models/adventuresSchema.js";

// Retrieve a list of states in Database
export const getStatePosts = async (req, res) => {
  try {
    //this line is retrieving ALL the states we currently have in the database
    const homePosts = await homePostMessage.find(); //.find (finding something inside of a model takes time, so this is an asych function. Therefore we need to put 'await')
    res.status(200).json(homePosts);
    // res.status(200).json("Yay it worked!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Logic for adding different posts
export const createNewState = async (req, res) => {
  try {
    const post = req.body; //post is the informaiton passed from the client
    
    console.log("post is: ", post)
    const newHomePost = new homePostMessage(post); //creating a new entry in the database based on the homePostMessage model
    await newHomePost.save(); //wait for info to be save in database
    // console.log("newHomePost is: ", newHomePost) //displays the info that was stored in the database (just a check that it saved properly)
    res.status(200).json("Yay it worked in createNewState!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Retrieve a list of states in Database
export const deleteStatePost = async (req, res) => {
  try {
    const post = req.body; //post is the informaiton passed from the client

    if (!mongoose.Types.ObjectId.isValid(post["id"]))
      return res.status(404).send("No post with that id");

    //The id is the only info we are passing from statesList.js in the variable payload
    await homePostMessage.findByIdAndRemove(post["id"]);

    res.status(200).json("State was deleted!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
