//creating all the handlers for our routes
//to reduce the logic in routes/homeRoutes

export const getHomePosts = (req, res) =>{
    res.send('This works')
}

export const createHomePosts = (req, res) =>{
    res.send('post creation')
}

