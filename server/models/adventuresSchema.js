//information (model) the home posts should have: title (state name)and date of creation
import mongoose, { mongo } from "mongoose";
// import { stringify } from "querystring";

const adventuresSchema = mongoose.Schema({
  date: String,
  details: String,
  co_adventurers: String,
  city: String,
  notes: String,
  linkedStateID: String,
});

//Schema turned into a model
const adventuresModel = mongoose.model("adventuresSchema", adventuresSchema);

//we are exporting a mongoose model from homePostModel/models
//on this model we will later be able to run commonds of find, create, delete, and update
export default adventuresModel;

//base-64 package turns image to string
