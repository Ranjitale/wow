import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from './context/Authcontext';
import  supabase  from './supabase';
import { formatDistanceToNow } from 'date-fns';
import profile from '../img/anonymous-profile-old-style-glasses-hat-design-vector-27628582.webp';

const maxLength = 50; // Maximum content length

const BlogPost = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formattedContent = content.replace(/\n/g, '<br />');
  const truncatedContent = formattedContent.slice(0, maxLength);
  const shouldShowSeeMore = formattedContent.length > maxLength && !isExpanded;

  return (
    <div>
     <div>
     <p className=' sm:text-xl  md:text-2xl font-semibold font-mulish'
        dangerouslySetInnerHTML={{
          __html: shouldShowSeeMore ? truncatedContent : formattedContent,
        }}
      />
     </div>
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

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const { isMenuOpen } = UserAuth();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase.from('blogs').select('*');
        if (error) {
          console.error('Error fetching blogs:', error);
        } else {
          setBlogs(data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  if (!blogs.length) {
    return (
      <div className='mx-auto text-center font-meroFont text-5xl text-blue-500'>
        Loading...
      </div>
    );
  }

  return (
    <div
      className={` font-meroFont bg- text-gray-700 mx-auto w-10/12 px-2 py-8 min-h-10 sm:px-0  ${
        isMenuOpen ? 'blur-sm' : ''
      }`}
    >
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className='bg-gray-50 relative w-full mx-auto rounded-lg shadow-lg p-6 my-3 transition transform '
        >
          <Link to={`/blogs/${blog.id}`} className='hover:text-blue-500'>
            <h2 className='text-2xl font-bold mb-4 font-mulish hover:scale-100 '>{ (blog.title)}</h2>
            <div className='flex items-center mb-4'>
              <img
                src={blog.photoURL || profile}
                alt='author'
                width={50}
                height={50}
                className='rounded-full'
              />
              <p className='text-gray-600 ml-4 font-myFont'>By {blog.author}</p>
            </div>
            {blog.content && (
              
                <BlogPost content={blog.content} />
             
            )}
            
            <div>
            <button
  type="button"
  className="inline-block rounded bg-neutral-800 px-6 my-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
  Read More ...
</button>
            </div>
            <div className='text-green-600'>
              {formatDistanceToNow(new Date(blog.created_at), { addSuffix: true })}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}