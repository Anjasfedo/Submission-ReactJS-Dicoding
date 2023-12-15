import React from "react";
import { showFormattedDate } from "../utils";
import NoteButton from "./NoteButton";

const NoteItem = ({ id, title, body, createdAt, changeArchiveHandler }) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <NoteButton id={id} changeArchiveHandler={changeArchiveHandler} />
    </div>
  );
};

export default NoteItem;
