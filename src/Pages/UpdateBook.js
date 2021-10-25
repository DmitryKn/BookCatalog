import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function UpdateBook() {
  const { id } = useParams();
  const [loadedBook, setLoadedBook] = useState({ title: '', author: '' });
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={loadedBook.title}
          name='title'
          onChange={handleChange}
          placeholder='Book Name'
        />
        <input
          type='text'
          value={loadedBook.author}
          name='author'
          onChange={handleChange}
          placeholder='Book Author'
        />
        <button type='submit'>Update Book</button>
      </form>
    </div>
  );
}

export default UpdateBook;
