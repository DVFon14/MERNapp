import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

//in package.json we have "type:module", which allows us to import 'const homeRouter' from 'routes/homeRoutes' with a different name
import homeRouter from './routes/homeRoutes.js' 

const app = express(); 
dotenv.config();

//using express to connect to our middleware
//first parameter sets up the starting path for all of the routes inside of the homeRoutes

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/home', homeRouter); //every routes inside of the homeRoutes is going to start with 'states'


const PORT = process.env.PORT || 3000;

//connects database and application
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true, //to avoid console warnings
    useUnifiedTopology: true, //to avoid console warnings
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));
