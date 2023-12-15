import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

const NoteBody = () => {
  return (
    <div className="note-app__body">
      <NoteInput />
      <NoteList />
    </div>
  );
};

export default NoteBody;
