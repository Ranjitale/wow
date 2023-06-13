import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useParams } from 'react-router-dom';
import { db } from './firebase';
import { getDoc,doc } from 'firebase/firestore';

const NoteDetail = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, 'notes', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNote(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!note) {
    return <div className='mx-auto text-center
    font-meroFont text-5xl text-blue-500'>Loading...</div>;
  }
  const createdDate = new Date(note.createdAt.seconds);
  
  const formattedDate = formatDistanceToNow(createdDate*1000, { addSuffix: true });

  return ( 
    <div className='mx-auto bg-gray-200 left-5-10 text-black font-myFont p-6 mt-6 w-96 rounded-md shadow-lg'>
          <h2>{note.Title}</h2>
          <div className='flex text-center gap-4'>
      <h3>Comments:{note.comments}</h3>
      

      <p>shares:{note.shares}</p>
          </div>
          <h4 className='text-green-800'>{formattedDate}</h4>
          </div>
  );
};

export default NoteDetail;
