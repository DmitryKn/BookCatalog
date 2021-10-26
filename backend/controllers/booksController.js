const Book = require('../models/booksModel');

//get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: 'success',
      results: books.length,
      data: { books },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'can not get all books',
    });
  }
};

//get book by id
exports.getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (book === null) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'book not found' });
    }
    res.status(200).json({
      status: 'success',
      data: { book },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'something went wrong.',
    });
  }
};

//add a new book
exports.addBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { newBook },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'can not add a new book',
    });
  }
};

//update book by id
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, image } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, image },
      { new: true }
    );
    res.status(200).json({
      status: 'success',
      data: {
        updatedBook,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'can not update the book',
    });
  }
};

//delete book by id
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.status(200).json({
      status: 'success',
      message: 'the book successfully deleted',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'can not delete the book',
    });
  }
};
