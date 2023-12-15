import React, { useEffect, useState } from "react";
import { getInitialData } from "./utils";
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

const NoteApp = () => {
  return (
    <>
      <NoteHeader />

      <NoteBody />
    </>
  );
};

export default NoteApp;
