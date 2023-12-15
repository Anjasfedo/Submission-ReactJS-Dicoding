// Import necessary modules and components
import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

// NoteBody functional component
const NoteBody = ({
  notesAll,
  notesArchive,
  InputNewNoteHandler,
  inputNote,
  addNoteHandler,
  changeArchiveHandler,
  deleteNoteHandler,
  maxLength,
}) => {
  return (
    <div className="note-app__body">
      {/* Render NoteInput component for adding new notes */}
      <NoteInput
        InputNewNoteHandler={InputNewNoteHandler}
        inputNote={inputNote}
        addNoteHandler={addNoteHandler}
        maxLength={maxLength}
      />

      {/* Display header for active notes */}
      <h2>Active Notes</h2>

      {/* Render NoteList component for active notes */}
      <NoteList
        notes={notesAll}
        changeArchiveHandler={changeArchiveHandler}
        deleteNoteHandler={deleteNoteHandler}
      />

      {/* Display header for archived notes */}
      <h2>Archived Notes</h2>

      {/* Render NoteList component for archived notes */}
      <NoteList
        notes={notesArchive}
        changeArchiveHandler={changeArchiveHandler}
        deleteNoteHandler={deleteNoteHandler}
      />
    </div>
  );
};

// Export NoteBody component
export default NoteBody;
