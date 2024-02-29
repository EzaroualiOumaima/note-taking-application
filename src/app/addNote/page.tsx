"use client"
import { useState } from "react";

import Link from "next/link";




export default function AddNote (){
    
  

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const addNote = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: title,
            description: description
          })
        });
  
        if (!res.ok) {
          throw new Error("Failed to add note");
        }
        // Navigate to home page upon successful addition of note

        
        
      } catch (error) {
        console.error("Error adding note:", error);
      }
    };
      
    return (
    <>
        <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          addNote();
        }}
      >
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Note Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Link  href="/">
          <button
           key="add-note-button"
          type="button" // Change the type to prevent form submission
          onClick={addNote} // Call addNote function when clicked
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Note
        </button>
        </Link>
      </form>
       </>
       )
    
}