const GetPostIdeas = require('./getPostIdeas');
const config = require('../module/config');

const CreateCaptionsFromIdeas = async (req, res) => {
    const { idea } = req.body;

    try {
        let captions = config.chunks.find(item => item.topic === idea)?.caption;
        
        res.json({content: captions});
        //res.json(captions ? {content: captions} : {});
    } catch (error) {
        res.status(404).json({ message: 'Captions not found for the topic!' });
    }
};

module.exports = CreateCaptionsFromIdeas;