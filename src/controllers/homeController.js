const connection = require('../config/database');


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getBlog = (req, res) => {
    res.render('blog.ejs')
}

const getContact = (req, res) => {
    res.render('contact.ejs')
}

const getCart = (req, res) => {
    res.render('cart.ejs')
}

const login = (req, res) => {
    res.render('login.ejs')
}

module.exports ={
    getHomepage,getBlog, getContact, getCart,login
}