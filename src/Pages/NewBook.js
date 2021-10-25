import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddBook() {
  const [book, setBook] = useState({ title: '', author: '', image: '' });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch('http://localhost:5000/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
    setBook({ title: '', author: '', image: '' });
  };

  return (
    <div className='mx-auto col-md-6'>
      <h3 className='mt-5 text-center'>Create a new book</h3>
      <form onSubmit={handleSubmit}>
        <div className='col'>
          <label className='col col-form-label text-secondary' htmlFor='title'>
            Title
          </label>
          <input
            className='form-control'
            type='text'
            value={book.title}
            name='title'
            id='title'
            onChange={handleChange}
            placeholder='add book name...'
          />
        </div>
        <div className='col'>
          <label
            htmlFor='author'
            className='col-sm-6 col-form-label text-secondary'
          >
            Author
          </label>
          <input
            className='form-control'
            type='text'
            value={book.author}
            name='author'
            id='author'
            onChange={handleChange}
            placeholder='add book author...'
          />
        </div>
        <div className='col'>
          <label className='col col-form-label text-secondary' htmlFor='image'>
            Image
          </label>
          <input
            className='form-control'
            type='text'
            value={book.image}
            name='image'
            id='image'
            onChange={handleChange}
            placeholder='add url link...'
          />
        </div>
        <button type='submit' className='btn btn-primary mt-5 '>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
