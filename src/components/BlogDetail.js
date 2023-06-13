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
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className='mx-auto text-center
    font-meroFont text-5xl text-blue-500'>Loading...</div>;
  }
  const createdDate = new Date(blog.createdAt.seconds);
  const formattedDate = formatDistanceToNow(createdDate*1000, { addSuffix: true });

  return ( 
    // <div className='mx-auto bg-bgColor left-5-10 text-white font-myFont '>
    //   <h2>{blog.Title}</h2>
    //   <h3>By:{blog.author}</h3>
      // <h4>{formattedDate}</h4>
    
    //   <p>{blog.content}</p>
    
    // </div>
    // );
    <div className="flex flex-col items-center bg-gradient-to-r bg-gray-500 min-h-screen">
      <div className="w-6 h-6 rounded-full mt-8">
        <img src='https://images.unsplash.com/photo-1624561261145-351e786934b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' alt="Profile" className="rounded-full w-16 h-6" />
      </div>
      <h1 className="text-3xl mt-4 font-bold text-white">By:{blog.author}</h1>
      <div className="bg-white rounded-lg p-8 mt-8 max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{blog.title}</h2>
        <div className="prose text-gray-700">
          <p>
            {blog.content}
          </p>
          
      <h4>{formattedDate}</h4>
        </div>
      </div>
    </div>
      
  );
};

export default BlogDetails;
