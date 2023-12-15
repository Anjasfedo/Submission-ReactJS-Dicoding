import React from "react";

const NoteHeader = ({inputSearch, handleChangeSearch}) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari catatan ..." value={inputSearch} onChange={handleChangeSearch} />
      </div>
    </div>
  );
};

export default NoteHeader;
