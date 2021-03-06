import React, { useState, useEffect, useCallback } from 'react';
import Book from './Book';

const List = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const URL = 'http://localhost:5000/api/books';

  const fetchBooks = useCallback(async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setBooks(data.data.books);
    } catch (error) {
      console.log(error);
    }
  }, [books]);

  const deleteBook = async (id) => {
    try {
      const response = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <div className='container'>
      <section className='text-center mb-4 '>
        <form>
          <div className='d-flex flex-row flex-wrap justify-content-center'>
            <input
              className='form-control w-75'
              type='text'
              onChange={handleChange}
              placeholder='Search book by title'
            />
          </div>
        </form>
      </section>

      <h2>Books:</h2>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {books
          .filter((book) => {
            if (book === '') return book;
            if (book.title.toLowerCase().includes(search.toLowerCase()))
              return book;
          })
          .map((book) => {
            return (
              <Book
                key={book._id}
                book={book}
                deleteBook={() => deleteBook(book._id)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
