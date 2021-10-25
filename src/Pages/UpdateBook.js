import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function UpdateBook() {
  const { id } = useParams();
  const [loadedBook, setLoadedBook] = useState({
    title: '',
    author: '',
    image: '',
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoadedBook({ ...loadedBook, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/api/books/${id}`);
      const data = await response.json();
      setLoadedBook(data.data.book);
    };
    fetchData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch(`http://localhost:5000/api/books/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loadedBook),
      });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
    history.push('/');
  };

  return (
    <div className='mx-auto col-md-6'>
      <h3 className='mt-5 text-center'>Update the book information</h3>
      <form onSubmit={handleSubmit}>
        <div className='col'>
          <label className='col col-form-label text-secondary' htmlFor='title'>
            Title
          </label>
          <input
            className='form-control'
            type='text'
            value={loadedBook.title}
            name='title'
            id='title'
            onChange={handleChange}
            placeholder='change book name...'
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
            value={loadedBook.author}
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
            value={loadedBook.image}
            name='image'
            id='image'
            onChange={handleChange}
            placeholder='add url link...'
          />
        </div>
        <button type='submit' className='btn btn-primary mt-5 float-end'>
          Update Book
        </button>
      </form>
    </div>
  );
}

export default UpdateBook;
