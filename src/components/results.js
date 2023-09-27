import React from 'react';
import { useLocation } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Link } from 'react-router-dom';
const Results = () => {
  const location = useLocation();
  const {  results } = location.state;
 

  return (
    <div>
      
      
      {results === null? <div className='text-center text-purple-500 text-3xl'>Not found...</div>:results.map((note) => 
          
          (
            <div key={note.id} className="bg-white rounded-lg md:w-8/12 m-auto shadow-lg p-3 my-4 w-11/12">
            
              <Link to={`/blogs/${note.id}`}>
                <h2 className="text-2xl font-bold mb-4">{note.title}</h2>
                <div className=" justify-between items-center mb-4">
                  <div className='flex '>
                
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg' alt='author' width={50} height={50}></img><p className="text-gray-600 relative text-sm top-4 font-myFont">By {note.author}</p>
                  </div>
                <br></br>
                <p className="font-myFont">
                  {note.content}...
                  <span className="text-blue-500">
                  <em>See More</em>
                  </span>
                  </p>
                  <button
  type="button"
  className="inline-block rounded bg-neutral-800 px-6 my-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
  Read More ...
</button>
                  <div className='text-purple-800 py-6'>
                {formatDistanceToNow( new Date(note.created_at))}
                </div>
                </div>
              </Link>
            </div>
          ))}
     
    </div>
  );
};

export default Results;