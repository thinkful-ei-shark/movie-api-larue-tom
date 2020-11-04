require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const movies = require('./movielibrary.json');
const app = express();



app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.use(function validateBearerToken(req, res, next) {
  const apiToken = process.env.API_TOKEN;

  const authToken = req.get('Authorization');

  if ( !authToken || authToken.split(' ')[1] !== apiToken ) return res.status(401).json( { error: 'Unauthorized request' } );
  
  next();
}); 

app.get('/movie', function handleGetMovie( req, res ){
  let reply = movies;
  const ask = req.query;

  if( ask.genre ) reply = reply.filter( film => film.genre.toLowerCase( ).includes( ask.genre.toLowerCase( ) ) );

  if( ask.country ) reply = reply.filter( film => film.country.toLowerCase( ).includes( ask.country.toLowerCase( ) ) );

  if( ask.avg_vote ) reply = reply.filter( film => Number( film.avg_vote ) >= Number( ask.avg_vote ) );

  res.json( reply );

} );



const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});