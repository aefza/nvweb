let express = require('express');

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

require('./routes')(app)

let port = 8081
app.listen(port, function () { 
    console.log('server running on ' + port) 
})