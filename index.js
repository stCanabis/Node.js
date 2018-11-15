var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.set('view engine','ejs');
const data = 'Hallow, stupid World!!! ;-) !!!';
const arr = ['Hello', 'World', 'Test'];

app.get('/', function (req, res) {
    res.render('index');
});
app.use(bodyParser.urlencoded({extend: true}));


app.get('/create', function (req, res) {
    res.render('create',{data:data , arr:arr});

});

app.get('/create', function (req, res) {
    res.render('create');
});
app.post('/create', function (req, res) {
    console.log(req.body.text);
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});