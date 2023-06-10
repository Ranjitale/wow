
import { Tab } from '@headlessui/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
// import { addDoc, collection } from "firebase/firestore"; 

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Notes() {
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'notes'));
        const notesArray = querySnapshot.docs.map((doc) => doc.data());
        console.log(notesArray)
        setNotes(notesArray);
        
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
  
    fetchNotes();
  }, []);


  return (
    <>
    <hr></hr>
    <div className="w-full mx-auto max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
       
        <div>
          {notes.map((note) => (
            
      
            <div key={note.id} className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <Link to={`/notes/${note.id}`}>
      <h2 className="text-2xl font-bold mb-4">{note.Title}</h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600 text-sm">
          {} {note.comments>1000000?`${note.comments/1000000}M ${note.comment===1?"comment":"comments"}`:note.comments}
        </p>
                  <p className="text-gray-600 text-sm">
                    {
                      
                    }
          {note.shares} {note.shares === 1 ? 'Share' : 'Shares'}
        </p>
      </div>
      
                <p className="text-gray-500 text-xs mb-2">Published on {new Date(note.createdAt.seconds*1000).toLocaleTimeString()+" at "+new Date(note.createdAt.seconds*1000).toLocaleDateString()}</p>
              </Link>
              
            </div>
          ))}
         
  </div>
      </Tab.Group>
      
      </div>
      </>
  );
}

