import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useParams } from 'react-router-dom';
import supabase  from './supabase';
import { UserAuth } from './context/Authcontext';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
const BlogDetails = () => {
  const { id } = useParams();
  const {user}=UserAuth();
  const [blog, setBlog] = useState(null);
  const [liked,setLiked]=useState(false)
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('id', id);

        if (error) {
          console.error('Error fetching blog:', error);
        } else if (data.length > 0) {
          // Check if data exists before setting the blog state
          setBlog(data[0]);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);
  if (!blog) {
    return (
      <div className='mx-auto text-center font-meroFont text-5xl text-blue-500'>
        Loading...
      </div>
    );
  }
  
  const handleLikeClick = async () => {
    console.log(blog.likes)
    if(blog.likes===null){
      blog.likes=[]
    }
    
    if(user===null){
      toast.error('You must login to Like.')
      return 0;
    }
    // Check if the user has already liked the post to prevent duplicate likes
    if (!blog.likes.includes(user.uid)) {
      // Add the user's ID to the likes array
      const updatedLikes = [...blog.likes, user.uid];
      setLiked(true);
      // Update the likes array in the database
      await supabase
        .from('blogs')
        .update({ likes: updatedLikes })
        .eq('id', blog.id);
  
      // Update the UI to reflect the change
      setBlog({ ...blog, likes: updatedLikes });
    }
    if (blog.likes.includes(user.uid)) {
      const updatedLikes = blog.likes.filter((userId) => userId !== user.uid);
setLiked(false)
    // Update the likes array in the database
    await supabase
      .from('blogs')
      .update({ likes: updatedLikes })
      .eq('id', blog.id);

    // Update the UI to reflect the change
    setBlog({ ...blog, likes: updatedLikes });
  }
  };
  

  const maxLength = 150; // Maximum content length

  const BlogPost = ({ content }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const formattedContent = content.replace(/\n/g, '<br />');
    const truncatedContent = formattedContent.slice(0, maxLength);
    const shouldShowSeeMore = formattedContent.length > maxLength && !isExpanded;
  
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: shouldShowSeeMore ? truncatedContent : formattedContent }} />
        {shouldShowSeeMore && (
          <span
            className='text-blue-500 cursor-pointer'
            onClick={() => setIsExpanded(true)}
          >
            <em> See More</em>
          </span>
        )}
      </div>
    );
  };
  const createdAtDate = new Date(blog.created_at);

  return (
    <div className="flex flex-col items-center bg-gradient-to-r bg-gray-500 min-h-screen">
      <ToastContainer autoClose={3000}position='top-center' />
    <div className="w-32 h-16 rounded-full mt-8">
      <img src={blog.photoURL===null?"https://www.shutterstock.com/shutterstock/photos/1850222983/display_1500/stock-vector-anonymous-vector-icon-incognito-sign-privacy-concept-human-head-with-glitch-face-personal-data-1850222983.jpg":blog.photoURL} alt="Profile" className="rounded-full" />
    </div>
    <h1 className="text-3xl mt-4 font-bold text-white">By:{blog.author}</h1>
    <div className="bg-cyan-50 w-4/5 rounded-lg p-8 mt-8 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{blog.title}</h2>
      <div className="prose text-gray-700">
        
          <BlogPost content={blog.content}/>
        
        
        <div className='text-green-600 py-6'>
                {formatDistanceToNow(createdAtDate)} {/* Corrected this line */}
              </div>
              
               </div>
               <div>{liked?<AiFillLike onClick={handleLikeClick} size={30}  className=' text-green-500 hover:cursor-pointer'/>:<AiOutlineLike  size={30}  className=' text-white-500 hover:cursor-pointer' onClick={handleLikeClick }/>}{blog.likes===null?"0":blog.likes.length}</div>
    </div>
  </div>
    
  );
};

export default BlogDetails;