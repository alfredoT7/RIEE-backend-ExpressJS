const express = require('express');
const router = express.Router();
const patientController = require('../controllers/PatientControllers');

router.post('/create-patient', patientController.createPatient);

module.exports = router;