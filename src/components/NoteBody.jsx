import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

const NoteBody = ({ notesAll, notesArchive, InputNewNoteHandler, inputNote, addNoteHandler }) => {

  return (
    <div className="note-app__body">
      <NoteInput InputNewNoteHandler={InputNewNoteHandler} inputNote={inputNote} addNoteHandler={addNoteHandler} />
      <h2>Catatan aktif</h2>
      <NoteList notes={notesAll} />
      <h2>Arsip</h2>
      <NoteList notes={notesArchive} />
    </div>
  );
};

export default NoteBody;
