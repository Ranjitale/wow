import { Tab } from '@headlessui/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { formatDistanceToNow } from 'date-fns';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from './context/Authcontext';
export default function Blogs() {
  const [blogs, setBlogs] = useState(null);
  const {isMenuOpen} = UserAuth();

  const maxLength = 30;

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
    return (
      <div className='mx-auto text-center font-meroFont text-5xl text-blue-500'>Loading...</div>
    );
  }

  return (
    <div className={`w-full font-meroFont text-gray-700 mx-auto max-w-md px-2 py-16 sm:px-0 ${isMenuOpen?"blur-sm":""}`}>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1"></Tab.List>
        <div>
          {blogs.map((note) => (
            <div key={note.id} className="bg-white relative w-10/12 mx-auto rounded-lg shadow-lg p-6 my-3">
              <Link to={`/blogs/${note.id}`}>
                <h2 className="text-2xl font-bold mb-4">{note.title}</h2>
                <div className="justify-between items-center mb-4">
                  <div className='flex'>
                    <img
                      src='https://ih1.redbubble.net/image.3115733544.1636/pp,840x830-pad,1000x1000,f8f8f8.jpg'
                      alt='author'
                      width={50}
                      height={50}
                    />
                    <p className="text-gray-600 relative text-sm top-4 font-myFont">By {note.author}</p>
                  </div>
                  <br />
                  {note.content && (
                    <p className="font-myFont">
                      {note.content.length > maxLength
                        ? note.content.slice(0, maxLength) + '...'
                        : note.content}
                      <span className="text-blue-500">
                        <em>See More</em>
                      </span>
                    </p>
                  )}
                  <div className='text-green-600'>
                    {formatDistanceToNow(note.createdAt.seconds * 1000, { addSuffix: true })}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Tab.Group>
    </div>
  );
}
