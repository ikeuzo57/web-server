var express = require('express');
var app = express();

var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('private route hit!!');
        next();
    },
    logger: function(req, res, next){
        // new Date().toString()
        console.log('A new Request: '  + ' ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
}


app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function(req,res){
    res.send('About Us!!')
})

app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT,process.env.IP, function(){
    console.log('Server is runing');
})