import React, {useContext, useState} from 'react'
import NoteContext from '../contexts/noteContext'


const AddNote = () => {
    const{addNote} = useContext(NoteContext);
    const [note, setNote] = useState({title: '', description: '', tag: ''})
    const addNoteBtn = (e)=>{
        e.preventDefault();
        addNote(note.title,note.tag, note.description);
    }

    const handleChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value });
    }

  return (
    <div>
      <div className="container my-3" style={{width: '40rem'}}>
        <h1>Create a Note</h1>
        <form>
          <div className="row mb-3">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Title
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="title" name='title' onChange={handleChange}/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="tag" className="col-sm-2 col-form-label">
              Tag
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="tag" name='tag' onChange={handleChange} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="description" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="description" name='description' onChange={handleChange} />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary mx-auto" onClick={addNoteBtn}>
            Add Note
          </button>
        </form>
        </div>
    </div>
  )
}

export default AddNote
