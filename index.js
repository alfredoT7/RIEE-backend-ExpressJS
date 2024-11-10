const express =require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const patientRoutes = require('./src/routes/PatientRoutes');
const dentistRoutes = require('./src/routes/dentistRoutes');
require('dotenv').config();

app.use(express.json());
const mongoURL = process.env.MONGO_URL;


//rutas
app.use('/api/v1/patient', patientRoutes);
app.use('/api/v1/dentist', dentistRoutes);

//conexion a la base de datos
mongoose.connect(mongoURL, {}).then(() => {
    console.log('Conectado a la base de datos');
}).catch((err) => {
    console.log('Error de conexion a la base de datos', err);
});
//servidor corriendo
app.listen(3000, () => {
    console.log(`API corriendo ${port}`);
});