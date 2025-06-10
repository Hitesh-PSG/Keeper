// src/Note.jsx
import React from "react";

function Note({ id, title, content, onDelete }) {
  function handleClick() {
    onDelete(id);
  }

  return (
    // --- DESIGN EXPLANATION for Note Container ---
    // relative:      Needed so we can position the delete button 'absolutely' inside it.
    // bg-yellow-200: A classic "sticky note" yellow background.
    // text-gray-800: Dark text for readability on the light background.
    // m-4 p-4:       Adds margin around the note and padding inside it.
    // rounded-lg:    Gives it large rounded corners.
    // shadow-lg:     Adds a prominent shadow to make it "pop" off the page.
    // w-64:          Sets a fixed width.
    // break-words:   Ensures long words without spaces (like URLs) will wrap.
    // transform:     Enables transformations like scale and rotate.
    // transition-transform: Animate the transform property (for the hover effect).
    // hover:scale-105: On hover, make the note 105% of its original size.
    <div className="relative bg-yellow-200 text-gray-800 m-4 p-4 rounded-lg shadow-lg w-64 break-words transform transition-transform hover:scale-105">
      <h1 className="font-bold text-xl mb-2">{title}</h1>
      <p className="mb-4">{content}</p>
      
      {/* --- DESIGN EXPLANATION for Delete Button --- */}
      {/* absolute:       Positions the button relative to the parent div (which is 'relative'). */}
      {/* top-2 right-2:  Places it 2 units from the top and 2 from the right. */}
      {/* text-gray-500:  Makes the 'X' a subtle gray color by default. */}
      {/* hover:text-white: On hover, make the 'X' white. */}
      {/* hover:bg-red-500: On hover, give it a red background. */}
      {/* rounded-full:   Makes the button a perfect circle. */}
      {/* w-7 h-7:        Sets a fixed width and height. */}
      {/* flex items-center justify-center: A trick to perfectly center the 'X' inside the circle. */}
      {/* transition-colors: Smoothly animate the color changes on hover. */}
      {/* text-lg font-bold: Makes the 'X' a bit bigger and bolder. */}
      <button
        onClick={handleClick}
        className="absolute top-2 right-2 text-gray-500 hover:text-white hover:bg-red-500 rounded-full w-7 h-7 flex items-center justify-center transition-colors text-lg font-bold"
      >
        × 
        {/* × is the HTML entity for a multiplication sign, which looks like a nice 'X' */}
      </button>
    </div>
  );
}

export default Note;