const express = require('express');
const ejs = require('ejs');
const PORT = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes/index'));

app.listen(PORT, function(err){
    if(err){
        console.log(`Error in running server on PORT: ${PORT}`);
        return;
    }
    console.log(`Server is up and running on PORT: ${PORT}`);
})