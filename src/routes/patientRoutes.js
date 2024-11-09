const express = require('express');
const router = express.Router();
const patientController = require('../controllers/PatientControllers');

router.post('/create-patient', patientController.createPatient);
router.get('/get-by-ci/:ci', patientController.getPatientsByCI);
module.exports = router;