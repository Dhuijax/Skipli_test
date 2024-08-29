const config = require('../module/config');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const GetPostIdeas = async (req, res) => {
    const { topic } = req.body;

    try {
        const prompt = `Generated 10 topic about ${topic}`;
        const result = await model.generateContent(prompt);
        const content = result.response.candidates[0].content.parts[0].text;
        const afRemove = content.replace(/##/g, '').replace(/\*\*|\"/g, '').replace(/\n\n|\n/g, ' ').toString();
        const segments = afRemove.split(/(\d+\..*?)(?=\d+\.)/s).filter(Boolean).map(segment => segment.trim());
        const jsonResult = { content: segments.slice(1).map((segment, index) => ({ topic: segment })) };
        

        const topics = jsonResult.content;
        config.chunks = [];
        topics.forEach((item) => {
            const topicSplit = item.topic.slice(3).split(':');
            const topic = topicSplit[0].trim();
            const captions = topicSplit.slice(1).join(':').trim();
            config.chunks.push({topic: topic, caption: captions})
        });
        res.json(config.chunks); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = GetPostIdeas;