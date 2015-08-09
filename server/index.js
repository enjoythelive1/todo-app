var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use('/task-list', require('./routes/task-list'));

app.listen(process.env.PORT || 57844);

