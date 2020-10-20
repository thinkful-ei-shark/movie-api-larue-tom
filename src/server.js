require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const movies = require('./movielibrary.json');
const app = express();
app.use(morgan('dev'));

app.use(function )



app.get('/movie', function getMovies (req, res)  {
  let reply = movies;
  if(req.query.genre) {
      reply = reply.filter(film =>
        film.genre.toLowerCase()
        .includes(req.query.genre.toLowerCase())
      )
    }

    if(req.query.country) {
        reply = reply.filter( film => 
            film.country.toLowerCase()
            .includes(req.query.country.toLowerCase())
        )
    }
    if (req.query.avg_vote){
        reply = rely.filter(film => 
            Number(movie.avg_vote) >= Number(req.query.avg_vote)
            )
    }
    res.json(reply);
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})

});