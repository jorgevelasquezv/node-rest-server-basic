const { Router } = require('express');
const { search, searchProductsByCategory } = require('../controllers/search.controller');

const router = Router();


router.get('/:collection/:term', search);

router.get('/products/category/:category', searchProductsByCategory);




module.exports = router;

