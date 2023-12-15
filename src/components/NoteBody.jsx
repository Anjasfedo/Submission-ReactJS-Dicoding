import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

const NoteBody = ({
  notesAll,
  notesArchive,
  InputNewNoteHandler,
  inputNote,
  addNoteHandler,
  changeArchiveHandler,
  deleteNoteHandler,
  maxLength,
}) => {
  return (
    <div className="note-app__body">
      <NoteInput
        InputNewNoteHandler={InputNewNoteHandler}
        inputNote={inputNote}
        addNoteHandler={addNoteHandler}
        maxLength={maxLength}
      />
      <h2>Catatan aktif</h2>
      <NoteList
        notes={notesAll}
        changeArchiveHandler={changeArchiveHandler}
        deleteNoteHandler={deleteNoteHandler}
      />
      <h2>Arsip</h2>
      <NoteList
        notes={notesArchive}
        changeArchiveHandler={changeArchiveHandler}
        deleteNoteHandler={deleteNoteHandler}
      />
    </div>
  );
};

export default NoteBody;
