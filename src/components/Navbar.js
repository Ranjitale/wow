
import React from 'react';
import { useEffect,useRef } from 'react';

import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { FaBook, FaMicroblog, FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = useRef(null)

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      
  };
  useEffect(() => {
    // Function to handle the click event outside the menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Attach the event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener when the component is unmounted or the menu is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav ref={menuRef} className="font-myFont flex justify-around items-center py-4 px-8 bg-customColor text-white">

      <div>
        <div className="flex items-center space-x-2">
          <div className="w-16 h-16 relative top-5 text-cyan-400">
          <Link to="/">Infinity.Zero</Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex space-x-4 ">
        <div className="w-40 h-12 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-700">
          <Link to='/' className='flex align-middle items-center gap-1'>
            <span className=''>Home </span><FiHome className="" />
            </Link>
          </div>
          
      <Link onClick={()=>
            setIsMenuOpen(false)} to='/notes'>
          <div className="hidden md:flex space-x-4">
        <div className="w-40 h-12 bg-gray-800 rounded-full flex items-center justify-center  cursor-pointer hover:bg-slate-700 gap-1" >
        <span className=''>Notes </span><FaBook className=" text-white" />
            </div>
            </div>
          </Link>
        <Link onClick={()=>
            setIsMenuOpen(false)} to="/blogs" className="navbar-button">
          
          <div className="hidden md:flex space-x-4">
        <div className="w-40 h-12 bg-gray-800 rounded-full flex items-center justify-center  cursor-pointer hover:bg-slate-700 gap-1">
        <span className=''>Blogs </span><FaMicroblog className=" text-white" />
            </div>
            </div>
          
        </Link>
        <Link onClick={()=>
            setIsMenuOpen(false)} to="/profile" className="navbar-button">
        
          <div className="hidden md:flex space-x-4">
        <div className="w-40 h-12 bg-gray-800 rounded-full flex items-center justify-center  cursor-pointer hover:bg-slate-700 gap-1">
        <span className=''>Profile </span><FaUserAlt className=" text-white" />
            </div>
            </div>
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="navbar-button"
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
          <div className="absolute top-14 right-0 z-10 bg-gray-900 w-40 py-2 rounded-lg shadow-lg">
            
              <Link onClick={()=>
            setIsMenuOpen(false)} to="/" className="w-full flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 rounded-lg">
                <FiHome className="text-white" />
                <span>Home</span>
              </Link>
          
            
              <Link onClick={()=>
            setIsMenuOpen(false)}  to="/notes" className="w-full flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 rounded-lg">
                <FaBook className="text-white" />
                <span>Notes</span>
             
            </Link>
          
              <Link onClick={()=>
            setIsMenuOpen(false)}  to="/blogs" className="w-full flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 rounded-lg">
                <FaMicroblog className="text-white" />
                <span>Blogs </span>
            
            </Link>
            
              <Link  onClick={()=>
            setIsMenuOpen(false)} to="/profile"className="w-full flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 rounded-lg">
                <FaUserAlt className="text-white" />
                <span>Profile</span>
             
            </Link>
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
