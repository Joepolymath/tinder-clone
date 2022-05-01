const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const Cors = require('cors');
const logger = require('./middlewares/logger');

const app = express();


connectDB();

const PORT = process.env.PORT || 5000;

// body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(Cors());

// middlewares
app.use(logger);


app.use('/api/cards', require('./routes/cardsRouter'));

app.get('/', (req, res) => {
       res.status(200);
       res.send("Hello world");
})

app.listen(PORT, () => {
       console.log(`Server running at port ${PORT}`);
})