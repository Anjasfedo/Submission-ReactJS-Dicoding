import React from "react";

const NoteInput = ({
  InputNewNoteHandler,
  inputNote,
  addNoteHandler,
  maxLength,
}) => {
  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form onSubmit={addNoteHandler}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {maxLength - inputNote.title.length}
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="Ini adalah judul ..."
          name="title"
          value={inputNote.title}
          onChange={InputNewNoteHandler}
          maxLength={maxLength}
        />
        <textarea
          rows="5"
          className="note-input__body"
          placeholder="Tuliskan catatanmu di sini"
          name="body"
          value={inputNote.body}
          onChange={InputNewNoteHandler}
        />
        <button>Buat</button>
      </form>
    </div>
  );
};

export default NoteInput;
