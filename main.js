const express = require('express');
const app = express();

// below code not working for bootstrap apply
app.use('/js', express.static(__dirname + '/bootstrap/js')); // redirect bootstrap JS
app.use('/css', express.static(__dirname + '/bootstrap/css')); // redirect CSS bootstrap

const server = app.listen(3000, () => {
  console.log('Start Server.. localhost:3000. dirname :' + __dirname);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/about', function(req, res) {
  res.send('about page');
});