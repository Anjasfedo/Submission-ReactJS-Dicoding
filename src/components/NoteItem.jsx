// Import necessary modules and components
import React from "react";
import { showFormattedDate } from "../utils";
import NoteButton from "./NoteButton";

// NoteItem functional component
const NoteItem = ({
  id,
  title,
  body,
  createdAt,
  changeArchiveHandler,
  deleteNoteHandler,
}) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        {/* Display the note title */}
        <h3 className="note-item__title">{title}</h3>
        {/* Display the formatted creation date of the note */}
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        {/* Display the note body */}
        <p className="note-item__body">{body}</p>
      </div>

      {/* Render NoteButton component for handling archive and delete actions */}
      <NoteButton
        id={id} // Pass the note ID
        changeArchiveHandler={changeArchiveHandler} // Pass the changeArchiveHandler function
        deleteNoteHandler={deleteNoteHandler} // Pass the deleteNoteHandler function
      />
    </div>
  );
};

// Export NoteItem component
export default NoteItem;
