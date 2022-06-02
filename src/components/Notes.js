import React, { useContext, useEffect, useRef, useState } from "react";
import AddNote from "./AddNote";
import NoteContext from "../contexts/noteContext";
import Noteitem from "./Noteitem";
import Modal from "./Modal";

const Notes = () => {
  const context = useContext(NoteContext);

  //Function for fetching notes fron db to show on the screen
  const { notes, fetchNotes, editNote } = context;
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  //Modal and update note related functions.
  const [note, setNote] = useState({
    id: "",
    newTitle: "",
    newTag: "",
    newDescription: ""
  });
  const ref = useRef(null);

  const handleEditNoteBtn = (currentNote) => {
    console.log("btn clicked");
    ref.current.click();
    setNote({
      id: currentNote._id,
      newTitle: currentNote.title,
      newTag: currentNote.tag,
      newDescription: currentNote.description
    });
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const updateNote = (e) => {
    e.preventDefault();
    editNote(note.id, note.newTitle, note.newTag, note.newDescription);
  };

  return (
    <>
      <AddNote />
      <Modal ref={ref} handleChange={handleChange} updateNote={updateNote} />
      {notes && (
        <div className="row my-3">
          <h2>Your notes</h2>
          {notes.map((note) => {
            return (
              <Noteitem
                key={`${note._id}`}
                note={note}
                handleEditNoteBtn={handleEditNoteBtn}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Notes;
