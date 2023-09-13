const express = require('express');
const { getHomepage, getBlog, getContact, getCart, login} = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomepage)
router.get('/blog', getBlog)
router.get('/contact', getContact)
router.get('/cart', getCart)
router.get('/login', login)

module.exports = router;