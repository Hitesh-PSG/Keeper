// src/createarea.jsx
import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {
    event.preventDefault(); 
    onAdd(note); 
    setNote({
      title: "",
      content: ""
    });
  }
  
  // NEW: Function to handle key presses in the textarea
  function handleKeyDown(event) {
    // Check if the pressed key is "Enter" and the Shift key is NOT held down
    if (event.key === 'Enter' && !event.shiftKey) {
      // Prevent the default action (which is to add a new line)
      event.preventDefault();
      // Submit the note
      submitNote(event);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      {/* The <form> tag itself will handle the button click submission */}
      <form onSubmit={submitNote} className="bg-gray-800 shadow-xl rounded-lg p-6 space-y-4">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          type="text"
          // --- DESIGN EXPLANATION for Input ---
          // w-full:          Make it take up the full width of its container.
          // border-none:     Remove the default browser border.
          // bg-gray-700:     A slightly lighter gray for contrast.
          // text-white:      Make the text you type white.
          // rounded-md:      Give it medium-rounded corners.
          // px-4 py-2:       Add horizontal (x) and vertical (y) padding inside.
          // focus:ring-2:    On focus (when you click in), add a 2px ring.
          // focus:ring-yellow-500: Make that ring yellow.
          // focus:outline-none:  Remove the default blue outline on focus.
          // transition-all:  Smoothly animate all changes (like the focus ring).
          className="w-full border-none bg-gray-700 text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all"
        />
        <textarea
          name="content"
          onChange={handleChange}
          // NEW: Attach our keydown handler here
          onKeyDown={handleKeyDown} 
          value={note.content}
          placeholder="Take a note..."
          rows="4"
          // These classes are the same as the input for a consistent look
          className="w-full border-none bg-gray-700 text-white rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition-all"
        />
        <button 
          type="submit" // Using type="submit" is better practice for form buttons
          // --- DESIGN EXPLANATION for Button ---
          // w-full:          Make it full-width.
          // bg-yellow-500:   The yellow background color.
          // text-black:      Makes the "Add" text black for better contrast.
          // font-bold:       Makes the text bold.
          // py-2 px-4:       Adds padding.
          // rounded-md:      Rounds the corners.
          // hover:bg-yellow-400: On hover, slightly lighten the background.
          // transition-colors: Smoothly animate color changes.
          // focus:outline-none, focus:ring-2, etc: Same focus style for consistency.
          // focus:ring-offset-2: Moves the focus ring slightly away from the button.
          // focus:ring-offset-gray-800: Makes the offset space match the form background.
          className="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;