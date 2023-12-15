import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, changeArchiveHandler }) => {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  }

  return (
    <>
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            {...note}
            changeArchiveHandler={changeArchiveHandler}
          />
        ))}
      </div>
    </>
  );
};

export default NoteList;
