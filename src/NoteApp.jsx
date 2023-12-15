import React, { useEffect, useState } from "react";
import { getInitialData } from "./utils";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

const NoteApp = () => {
  // define variable
  const [initNotes, setInitNotes] = useState(getInitialData());

  const [notes, setNotes] = useState(initNotes);

  const [inputSearch, setInputSearch] = useState("");

  const [inputNote, setInputNote] = useState({
    title: "",
    body: "",
  });

  const genereteId = () => +new Date();
  const generateDate = () => new Date().toISOString();

  const maxLength = 50;

  // search

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    if (value.length <= maxLength) setInputSearch(value);
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

  // add

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

    setNotes([...notes, noteObj]);
  };

  // change value archive

  const changeArchiveHandler = (noteID) => {
    setNotes((prevNote) =>
      prevNote.map((note) =>
        note.id === noteID ? { ...note, archived: !note.archived } : note
      )
    );
  };

  // delete

  const deleteNoteHandler = (noteID) => {
    setNotes((prevNote) => prevNote.filter((note) => note.id != noteID));
  };

  // split note

  const notesAll = notes.filter((note) => !note.archived);
  const notesArchive = notes.filter((note) => note.archived);

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
        changeArchiveHandler={changeArchiveHandler}
        deleteNoteHandler={deleteNoteHandler}
        maxLength={maxLength}
      />
    </>
  );
};

export default NoteApp;
