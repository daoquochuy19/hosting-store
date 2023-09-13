const express = require('express');
const { getHomepage, getBlog, getContact, getCart, login, register} = require('../controllers/homeController');
const router = express.Router();
var database = require('../config/database');
router.get('/', getHomepage)
router.get('/blog', getBlog)
router.get('/contact', getContact)
router.get('/cart', getCart)
router.get('/login', login)
router.post('/login', function(request, response, next){

    var user_email_address = request.body.user_email_address;

    var user_password = request.body.user_password;

    if(user_email_address && user_password)
    {
        query = `
        SELECT * FROM user
        WHERE email = "${user_email_address}"
        `;

        database.query(query, function(error, data){

            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].password == user_password)
                    {
                        response.redirect("/");
                    }
                    else
                    {
                        response.send('Incorrect Password');
                    }
                }
            }
            else
            {
                response.send('Incorrect Email Address');
            }
            response.end();
        });
    }
    else
    {
        response.send('Please Enter Email Address and Password Details');
        response.end();
    }

});

router.get('/logout', function(request, response, next){

    request.session.destroy();

    response.redirect("/");

});



router.get('/register', register)
router.post('/register', function(request, response){
    var users={
        "name":request.body.name,
        "email":request.body.email,
        "password":request.body.password,
    }
    database.query('INSERT INTO user SET ?',users, function (error, results, fields) {
    if (error) {
        console.log(error)
        response.send('there are some error with query');
    }else{
        response.redirect("/login");
    }
});
});
module.exports = router;