import React from 'react';
import { UserAuth } from './context/Authcontext';
import { Link } from 'react-router-dom';
const Home = () => {
      const {isMenuOpen} = UserAuth();
 
    return (
      <>
<div className={`${isMenuOpen?"backdrop-blur-sm blur-sm":""}`}>
      
<div className="relative h-auto overflow-hidden bg-indigo-900">
    <img src="https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-dragon-boat-festival-dumplings-green-cartoon-nature-theme-poster-image_789264.jpg" alt='bg' className="absolute object-cover w-full h-full"/>
    <div className="absolute inset-0 bg-black opacity-25">
    </div>
    
    <div className="container relative z-10 flex items-center px-6 py-12 mx-auto md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
            <span className="font-bold text-pink-500 font-myFont bg-gray-100 p-4 uppercase">
                SwingToof Amplify Your Potential
            </span>
            <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
                <span className='underline decoration-pink-500'>One life , Be brilliant</span> 
                <br/>
                    Carry yourself not your past and regrets.
            </h1>
           
            <Link to="/blogs" className="block px-4 py-3 mt-10 text-lg font-bold bg-yellow-400 text-purple-500 uppercase animate-bounce rounded-lg hover:bg-yellow-300">
                Discover more?
            </Link>
        </div>
    </div>
</div>

</div>
</>
  );
};

export default Home;
