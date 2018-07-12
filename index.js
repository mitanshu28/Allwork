var fs = require('fs');
var http = require('http');
http.createServer(function(req,res){
console.log('requested url:'+req.url);
if(req.url==='/home'|| req.url==='/'){
fs.createReadStream('index.html').pipe(res);
res.writeHead(200,{'Content-Type':'text/html'});
}
else if(req.url==='/api'){
    res.writeHead(200,{'Content-Type':'application/json'});
var jsonObj = {
    name: 'himanshu',
    surname :'yadav',
    age : 21
};
res.end(JSON.stringify(jsonObj));
}
else if(req.url==='/about'){
    fs.createReadStream('about.html').pipe(res);
    res.writeHead(200,{'Content-Type':'text/html'});
    }
    else {
        fs.createReadStream('404.html').pipe(res);
        res.writeHead(404,{'Content-Type':'text/html'}); 
    }
/*
//response.write('Hello Node JS Server Response\n');
//response.write('\n');
const {pathname,query} = url.parse(request.url); 
console.log(data);
console.log("pathname", pathname);
console.log("queryParameters", query);
response.end();*/
}).listen(3000);