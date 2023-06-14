import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { db } from './firebase';
import { useNavigate } from 'react-router-dom';

import { getDocs, collection, where, query } from 'firebase/firestore';

const Search = () => {
  const navigate = useNavigate();
  const [q, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  
  const handleChangeInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (event) => {
    setLoading(true);
    event.preventDefault();

    const collection_ref = collection(db, 'blogs');
    const searchedQuery = query(collection_ref, where('title', '>=', q), where('title', '<=', `${q}\uf8ff`));
    const doc_refs = await getDocs(searchedQuery);
    const res = [];

    doc_refs.forEach((blog) => {
      res.push({
        id: blog.id,
        ...blog.data(),
      });
    });

    setResults(res);
    navigate(`/search?q=${encodeURIComponent(q)}`, { state: { results: results } });
    setLoading(false);
    
  };
  if (!results) {
    return <div className='mx-auto text-center
    font-meroFont text-5xl text-blue-500'>Loading...</div>;
  
}


  return (
    <>
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
      {loading && (<div className="flex items-center justify-center mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-4 border-green-900"></div>
        </div>)}
    </>
  );
};
export default Search;
