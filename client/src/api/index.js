import axios from 'axios';

//this is the url pointing to our backend route.
//this route returns all the posts we have in the database
const url = 'https://us-states-adventures.onrender.com';

export const fetchHomePosts = () => axios.get(url)