import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  const getBookDetals = async () => {
    const response = await fetch(`http://localhost:5000/api/books/${id}`);
    const data = await response.json();
    setBook(data.data.book);
  };

  useEffect(() => {
    getBookDetals();
  }, []);

  return (
    <div>
      <h1>Book Details:</h1>
      <p>{book.id}</p>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <Link to='/'>
        <button className='btn btn-primary'>Back</button>
      </Link>
    </div>
  );
};

export default BookDetails;
