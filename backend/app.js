const express = require('express');
const app = express();
const mongoose = require('mongoose');
const booksRouter = require('./routes/booksRoutes');
const dotenv = require('dotenv').config({ path: './config.env' });
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const DB = process.env.DATABASE;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/books', booksRouter);
app.all('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

mongoose
  .connect(DB)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    console.log('MongoDB connection successful');
  })
  .catch((err) => console.log(err));
