import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book, deleteBook }) => {
  const { title, author, _id, image } = book;
  return (
    <div className='card mb-3'>
      <Link to={`/books/${_id}`}>
        <img src={image} className='card-img-top' alt={title} />
      </Link>
      <div className='card-body'>
        <Link to={`/books/${_id}`}>
          <h5 className='card-title text-center'>{title}</h5>
        </Link>
        <p className='card-text'>
          <span className='fw-bold'>Author:</span> {author}
        </p>
        <div className='text-center'>
          <Link to={`/books/edit/${_id}`} className='m-3'>
            <button className='btn btn-secondary'>Edit</button>
          </Link>
          <button className='btn btn-danger' onClick={() => deleteBook(_id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
