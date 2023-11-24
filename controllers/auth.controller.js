const { request, response } = require('express');
const User = require('../models/user');
const { generateJWT } = require('../helpers/generate-jwt');

const login = async (req = request, res = response) => {
    const { email, password } = req.body;

    // Verificar si email existe
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ msg: 'User / Password are not correct' });
    }

    // Verificar si el usuario está activo
    if (!user.status) {
        return res.status(400).json({ msg: 'User / Password are not correct with status is false' });
    }

    // Verificar la contraseña
    const validPassword = user.comparePassword(password);
    if (!validPassword) {
        return res.status(400).json({ msg: 'User / Password are not correct - password' });
    }

    // Generar el JWT
    const token = await generateJWT(user.id);

    try {
        res.json({ msg: 'Login ok', user, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Something went wrong' });
    }
};

module.exports = {
    login,
};
