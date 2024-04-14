const User = require('../model/User');

const getAllUsers = async (req,res) => {
    const users = await User.find();
    if(!users) return res.status(204).json({'message':'No users found'});
    res.json(users);
}

const updateUser = async (req,res) => {
    if(!req?.body?.id) return res.status(400).json({'message':'User ID required'});

    const user = await User.findOne({ _id: req.body.id}).exec();

    if(!user) {
        return res.status(204).json({'message':`No user matches ID`});
    }

    if (req.body?.firstname) user.firstname = req.body.firstname;
    if (req.body?.lastname) user.lastname = req.body.lastname;
    if (req.body?.username) user.username = req.body.username;
    
    const result = await user.save();
    res.json(result);
 }

const deleteUser = async (req,res) => {
    if(!req?.body?.id) return res.status(400).json({'message':'User ID required'});
    const user = await User.findOne({_id:req.body.id}).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.body.id} not found` });
    }
    const result = await user.deleteOne({ _id: req.body.id });
    res.json(result);
}

module.exports={
    updateUser,
    deleteUser,
    getAllUsers
}