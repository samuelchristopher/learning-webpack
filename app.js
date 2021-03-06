var express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'jade');

app.use('/src', express.static(__dirname + '/src'));
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() { console.log('Server started') });
