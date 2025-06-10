// src/App.jsx
import React, { useState } from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import CreateArea from "./createarea.jsx";
import Note from "./note.jsx";

function App() {
  // 1. State to hold the array of notes
  const [notes, setNotes] = useState([]);

  // 2. Function to add a new note to the array
  function addNote(newNote) {
    if (newNote.title || newNote.content) { // Don't add empty notes
      setNotes(prevNotes => {
        // Return a new array with the new note added to the end
        return [...prevNotes, newNote];
      });
    }
  }

  // 3. Function to delete a note, identified by its id (index)
  function deleteNote(id) {
    setNotes(prevNotes => {
      // Return a new array containing all notes EXCEPT the one with the matching id
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="flex-grow p-4">
        {/* Pass the addNote function to the CreateArea component */}
        <CreateArea onAdd={addNote} />

        <div className="flex flex-wrap justify-center mt-8">
          {/* 4. Map over the notes array to display each one */}
          {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index} // Use the index as a unique ID for deletion
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote} // Pass the delete function to each Note
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
