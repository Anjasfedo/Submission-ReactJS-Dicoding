// Import necessary modules and components
import React from "react";

// NoteHeader functional component
const NoteHeader = ({ inputSearch, handleChangeSearch }) => {
  return (
    <div className="note-app__header">
      {/* Display the title of the note app */}
      <h1>Notes</h1>

      {/* Search input for filtering notes */}
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={inputSearch}
          onChange={handleChangeSearch}
        />
      </div>
    </div>
  );
};

// Export NoteHeader component
export default NoteHeader;
