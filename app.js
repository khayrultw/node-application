
const express = require('express');
const myParser = require('body-parser');
const app = express();
const workers = require('./routers/workers');
const users = require('./routers/users');
const port = process.env.PORT || 3333;

app.use(myParser.urlencoded({extended: false}));
app.use(myParser.json());

app.use('', workers);
app.use('', users);

app.use((req, res, next)=>{

    const error = new Error('Not found');
    error.status = 404;
    next(error);

});

app.use((error, req, res, next) => {

    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});

process.on("uncaughtException", (err)=>{
    console.log(err);
});
app.listen(port);
console.log('Server running on port: '+port);