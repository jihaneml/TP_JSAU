var express = require('express')
var app = express()
var morgan = require('morgan')
var path = require("path");
var nunjucks = require('nunjucks')

app.set('view engine', 'ejs');
app.use(morgan('dev'));

// Get method
app.get('/', function(req, res) {
  console.log("Received get request in root")
  res.render('my_view', {even_numbers: even_numbers})
})
// Post method
app.post('/', function(req,res){
  console.log('Received post in root')
})
// DELETE method
app.delete('/', function(req,res){
  console.log('Received delete in root')
})

app.get('/info', function(req,res){
  res.send('jsau-webserver-1.0.0')
})
const my_shared_code_headless = require('./my_modules/my_shared_file_headless.js')
let even_numbers = my_shared_code_headless.generateEvenNumbers(20)
console.log('even_numbers:', even_numbers)


app.get('/info', function(req, res) {
    //res.send(even_numbers)
})


//app.use( express.static( '/www' ));
/*
app.post('/', function (req, res) {
  res.send('Bonjour Premier TP!')
  //console.log('')
}) */

//message console
app.listen(3000, function () {
  console.log('port 3000')
})
