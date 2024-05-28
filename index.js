const express = require('express');
const ejs = require('ejs');
require('dotenv').config();

const PORT = process.env.PORT | 3000;

const db = require('./config/mongoose');

const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');

const User = require('./models/user');
const middleware = require('./config/middleware');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set static files
app.use(express.static('./assets'));

// use common layouts to all page
app.use(expressLayouts);

// parse data from POST request
app.use(express.urlencoded());
// parse cookie data
app.use(cookieParser());
app.use(middleware.setAuthenticatedUser);

app.use('/', require('./routes/index'));

app.listen(PORT, function(err){
    if(err){
        console.log(`Error in running server on PORT: ${PORT}`);
        return;
    }
    console.log(`Server is up and running on PORT: ${PORT}`);
})