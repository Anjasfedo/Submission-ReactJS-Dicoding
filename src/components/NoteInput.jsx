// Import necessary modules and components
import React from "react";

// NoteInput functional component
const NoteInput = ({
  InputNewNoteHandler,
  inputNote,
  addNoteHandler,
  maxLength,
}) => {
  return (
    <div className="note-input">
      {/* Title for the note input section */}
      <h2>Buat catatan</h2>

      {/* Form for adding a new note */}
      <form onSubmit={addNoteHandler}>
        {/* Display the character limit for the note title */}
        <p className="note-input__title__char-limit">
          Sisa karakter: {maxLength - inputNote.title.length}
        </p>

        {/* Input field for the note title */}
        <input
          type="text"
          className="note-input__title"
          placeholder="Ini adalah judul ..."
          name="title"
          value={inputNote.title}
          onChange={InputNewNoteHandler}
          maxLength={maxLength}
        />

        {/* Textarea for the note body */}
        <textarea
          rows="5"
          className="note-input__body"
          placeholder="Tuliskan catatanmu di sini"
          name="body"
          value={inputNote.body}
          onChange={InputNewNoteHandler}
        />

        {/* Button to submit the new note */}
        <button>Buat</button>
      </form>
    </div>
  );
};

// Export NoteInput component
export default NoteInput;
