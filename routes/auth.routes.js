const { Router } = require('express');

const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { login, googleSignIn } = require('../controllers/auth.controller');

const router = Router();

router.post(
    '/login',
    [
        check('email', 'The email is required').isEmail(),
        check('password', 'The password is required').not().isEmpty(),
        validateFields,
    ],
    login
);

router.post(
    '/google',
    [
        check('id_token', 'The id_token is required').not().isEmpty(),
        validateFields,
    ],
    googleSignIn
);

module.exports = router;
