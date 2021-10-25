const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A book must have a title.'],
    unique: true,
    trim: true,
    maxlength: [40, 'A title must have less or equal then 40 characters'],
    minlength: [3, 'A title must have more or equal then 3 characters'],
  },
  author: {
    type: String,
    required: [true, 'A book must have an author.'],
    trim: true,
    maxlength: [
      40,
      'An author name must have less or equal then 40 characters',
    ],
    minlength: [3, 'A author name must have more or equal then 3 characters'],
  },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
