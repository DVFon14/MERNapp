//information (model) the home posts should have: title (state name)and date of creation
import mongoose, { mongo } from "mongoose";
import { stringify } from "querystring";

const homePostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
},
//   selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Schema turned into a model
const homePostMessage = mongoose.model("homePostMessage", homePostSchema);

//we are exporting a mongoose model from homePostModel/models
//on this model we will later be able to run commonds of find, create, delete, and update 
export default homePostMessage;
