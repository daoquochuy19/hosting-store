require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const port = process.env.PORT || 3000;

// config template engine
configViewEngine(app);

// congif req.body(phai nam tren router)
app.use(express.json());       
app.use(express.urlencoded({extended: true}));

// khai bao router
app.use('/',webRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
