import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useParams } from 'react-router-dom';
import { db } from './firebase';
import { getDoc,doc } from 'firebase/firestore';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, 'blogs', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBlog(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className='mx-auto text-center
    font-meroFont text-5xl text-blue-500'>Loading...</div>;
  }
  const createdDate = new Date(blog.createdAt.seconds);
  const timeAgo = new Date() - createdDate;
  const formattedDate = formatDistanceToNow(timeAgo, { addSuffix: true });

  return (
    <div className='mx-auto bg-bgColor left-5-10 text-white font-myFont '>
      <h2>{blog.Title}</h2>
      <h3>By:{blog.author}</h3>
      <h4>{formattedDate}</h4>

      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
