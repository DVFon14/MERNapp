//creating all the handlers for our routes
//to reduce the logic in routes/homeRoutes
import homePostMessage from "../models/homePostSchema.js";
import adventuresModel from "../models/adventuresSchema.js";
import mongoose from "mongoose";

///////////////////////////////////////
// State Routes
///////////////////////////////////////

// Retrieve a list of states in Database
export const getStatePosts = async (req, res) => {
  try {
    //this line is retrieving ALL the states we currently have in the database
    const homePosts = await homePostMessage.find(); //.find (finding something inside of a model takes time, so this is an asych function. Therefore we need to put 'await')
    res.status(200).json(homePosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Logic for adding different posts
export const createNewState = async (req, res) => {
  try {
    const post = req.body; //post is the informaiton passed from the client

    const newHomePost = new homePostMessage(post); //creating a new entry in the database based on the homePostMessage model
    await newHomePost.save(); //wait for info to be save in database
    // console.log("newHomePost is: ", newHomePost) //displays the info that was stored in the database (just a check that it saved properly)
    res.status(200).json("Created new state!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Retrieve a list of states in Database
export const deleteStatePost = async (req, res) => {
  try {
    const post = req.body; //post is the informaiton passed from the client. The id is the only info we are passing

    if (!mongoose.Types.ObjectId.isValid(post["id"]))
      return res.status(404).send("No post with that id");

    //from statesList.js in the variable payload
    await homePostMessage.findByIdAndRemove(post["id"]);

    res.status(200).json("State was deleted!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Edit a state in Database
export const editStatePost = async (req, res) => {
  try {
    const post = req.body; //post is the information, both the id and title, passed from the client

    if (!mongoose.Types.ObjectId.isValid(post["id"]))
      return res.status(404).send("No post with that id");

    const updatedPost = await homePostMessage.findByIdAndUpdate(
      { _id: post["id"] }, //finds the id
      { title: post["title"] }, //updated the title and adventures
      {
        new: true,
      }
    );

    res.status(200).json("State was edited!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

///////////////////////////////////////
///////////////////////////////////////
////////// Adventure Routes ///////////
///////////////////////////////////////
///////////////////////////////////////


// Retrieve a list of adventures in Database
export const getAdventuresPosts = async (req, res) => {
  try {
    const post = req.body;
    //this line is retrieving ALL the adventures we currently have in the database
    const allAdventurePosts = await adventuresModel.find({
      linkedStateID: post["id"],
    }); //.find (finding something inside of a model takes time, so this is an asych function. Therefore we need to put 'await')
    // console.log("allAdventurePosts in getAdventuresPosts is: ", allAdventurePosts);

    res.status(200).json(allAdventurePosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Logic for adding different posts
export const createNewAdventure = async (req, res) => {
  try {
    const post = req.body; //post is the informaiton passed from the client
    // console.log("post in createNewAdventure is: ", post);

    const newAdventurePost = new adventuresModel(post); //creating a new entry in the database based on the homePostMessage model
    await newAdventurePost.save(); //wait for info to be save in database
    // console.log("newAdventurePost is: ", newAdventurePost); //displays the info that was stored in the database (just a check that it saved properly)
    res.status(200).json("Created new adventure!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Retrieve a list of adventures in Database
export const deleteAdventurePost = async (req, res) => {
  try {
    const post = req.body; //post is the informaiton passed from the client. The id is the only info we are passing
    // console.log("post in deleteAdventurePost is: ", post);

    if (!mongoose.Types.ObjectId.isValid(post["id"]))
      return res.status(404).send("No post with that id");

    // //from statesList.js in the variable payload
    await adventuresModel.findByIdAndRemove(post["id"]);

    res.status(200).json("Adventure was deleted!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Edit an adventure in Database
export const editAdventuresPost = async (req, res) => {
  try {
    const post = req.body; //post is the information, both the id and title, passed from the client
    // console.log("post in editAdventuresPost is: ", post);

    if (!mongoose.Types.ObjectId.isValid(post["id"]))
      return res.status(404).send("No post with that id");

    const updatedPost = await adventuresModel.findByIdAndUpdate(
      { _id: post["id"] }, //finds the id
      {
        date: post["date"],
        details: post["details"],
        co_adventurers: post["co_adventurers"],
        city: post["city"],
        notes: post["notes"],
        linkedStateID: post["linkedStateID"],
      }, //updated the title and adventures
      {
        new: true,
      }
    );

    res.status(200).json("Adventure was edited!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
