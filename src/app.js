const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');



const app = express();
app.use(morgan('dev'));




app.get('/movie')