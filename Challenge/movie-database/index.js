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

app.get('/hello', function (req, res) {
    res.status(200).send({
        status:200, 
        message:"Hello"
    })
});

app.get('/hello/:ID', function (req, res) {
    res.status(200).send({
        status:200, 
        message:"Hello,"+req.params.ID
    })
});

app.get('/search', function (req, res) {
   if(req.query.s)
    res.status(200).send({
        status:200, 
        message:"ok",
        data:req.query.s
    })
else
    res.status(500).send({
        status:500, 
        error:true, 
        message:"you have to provide a search"
    })
});

app.listen(3000)