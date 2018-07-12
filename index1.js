var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/about', function (req, res) {
    res.send('About page')
  })
  app.get('/home', function (req, res) {
    res.send('Home page')
  })
  app.get('/contact', function (req, res) {
    res.send('Contact Page')
  })
  var students = {
      1 : 'HIMANSHU',
      2 : 'MITANSHU',
      3 : 'HEMANT',
      4 : 'ANMOL'
  }
  app.get('/students/:id', function (req, rep) {
    rep.send('you have requested to see the students name:' +students[req.params.id])
  })
app.listen(7000)