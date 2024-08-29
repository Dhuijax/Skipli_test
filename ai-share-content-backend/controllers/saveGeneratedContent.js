const User = require('../models/user');

const SaveGeneratedContent = async (req, res) => {
    const { topic, data, phoneNumber } = req.body;

    try {
        const usercheck = await User.findOne({ phoneNumber: phoneNumber, generatedContents: {topic: topic} });

        if (usercheck != null){
            res.json({ success: false , user: [], message: "Already exists !"});
            console.log(usercheck);
        }else{
            console.log(usercheck);
            const user = await User.findOneAndUpdate(
                { phoneNumber: phoneNumber },
                { $push: { generatedContents: { topic, data } } },
                { new: true , upsert: true}
            );
            res.json({ success: true , user: user});
        }

        
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = SaveGeneratedContent;