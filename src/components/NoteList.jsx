// Import necessary modules and components
import React from "react";
import NoteItem from "./NoteItem";

// NoteList functional component
const NoteList = ({ notes, changeArchiveHandler, deleteNoteHandler }) => {
  // Check if there are no notes
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  }

  // Render the list of notes
  return (
    <>
      <div className="notes-list">
        {notes.map((note) => (
          // Render individual NoteItem component for each note
          <NoteItem
            key={note.id} // Unique key for React to efficiently update the list
            {...note} // Spread the note object's properties as props
            changeArchiveHandler={changeArchiveHandler} // Pass changeArchiveHandler function
            deleteNoteHandler={deleteNoteHandler} // Pass deleteNoteHandler function
          />
        ))}
      </div>
    </>
  );
};

// Export NoteList component
export default NoteList;
