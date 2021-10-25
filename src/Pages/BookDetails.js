import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const { title, author, image } = book;

  const getBookDetals = async () => {
    const response = await fetch(`http://localhost:5000/api/books/${id}`);
    const data = await response.json();
    setBook(data.data.book);
  };

  useEffect(() => {
    getBookDetals();
  }, []);

  return (
    <div className='mx-auto col-md-8'>
      <h2 className='text-center my-4'>Book Details:</h2>
      <Link to='/'>
        <button className='btn btn-primary'>Back</button>
      </Link>
      <div className='card mb-3 w-50'>
        <img src={image} className='img-fluid' alt={title} />
        <div className='card-body'>
          <h2 className='card-title text-center'>{title}</h2>
          <p className='card-text'>
            <span className='fw-bold'>Author:</span> {author}
          </p>
          <p className='card-text'>
            <span className='fw-bold'>Description:</span> Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Possimus iste praesentium enim ex
            molestiae unde facilis consequuntur nostrum doloremque rem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
