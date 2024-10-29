const UserPatient = require('../models/UserPatient');
exports.createPatient = async (req, res) => {
    const {
        name,
        lastname,
        ci,
        birth_date,
        birth_place,
        phone,
        address,
        civil_status,
        occupation,
        email,
        reference_phone,
        reference_person
    } = req.body;

    try {
        const ciExist = await UserPatient.findOne({ ci });
        if (ciExist) {
            return res.status(400).json({ message: "CI ya ingresado" });
        }

        const create = new UserPatient({
            name,
            lastname,
            ci,
            birth_date,
            birth_place,
            phone,
            address,
            civil_status,
            occupation,
            email,
            reference_phone,
            reference_person
        });

        await create.save();
        res.status(200).json({ message: "Paciente creado exitosamente" });
    } catch (err) {
        res.status(400).json({ message: "Error al crear paciente", error: err.message });
    }
};