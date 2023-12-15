import React from "react";

const NoteButton = ({ id, changeArchiveHandler }) => {
  return (
    <div className="note-item__action">
      <button
        className="note-item__delete-button"
        onClick={() => changeArchiveHandler(id)}
      >
        Hapus
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => changeArchiveHandler(id)}
      >
        Arsipkan
      </button>
    </div>
  );
};

export default NoteButton;
