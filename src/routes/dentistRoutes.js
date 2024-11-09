const express = require('express');
const router = express.Router();
const dentistController = require('../controllers/dentistControllers'); 


router.post('/create-dentist', dentistController.createDentist);
router.get('/get-by-ci/:ci', dentistController.getDentistByCI);
module.exports = router;