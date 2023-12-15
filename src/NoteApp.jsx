import React, { useEffect, useState } from "react";
import { getInitialData } from "./utils";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

const NoteApp = () => {

  const [notes, setNotes] = useState(getInitialData());
  return (
    <>
      <NoteHeader />

      <NoteBody notes={notes} />
    </>
  );
};

export default NoteApp;
