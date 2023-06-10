import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { db } from './firebase';


const Search = () => {
  const [q, setQuery] = useState('');

  const handleChangeInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    const fetchBlogs = async () => {
      try {
 
        db.collection('blogs')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
      });
    })
    

      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex items-center justify-center py-3 "
    >
      <div className="max-w-md w-96 mx-auto ">
        <div className="flex border border-gray-300 rounded-md shadow-xl hover:border-blue-400">
          <input
            type="text"
            value={q}
            onChange={handleChangeInput}
            className="px-4 py-2 w-full text-gray-700 focus:outline-none md:w-80"
            placeholder="Search"
          />
          <div className="p-2">
            <button onClick={handleSearch} type="submit">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </div>
     
    </form>

  );
};

export default Search;
