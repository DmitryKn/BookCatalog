import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddBook() {
  const [book, setBook] = useState({ title: '', author: '' });
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
    setBook({ title: '', author: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={book.title}
          name='title'
          onChange={handleChange}
          placeholder='Book Name'
        />
        <input
          type='text'
          value={book.author}
          name='author'
          onChange={handleChange}
          placeholder='Book Author'
        />
        <button type='submit'>Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
