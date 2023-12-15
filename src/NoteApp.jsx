// Import necessary modules and components
import React, { useEffect, useState } from "react";
import { getInitialData } from "./utils";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

// Define the NoteApp functional component
const NoteApp = () => {
  // State variables
  const [initNotes, setInitNotes] = useState(getInitialData()); // Initial notes
  const [notes, setNotes] = useState(initNotes); // Current notes
  const [inputSearch, setInputSearch] = useState(""); // Search input
  const [inputNote, setInputNote] = useState({
    // Input for new notes
    title: "",
    body: "",
  });

  // Helper functions
  const generateId = () => +new Date(); // Generate unique ID based on the current date
  const generateDate = () => new Date().toISOString(); // Generate the current date in ISO format

  const maxLength = 50; // Maximum length for input

  // Search functionality
  const handleChangeSearch = (event) => {
    const { value } = event.target;
    // Batasi panjang input search sesuai maxLength
    if (value.length <= maxLength) setInputSearch(value);
  };

  useEffect(() => {
    // Filter notes based on search input
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

  // Add new note functionality
  const InputNewNoteHandler = (event) => {
    const { name, value } = event.target;
    // Update state inputNote sesuai perubahan input
    setInputNote({
      ...inputNote,
      [name]: value,
    });
  };

  const addNoteHandler = (event) => {
    event.preventDefault();

    // Buat objek note baru dengan informasi yang diinput
    const noteObj = {
      id: generateId(),
      title: inputNote.title,
      body: inputNote.body,
      archived: false,
      createdAt: generateDate(),
    };

    // Update state notes dengan menambahkan note baru
    setNotes([...notes, noteObj]);

    // Reset inputNote setelah menambahkan note baru
    setInputNote({
      title: "",
      body: "",
    });
  };

  // Change the value of archive functionality
  const changeArchiveHandler = (noteID) => {
    // Update status archived pada note yang dipilih
    setNotes((prevNote) =>
      prevNote.map((note) =>
        note.id === noteID ? { ...note, archived: !note.archived } : note
      )
    );
  };

  // Delete note functionality
  const deleteNoteHandler = (noteID) => {
    // Hapus note dengan id yang sesuai dari state notes
    setNotes((prevNote) => prevNote.filter((note) => note.id !== noteID));
  };

  // Separate notes into archived and non-archived
  const notesAll = notes.filter((note) => !note.archived);
  const notesArchive = notes.filter((note) => note.archived);

  // Render NoteApp component
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

// Export NoteApp component
export default NoteApp;
