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

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]


app.get('/movies/create', function (req, res) {
    res.status(200).send({
        status:200, 
        message:"cre"
    })
});


app.get('/movies/read/by-date', function (req, res) {
    res.status(200).send({
        status:200, 
        data:movies.sort(function(a,b){

            return (b.year) - (a.year);
          })
    })
});

app.get('/movies/read/by-rating', function (req, res) {
    res.status(200).send({
        status:200, 
        data:movies.sort(function(a,b){

            return (b.rating) - (a.rating);
          })
    })
});

app.get('/movies/read/by-title', function (req, res) {
    res.status(200).send({
        status:200, 
        data:movies.sort(function(a,b){
            return a.title.localeCompare(b.title);
        })
          })
    });


app.get('/movies/update', function (req, res) {
    res.status(200).send({
        status:200, 
        message:"upd"
    })
});

app.get('/movies/delete', function (req, res) {
    res.status(200).send({
        status:200, 
        message:"del"
    })
});



app.listen(3000)