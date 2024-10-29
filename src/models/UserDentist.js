const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema(
    {
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
        email:{
            type: String,
            required: true,
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
            required: true,
        },
        birth_place:{
            type: String,
            required: [true, "Lugar de nacimiento requerido"],
            max: 100
        },
        phone:{
            type: Number,
            required: true,
            min: 10000000,
        },
        address:{
            type: String,
            required: true,
            max: 300
        },
        specialties:{
            type: Array,
            required: true,
        },
        university:{
            type: String,
            required: true,
            max: 255
        },
        password:{
            type: String,
            required: true,
            max: 255
        },
        created_at:{            
            type: Date,
            default: Date.now
        }
    }
);
module.exports = mongoose.model('UserDentist', routeSchema);