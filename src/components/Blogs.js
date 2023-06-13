import { Tab } from '@headlessui/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { formatDistanceToNow } from 'date-fns';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blogs() {
  const [blogs, setBlogs] = useState(null);


  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const blogsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogsArray);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    
    fetchNotes();
  }, []);
  if (!blogs) {
    return <div className='mx-auto text-center
    font-meroFont text-5xl text-blue-500'>Loading...</div>;
  
  }

  return (
    <div className="w-full font-meroFont text-gray-700 mx-auto max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1"></Tab.List>
        <div>
          {blogs.map((note) => 
            
            (
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
              </div>
            ))}
        </div>
      </Tab.Group>
    </div>
          );
}
