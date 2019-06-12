var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.send('<h1>Okay</h1>');
})
app.get('/test', function (req, res) {
    res.status(200).send({
        status:200, 
        message:"ok"
    })
});

app.get('/time', function (req, res) {
    var today = new Date();
var time = today.getHours() + ":" + today.getSeconds();
    res.status(200).send({
        status:200, 
        message:time
    })
});
app.listen(3000)