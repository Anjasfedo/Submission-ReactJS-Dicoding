import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

const NoteBody = ({ notesAll, notesArchive }) => {

  return (
    <div className="note-app__body">
      <NoteInput />
      <h2>Catatan aktif</h2>
      <NoteList notes={notesAll} />
      <h2>Arsipkan</h2>
      <NoteList notes={notesArchive} />
    </div>
  );
};

export default NoteBody;
