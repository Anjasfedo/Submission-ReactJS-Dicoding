import React from "react";

const NoteInput = () => {
  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form action="">
        <p className="note-input__title__char-limit">Sisa karakter: </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="Ini adalah judul ..."
        />
        <textarea
          rows="5"
          className="note-input__body"
          placeholder="Tuliskan catatanmu di sini"
        />
        <button>Buat</button>
      </form>
    </div>
  );
};

export default NoteInput;
