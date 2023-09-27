import React from 'react'
import { UserAuth } from './context/Authcontext';
import { GoogleButton } from 'react-google-button';
import {GoSignOut} from 'react-icons/go'
function Profile() {
    const { googleSignin,user ,signout,isMenuOpen} = UserAuth();
    const handleGoogleSignin = async () => {
        try {
            await googleSignin();
        }
        catch(e) {
            console.log(e)
        }
    }
  return (
      <div className={`mx-auto relative py-4 ${isMenuOpen?"backdrop-blur blur-md":""}`}>
        {user ? (

  <div className="container mx-auto py-8">
  <div className="max-w-sm mx-auto bg-orange-50 shadow-lg rounded-lg overflow-hidden">
    <div className="px-4 py-6">
      <img className="w-32 h-32 rounded-full mx-auto" src={user.photoURL} alt="Profile" />
      <h2 className="text-2xl font-bold text-center mt-4">{user.displayName}</h2>
              <p className="text-green-500 text-center mt-2"> {user.email}</p>
              <h1 className='text-center '>{user.emailVerified?"Verified":"UnAuthenticated"}</h1>
      <div className="flex justify-center mt-4">
        <button
          className="flex text-center items-center align-middle px-4 py-3 bg-red-500 text-white rounded hover:bg-red-600 font-myFont text-xl"
          onClick={signout}
        >
          <GoSignOut/><span className='relative -top-1'>Logout</span>
        </button>
      </div>
    </div>
  </div>
</div>
) : (
  <GoogleButton onClick={handleGoogleSignin} className='rounded-full m-auto' />
)}   
      </div>
  )
}

export default Profile