var express = require('express');
var cors = require('cors');
var app = express();

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());



var port = process.env.PORT || 3000 ;

app.listen(port , function(){
    console.log("Server is live in port " + port);
});

