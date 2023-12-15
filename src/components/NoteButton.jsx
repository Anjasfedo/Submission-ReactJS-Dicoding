// Import necessary modules and components
import React from "react";

// NoteButton functional component
const NoteButton = ({ id, changeArchiveHandler, deleteNoteHandler }) => {
  return (
    <div className="note-item__action">
      {/* Button to delete the note */}
      <button
        className="note-item__delete-button"
        onClick={() => deleteNoteHandler(id)} // Call the deleteNoteHandler function with the note ID as an argument
      >
        Delete
      </button>

      {/* Button to change the archive status of the note */}
      <button
        className="note-item__archive-button"
        onClick={() => changeArchiveHandler(id)} // Call the changeArchiveHandler function with the note ID as an argument
      >
        Archive
      </button>
    </div>
  );
};

// Export NoteButton component
export default NoteButton;
