var express = require('express');
var app = express();



app.get('/', function (req, res) {
    res.send('<h1>Okay</h1>');
})
app.get('/test', function (req, res) {
    res.status(200).send({
        status: 200,
        message: "ok"
    })
});

app.get('/time', function (req, res) {
    var today = new Date();
    var time = today.getHours() + ":" + today.getSeconds();
    res.status(200).send({
        status: 200,
        message: time
    })
});

app.get('/hello', function (req, res) {
    res.status(200).send({
        status: 200,
        message: "Hello"
    })
});

app.get('/hello/:ID', function (req, res) {
    res.status(200).send({
        status: 200,
        message: "Hello," + req.params.ID
    })
});

app.get('/search', function (req, res) {
    if (req.query.s)
        res.status(200).send({
            status: 200,
            message: "ok",
            data: req.query.s
        })
    else
        res.status(500).send({
            status: 500,
            error: true,
            message: "you have to provide a search"
        })
});

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

 
app.get('/movies/add', function (req, res) {
   var title =   req.query.title
    var year  =  req.query.year
    var rating =   req.query.rating
    if((!title || !year) || year.length !=4 || isNaN(year) )
    {
        res.status(403).send({
            status: 403,
            error: true,
            message: "you cannot create a movie without providing a title and a year"
        });
    }


   else{
    x = rating ? rating : 4
    movies.push({title, year:parseInt(year),  rating:parseFloat(x)});
    res.status(200).send({
        status: 200,
        data:movies
    })
   }
    
});

app.get('/movies/read', function (req, res) {
    res.status(200).send({
        status: 200,
        data:movies
    })
});

app.get('/movies/read/by-date', function (req, res) {
    res.status(200).send({
        status: 200,
        data: movies.sort(function (a, b) {

            return (b.year) - (a.year);
        })
    })
});

app.get('/movies/read/by-rating', function (req, res) {
    res.status(200).send({
        status: 200,
        data: movies.sort(function (a, b) {

            return (b.rating) - (a.rating);
        })
    })
});

app.get('/movies/read/by-title', function (req, res) {
    res.status(200).send({
        status: 200,
        data: movies.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        })
    })
});
app.get('/movies/read/id/:ID', function (req, res) {
    if (movies[req.params.ID - 1])
        res.status(200).send({
            status: 200,
            data: movies[req.params.ID - 1]
        })
    else
        res.status(404).send({
            status: 404,
            error: true,
            message: "the movie " + req.params.ID + " does not exist"
        })
});


app.get('/movies/update', function (req, res) {
    res.status(200).send({
        status: 200,
        message: "upd"
    })
});

app.get('/movies/delete/:ID', function (req, res) {
  if(movies[req.params.ID - 1]){
      movies.splice(req.params.ID - 1,1)
          res.send(movies);
   }
   
else 
res.status(404).send({
 status: 404,
 error: true,
 message: "the movie " + req.params.ID + " does not exist"
});
});

app.listen(3000)