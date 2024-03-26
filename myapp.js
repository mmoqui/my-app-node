const express = require('express')
const bodyParser = require('body-parser')
const queries = require('./queries')

const myapp = express()

const port = 8080

myapp.use(bodyParser.json())
myapp.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

myapp.get('/', function(request,response) {
  response.status(503).json('{"error": "No services listening at this URI"}')
});

myapp.get('/persons', queries.getPersons)

myapp.get('')

myapp.listen(port, () => {
    console.log('App running on port %d', port);
})