import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const allNotes = [];

  const [notes, setNote] = useState(allNotes);

  // Fetch note functionality ot fetch all notes of a user.
  const fetchNotes = async () => {
    const options = {
      method: "GET",
      headers: {
        "Auth-Token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5MDZkOTVjMWVjNTYwNjlmOTlmNzBhIn0sImlhdCI6MTY1MzYzMjQwNX0.4GRFo1Z7ytzvl1St_i1NL5xs0_GKCabdeYvMehj8C8E",
      },
    };

    const response = await fetch(`${host}/api/notes/getNotes`, options);
    const json = await response.json();
    setNote(json);
  };

  // Add Note functionality when clicked addNote
  const addNote = async (title, tag, description) => {
    const options = {
      method: "POST",
      headers: {
        "Auth-Token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5MDZkOTVjMWVjNTYwNjlmOTlmNzBhIn0sImlhdCI6MTY1MzYzMjQwNX0.4GRFo1Z7ytzvl1St_i1NL5xs0_GKCabdeYvMehj8C8E",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ title, description, tag }),
    };

    const response = await fetch(`${host}/api/notes/addNote`, options);
    response.json();

    fetchNotes();
  };

  // Delete note functionality when deleteBtn is clicked.
  const deleteNote = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Auth-Token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5MDZkOTVjMWVjNTYwNjlmOTlmNzBhIn0sImlhdCI6MTY1MzYzMjQwNX0.4GRFo1Z7ytzvl1St_i1NL5xs0_GKCabdeYvMehj8C8E",
      },
    };

    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, options);
    const json =response.json();
    console.log(json);

    const newNotes=notes.filter((note)=>{
      return note._id !== id;
    })

    setNote(newNotes);
  };

  // Editing a note functionality when clicked editNote.
  const editNote = async (id,title, tag, description) => {
    const options = {
      method: "PUT",
      headers: {
        "Auth-Token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI5MDZkOTVjMWVjNTYwNjlmOTlmNzBhIn0sImlhdCI6MTY1MzYzMjQwNX0.4GRFo1Z7ytzvl1St_i1NL5xs0_GKCabdeYvMehj8C8E",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ title, description, tag }),
    };

    const response = await fetch(`${host}/api/notes/updateNote/${id}`, options);
    response.json();

    fetchNotes();
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
