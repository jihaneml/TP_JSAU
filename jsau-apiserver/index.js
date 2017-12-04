var express = require('express'),
  bodyParser = require('body-parser')
  logger = require('morgan')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('dev'))

//correction à l'erreur the No 'Access-Control-Allow-Origin'
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function(req, res, next) {
  res.send('Get method works just fine!')
})


app.post('/', function(req, res, next) {
  //req.collection.insert(req.body, {}, function(e, results){
  //if (e) return next(e)
    res.send("Post method works just fine!")
  //})
})


app.put('/', function(req, res, next) {
  res.send('Put method works just fine!')
})

app.delete('/', function(req, res, next) {
  res.send('Delete method works just fine!')
})

app.listen(3000, function(){
  console.log('Express server listening on port 3000')
})
