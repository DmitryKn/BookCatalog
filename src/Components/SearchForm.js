import React, { useState } from 'react';

const SearchForm = ({ searchTerm }) => {
  const [search, setSearch] = useState('');

  function searchBook(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchTerm(search);
  }

  return (
    <section className='text-center mb-4 '>
      <form onSubmit={handleSubmit}>
        <div className='d-flex flex-row flex-wrap justify-content-center'>
          <input
            className='form-control w-75'
            type='text'
            onChange={searchBook}
            placeholder='Search book by title'
          />
          <button type='submit' className='btn btn-primary mx-4'>
            Find
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
