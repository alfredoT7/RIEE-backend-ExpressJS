const express = require('express');
const router = express.Router();
const dentistController = require('../controllers/dentistControllers'); 


router.post('/create-dentist', dentistController.createDentist);

module.exports = router;