import React from "react";

const NoteList = () => {
  return (
    <>
      <h2>Catatan aktif</h2>
      <div className="notes-list">
        <div className="note-item">
          <div className="note-item__content">
            <h3 className="note-item__title">a</h3>
            <p className="note-item__date">ab</p>
            <p className="note-item__body">abc</p>
          </div>
          <div className="note-item__action">
            <button className="note-item__delete-button">Hapus</button>
            <button className="note-item__archive-button">Arsipkan</button>
          </div>
        </div>
      </div>

      <h2>Arsipkan</h2>
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    </>
  );
};

export default NoteList;
