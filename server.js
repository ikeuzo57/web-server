var express = require('express');
var app = express();


var middleware = require('./middleware.js')

// app.use(middleware);
app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req,res){
    res.send('About Us!!')
})

app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT,process.env.IP, function(){
    console.log('Server is runing');
})