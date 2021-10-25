import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book, editBook, deleteBook }) => {
  const { title, author, _id } = book;
  return (
    <>
      <Link to={`/books/${_id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{author}</p>
      <div>
        <Link to={`/books/edit/${_id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => deleteBook(_id)}>Delete</button>
      </div>
    </>
  );
};

export default Book;
