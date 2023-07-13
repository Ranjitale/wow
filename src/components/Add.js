import React from 'react'
import { useState } from 'react';

import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
function Add() {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const Add=async()=>{

        try {
            const docRef = await addDoc(collection(db, "blogs"), {
                title: title,
                content: content,
                createdAt: new Date()
            
            });
            console.log(docRef)
            console.log("Code has been added sucessfully!")
            toast.success('Item added successfully!', {
                position: 'bottom-right',
                autoClose: 3000, // Duration for the toast to be displayed (in milliseconds)
            });
            setTitle("");
            setContent("");
        } catch (e) {
            toast.error("Errod adding the code!")
        }
    }
      
    return (
      
        <div className='w-60vw relative
       mx-auto'>
            <ToastContainer></ToastContainer>
            <input className=" h-12 border-red-400 mx-36 my-8 w-6/12" type="text" value={title} onChange={(e) => {
              setTitle(e.target.value)
            }} placeholder='Add title..'></input>
            <div className='w-9/12 mx-auto '>
               
                <form onSubmit={(e) => {
                    e.preventDefault();
}}>
   <div className="text-center mb-4 mx-auto  border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div className=" w-60vw flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
           <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
               <div className="flex items-center space-x-1 sm:pr-4">
                  
                   
                   
                   <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Format code</span>
                   </button>
               </div>
               
           </div>
           <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
               <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path></svg>
               <span className="sr-only">Full screen</span>
           </button>
           <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
               Show full screen
               <div className="tooltip-arrow" data-popper-arrow></div>
           </div>
       </div>
       <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
           <label htmlFor="editor" className="sr-only">Publish post</label>
                           <pre
    id="editor"
    contentEditable="true"
    onInput={(e) => setContent(e.target.innerHTML)}
    className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
    placeholder="Write an article..."
    required
/>
 </div>
   </div>
   <button type="submit" onClick={Add}  className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
       Publish post
   </button>
</form>


            </div>
          
    </div >
    
  )
}

export default Add
