const UserDentist = require('../models/UserDentist');
const bcrypt = require('bcrypt');

exports.createDentist = async (req,res)=>{
    const {
        name,
        lastname,
        email,
        ci,
        birth_date,
        birth_place,
        phone,
        address,
        specialties,
        university,
        password
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        const ciExist = await UserDentist.findOne( {ci} );
        if(ciExist){
            return res.status(400).json({message: "CI ya ingresado"});
        }
        const create = new UserDentist({
            name,
            lastname,
            email,
            ci,
            birth_date,
            birth_place,
            phone,
            address,
            specialties,
            university,
            password: hashedPassword
        });
        await create.save();
        res.status(200).json({message: "Dentista creado exitosamente"});
    }catch(err){
        res.status(400).json({message: "Error al crear dentista", error: err.message});
    }
}
exports.getDentistByCI = async (req,res)=>{
    const { ci } = req.params;
    try{
        const dentist = await UserDentist.findOne({ ci });
        if(!dentist){
            return res.status(400).json({message: "CI no encontrado"});
        }
        res.status(200).json(dentist);
    }catch(err){
        res.status(400).json({message: "Error al obtener dentista, intenta de nuevo", error: err.message});
    }
}