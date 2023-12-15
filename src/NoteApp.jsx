import React, { useEffect, useState } from "react";
import { getInitialData } from "./utils";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

const NoteApp = () => {
  const [initNotes, setinitNotes] = useState(getInitialData());

  const [notes, setnotes] = useState(initNotes);

  const [inputSearch, setInputSearch] = useState("");

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setInputSearch(value);
  };

  useEffect(() => {
    if (inputSearch.length > 0) {
      setnotes(
        notes.filter((note) =>
          note.title.toLowerCase().includes(inputSearch.toLowerCase())
        )
      );
    } else {
      setnotes(initNotes)
    }
  }, [inputSearch]);

  const notesAll = notes.filter((note) => !note.archived);
  const notesArchive = notes.filter((note) => note.archived);

  return (
    <>
      <NoteHeader
        inputSearch={inputSearch}
        handleChangeSearch={handleChangeSearch}
      />

      <NoteBody notesAll={notesAll} notesArchive={notesArchive} />
    </>
  );
};

export default NoteApp;
