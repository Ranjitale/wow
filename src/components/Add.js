import React from "react";
import { useState } from "react";
import profile from '../img/anonymous-profile-old-style-glasses-hat-design-vector-27628582.webp'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  supabase from "./supabase";
import { UserAuth } from "./context/Authcontext";
import sanitizeHtml from "sanitize-html";
const sanitizeContent = (html) => sanitizeHtml(html, {
  allowedTags: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "a"],
  allowedAttributes: {
    a: ["href"],
  },
});
const Add = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {user} =UserAuth();
  const handleSubmit = async () => {
    const { error } = await supabase.from("blogs").insert([
      {
        title: title,
        content:  sanitizeContent(content),
        created_at: new Date(),
        author:user===null?"anonymous":user.displayName,
        photoURL:user===null?profile:user.photoURL
      },
    ]);
    setTitle("");
    setContent('')
    if(error){
      toast.error("An error occurred.")
    }
    toast.success("Your post has been sucessfully added.");
    

    
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <ToastContainer autoClose={3000} position="top-right" />

      <div className="w-full max-w-md mt-10">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }} className="flex flex-col">
          <div className="flex justify-self-start">
<div>
 <img src={user===null?profile:user.photoURL} alt="pro" className="w-full h-14 rounded-full"/>
</div>
                   <input
            type="text"
            placeholder="Notify us... ?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full font-medium   font-quicksand border-none rounded-md px-4 py-2 mt-2 outline-none"
            required
          />

 </div>

          <textarea type="text"
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full font-medium   font-quicksand h-16 rounded-md px-4 py-2 mt-2  border-none outline-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2"
          >
Make it          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;