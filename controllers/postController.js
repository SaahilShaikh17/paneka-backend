const Post = require('../model/Post');

//Get all posts 
const getAllposts = async (req,res) => {
    try {
        const posts = await Post.find().populate('author','username');
        if(!posts) return res.status(204).json({'message':'No posts found'});
        res.json(posts)
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const createPost = async(req,res) =>{
    
}

module.exports = {
    getAllposts
}