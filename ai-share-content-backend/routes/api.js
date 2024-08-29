const express = require('express');
const router = express.Router();


const createCaptionsFromIdeas = require('../controllers/createCaptionsFromIdeas');
const createNewAccessCode = require('../controllers/createNewAccessCode');
const generatePostCaptions = require('../controllers/generatePostCaptions');
const getPostIdeas = require('../controllers/getPostIdeas');
const getUserGeneratedContents = require('../controllers/getUserGeneratedContents');
const saveGeneratedContent = require('../controllers/saveGeneratedContent');
const unsaveContent = require('../controllers/unsaveContent');
const validateAccessCode = require('../controllers/validateAccessCode');
const login = require('../controllers/login');

router.post('/createCaptionsFromIdeas', createCaptionsFromIdeas);
router.post('/createNewAccessCode', createNewAccessCode);
router.post('/generatePostCaptions', generatePostCaptions);
router.post('/getPostIdeas', getPostIdeas);
router.get('/getUserGeneratedContents', getUserGeneratedContents);
router.post('/saveGeneratedContent', saveGeneratedContent);
router.post('/unsaveContent', unsaveContent);
router.post('/validateAccessCode', validateAccessCode);
router.post('/login', login);

module.exports = router;