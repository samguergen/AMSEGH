var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.post('/sendmail', function(req, res){
  console.log('post req', req);
  res.end();
});







app.listen(process.env.PORT || 3000);



