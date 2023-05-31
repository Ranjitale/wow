import React from 'react';
import { Link } from 'react-router-dom';
const blogPosts = [
  {
    title: '#1',
    imgSrc:"https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
    author: 'Ranjit Ale',
    content: 'How to make website with your name as a domain and free hosting.',
    datePosted: 'May 20, 2023',
  },
  {
    title: "#2",
    imgSrc:"https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
    author: 'Sunil  Mahata',
    content: 'Why resistance increases with increase in temperature?',
    datePosted: 'May 25, 2023',
  },
  // Add more blog posts as needed
];

const Blogs = () => {
  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-3xl font-bold mb-4">Blogs From <Link to="/">Infinity.zero</Link></h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="mb-8 bg-fuchsia-200 p-10 h-auto rounded-xl">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <Link to='/'><img src={post.imgSrc} className='w-9 h-9 rounded-full' alt='Author ko Charitra'></img></Link>
          <p className="text-gray-500 mb-2">By {post.author}</p>
          <p className="text-gray-700">{post.content}</p>
          <p className="text-gray-500 mt-2">Posted on {post.datePosted}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
