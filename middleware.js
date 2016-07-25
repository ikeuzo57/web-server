



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

module.exports = middleware;