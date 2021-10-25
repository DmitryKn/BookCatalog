import React, { useState, useEffect, useCallback } from 'react';
import Book from './Book';

const List = () => {
  const [books, setBooks] = useState([]);
  const URL = 'http://localhost:5000/api/books';

  const fetchBooks = useCallback(async () => {
    try {
      const response = await fetch(`${URL}`);
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

  if (books.length === 0) {
    return <>Loading...</>;
  }

  return (
    <div>
      <h1>List:</h1>
      {books.map((book) => {
        return (
          <Book
            key={book._id}
            book={book}
            deleteBook={() => deleteBook(book._id)}
          />
        );
      })}
    </div>
  );
};

export default List;
