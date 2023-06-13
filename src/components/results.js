import React from 'react';
import { useLocation ,Link} from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
const Results = () => {
  const location = useLocation();
  const { query, results } = location.state;

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
          {
              results.map((note) => {
                  return (
                <div key={note.id} className="bg-white rounded-lg shadow-lg p-6 mb-6">
              
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
                  <div className='text-green-600'>{formatDistanceToNow(note.createdAt.seconds*1000,{addSuffix:true})}</div>
                  
                        </div>
                        </Link>
            </div>)
              })
      }
      
              
    </div>
  );
};

export default Results;
