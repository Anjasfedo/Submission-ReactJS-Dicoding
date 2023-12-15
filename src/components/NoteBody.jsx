import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

const NoteBody = ({ notes }) => {
  const activeNote = notes.filter((note) => !note.archived);
  const archiveNote = notes.filter((note) => note.archived);
  return (
    <div className="note-app__body">
      <NoteInput />
      <h2>Catatan aktif</h2>
      <NoteList notes={activeNote} />
      <h2>Arsipkan</h2>
      <NoteList notes={archiveNote} />
    </div>
  );
};

export default NoteBody;
