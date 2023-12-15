import React, { useEffect, useState } from "react";
import { getInitialData, showFormattedDate } from "./utils";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

const NoteApp = () => {
  const [initNotes, setInitNotes] = useState(getInitialData());

  const [notes, setNotes] = useState(initNotes);

  const [inputSearch, setInputSearch] = useState("");

  const genereteId = () => +new Date();
  const generateDate = () => new Date().toISOString();

  const [inputNote, setInputNote] = useState({
    title: "",
    body: "",
  });

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setInputSearch(value);
  };

  useEffect(() => {
    if (inputSearch.length > 0) {
      setNotes(
        notes.filter((note) =>
          note.title.toLowerCase().includes(inputSearch.toLowerCase())
        )
      );
    } else {
      setNotes(initNotes);
    }
  }, [inputSearch]);

  const notesAll = notes.filter((note) => !note.archived);
  const notesArchive = notes.filter((note) => note.archived);

  const InputNewNoteHandler = (event) => {
    const { name, value } = event.target;
    setInputNote({
      ...inputNote,
      [name]: value,
    });
  };

  const addNoteHandler = (event) => {
    event.preventDefault();

    const noteObj = {
      id: genereteId(),
      title: inputNote.title,
      body: inputNote.body,
      archived: false,
      createdAt: generateDate(),
    };
    console.log(noteObj);

    setNotes([...notes, noteObj]);
  };

  return (
    <>
      <NoteHeader
        inputSearch={inputSearch}
        handleChangeSearch={handleChangeSearch}
      />

      <NoteBody
        notesAll={notesAll}
        notesArchive={notesArchive}
        InputNewNoteHandler={InputNewNoteHandler}
        inputNote={inputNote}
        addNoteHandler={addNoteHandler}
      />
    </>
  );
};

export default NoteApp;
