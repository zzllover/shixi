var express = require('express');
var app = express();
 
app.use('/public', express.static('public'));
 
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
 
app.get('/dev/random_joke', function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "setup":"XXXX",
       "punchline":"YYYYYY"
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
 
})