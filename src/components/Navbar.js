
      import React, {  useEffect, useRef } from 'react';
import hlogo from '../img/image_processing20210904-18191-l0cdje.gif';
import { Link } from 'react-router-dom';
import { UserAuth } from './context/Authcontext';
import {GiCrossedBones} from 'react-icons/gi'
const Navbar = () => {
  const {isMenuOpen, setIsMenuOpen} = UserAuth();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen,setIsMenuOpen]);

  return (
    <nav  ref={menuRef}
      className={`relative z-50 font-myFont flex justify-between items-center md:py-4 md:px-8 bg-white text-white ${
        isMenuOpen ? '' : ''
      }`}
    >
      <div className={`relative z-50 font-myFont flex justify-between items-center md:py-4 md:px-8 bg-white text-white ${
        isMenuOpen ? 'md:backdrop-blur-sm blur-sm opacity-60' : ''
      }`}>
      {/* Background overlay for blur effect */}
      
      <div>
        <div className="flex items-center">
          <div className="w-16 h-10 relative top-0 text-green-700 font-bold">
            <Link to="/" className="flex items-center">
              <img src={hlogo} alt="logo" className="w-16" />
              <span className="h-8">SwingToof</span>
            </Link>
          </div>
        </div>
      </div>
      </div>
      <div className="hidden md:flex space-x-4 ">
        <div className="w-40 h-10 top-0 rounded-full flex items-center justify-center cursor-pointer text-green-800 hover:text-blue-700">
          <Link to='/add' className='flex justify-center items-center gap-1 font-bold '>
            <span className=''>Home </span>
           </Link>
         </div>
          
       <Link onClick={()=>
            setIsMenuOpen(false)}
             to='/notes'>
          <div className="hidden md:flex space-x-4">
        <div className="w-40 h-10 top-0 rounded-full flex items-center justify-center  cursor-pointer text-green-800 hover:text-blue-700 gap-1" >
        <span className='font-bold'>Notes </span>
            </div>
            </div>
          </Link>
        <Link onClick={()=>
            setIsMenuOpen(false)} to="/blogs" className="navbar-button">
          
          <div className="hidden md:flex space-x-4">
        <div className="w-40 h-10 top-0 rounded-full flex items-center justify-center  cursor-pointer text-green-800 hover:text-blue-700 gap-1">
        <span className='font-bold'>Blogs </span>
            </div>
            </div>
          
        </Link>
        <Link onClick={()=>
            setIsMenuOpen(false)} to="/profile" className="navbar-button">
        
          <div className="hidden md:flex space-x-4">
        <div className="w-40 h-10 top-0 rounded-full flex items-center justify-center  cursor-pointer text-green-800 hover:text-blue-700 font-bold gap-1">
        <span className=''>Profile </span>
            </div>
            </div>
        </Link>
      </div>
      <div className=" md:hidden">
        <button
          className="navbar-button items-center text-gray-700 my-6 p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        {isMenuOpen && (
          <div className={`absolute  top-24 right-0 z-20 bg-gray-700 w-72 py-2 rounded-sm  shadow-lg`}>
            <button onClick ={toggleMenu} className='text-green-400 float-right mx-6 '>
              <GiCrossedBones/>
            </button>

              <Link onClick={()=>
            setIsMenuOpen(false)} to="/" className="w-full flex items-center space-x-2 px-4 py-2">
                <span>Home</span>
              </Link>
          
            
              <Link onClick={()=>
            setIsMenuOpen(false)}  to="/notes" className="w-full flex items-center space-x-2 px-4 py-2">
                <span>Notes</span>
             
            </Link>
          
              <Link onClick={()=>
            setIsMenuOpen(false)}  to="/blogs" className="w-full flex items-center space-x-2 px-4 py-2">
                <span>Blogs </span>
            
            </Link>
            
              <Link  onClick={()=>
            setIsMenuOpen(false)} to="/profile"className="w-full flex items-center space-x-2 px-4 py-2 ">
                 <span>Profile</span>
             
            </Link>
          </div>
        )}
      </div> 
      
    </nav>
  );
};

export default Navbar;

/*
import React from 'react';
import { useEffect,useRef } from 'react';
import hlogo from '../img/image_processing20210904-18191-l0cdje.gif'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = useRef(null)

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      
  };
  useEffect(() => {
   
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

   
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav ref={menuRef} className={`${isMenuOpen?" blur-lg  relative z-50 font-myFont flex justify-between items-center md:py-4 md:px-8 bg-white text-white":"font-myFont flex justify-between items-center md:py-4 md:px-8 bg-white text-white"} `}>

      <div>
        <div className="flex items-center">
          <div className="w-16 h-16 relative top-5 text-green-700 font-bold">
          <Link to="/" className='flex items-center'>
            <img src={hlogo} alt='logo' className='w-16'></img><span className='h-8'>SwingToof</span></Link>
          </div>
        </div>
      </div>
      // 
      <div className="md:hidden">
        <button
          className="navbar-button items-center text-gray-700 my-6 p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        {isMenuOpen && (
          <div className={`${isMenuOpen?"blur-none absolute top-14 right-0 z-20 bg-gray-500 w-40 py-2 rounded-lg shadow-lg":" blur-none absolute top-14 right-0 z-20 bg-gray-500 w-40 py-2 rounded-lg shadow-lg"}`}>
            
              <Link onClick={()=>
            setIsMenuOpen(false)} to="/" className="w-full flex items-center space-x-2 px-4 py-2">
                <span>Home</span>
              </Link>
          
            
              <Link onClick={()=>
            setIsMenuOpen(false)}  to="/notes" className="w-full flex items-center space-x-2 px-4 py-2">
                <span>Notes</span>
             
            </Link>
          
              <Link onClick={()=>
            setIsMenuOpen(false)}  to="/blogs" className="w-full flex items-center space-x-2 px-4 py-2">
                <span>Blogs </span>
            
            </Link>
            
              <Link  onClick={()=>
            setIsMenuOpen(false)} to="/profile"className="w-full flex items-center space-x-2 px-4 py-2 ">
                 <span>Profile</span>
             
            </Link>
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
// how to blur the bg when the toggle button is on and only the list is not blur*/