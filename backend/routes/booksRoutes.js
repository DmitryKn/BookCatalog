const express = require('express');
const router = express.Router();

const catalogController = require('../controllers/booksController');

router
  .route('/')
  .get(catalogController.getBooks)
  .post(catalogController.addBook);
router
  .route('/:id')
  .get(catalogController.getBook)
  .patch(catalogController.updateBook)
  .delete(catalogController.deleteBook);

module.exports = router;
