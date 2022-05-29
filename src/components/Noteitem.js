import React, { useContext } from "react";
import NoteContext from "../contexts/noteContext";

const Noteitem = (props) => {
    const {note, handleEditNoteBtn} = props;
    const {deleteNote} = useContext(NoteContext);
  return (
    <div className="col-md-3">
      <div className="card my-3" >
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
        </div>
        <div className="d-flex flex-row">
        <i className="fa-solid fa-trash-can mx-4" onClick={()=>{deleteNote(note._id)}}></i>
        <i className="fa-regular fa-pen-to-square mx-4" onClick={()=>handleEditNoteBtn(note)}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
