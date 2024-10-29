const mongoose = require('mongoose');
const { create } = require('./UserDentist');
const routeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Nombre requerido"],
        max: 255
    },
    lastname:{
        type: String,
        required: [true, "Apellido requerido"],
        max: 255
    },
    ci:{
        type: Number,
        required: [true, "Carnet de identidad requerido"],
        unique: true,
        min: 10000,
    },
    birth_date:{
        type: Date,
        required: [true, "Fecha de nacimiento requerida"],
    },
    birth_place:{
        type: String,
        required: [true, "Lugar de nacimiento requerido"],
        max: 100
    },
    phone:{
        type: Number,
        required: [true, "Numero de telefono requerido"],
        min: 10000000,
    },
    address:{
        type: String,
        required: [true, "Direccion requerida"],
        max: 300
    },
    civil_status:{
        type: String,
        required: [true, "Estado civil requerido"],
        max: 50
    },
    occupation:{
        type: String,
        required: [true, "Ocupacion requerida"],
        max: 50
    },
    email:{
        type: String,
        required: [true, "Email requerido"],
        max: 255
    },
    reference_phone:{
        type: Number,
        required: [true, "Numero de telefono de referencia requerido"],
        min: 10000000,
    },
    reference_person:{
        type: String,
        required: [true, "Persona de referencia requerida"],
        max: 255
    },
    created_at:{            
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('UserPatient', routeSchema);