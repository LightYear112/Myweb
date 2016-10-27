const express = require('express');
var app = express();
var port = 8081;
app.get('/',function(req,res){
  res.sendfile('./src/index.html');
})
app.get('/login',function(req,res){
  res.send('login success');
})
var server = app.listen(port,function(){
    var host = server.address().address
    console.log("running on %s:%s",host,port)
});
