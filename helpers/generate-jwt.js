const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET_OR_PRIVATEKEY;

const generateJWT = (uid = '') => {

    return new Promise((resolve, reject) => {
        const payload = { uid };

        jwt.sign(payload, SECRET, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject(new Error('The token could not be generated'));
            } else {
                resolve(token);
            }
        });
    });
};

module.exports = {
    generateJWT,
};
