const express = require('express');


const chatController= require('../Controllers/chatcontrollers');

const router = express.Router();

///studentController.hello();


router.post('/conversation', chatController.CreateConversation);
router.get('/conversation/:userId', chatController.fetchAllChat);
router.post('/message', chatController.StoreChatsWithUser);
router.get('/message/:conversationId', chatController.fetchChatHistory);

module.exports = router;

