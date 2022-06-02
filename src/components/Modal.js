import React, {forwardRef} from "react";

const Modal = (props, ref) => {
  const { handleChange, updateNote } = props;
  return (
    <div>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
          <div className="row mb-3">
            <label htmlFor="newTitle" className="col-sm-2 col-form-label">
              Title
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="newTitle" name='newTitle' onChange={handleChange}/>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="newTag" className="col-sm-2 col-form-label">
              Tag
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="newTag" name='newTag' onChange={handleChange} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="newDescription" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="newDescription" name='newDescription' onChange={handleChange} />
            </div>
          </div>
        </form>
            </div>
            <div className="modal-footer">
              <button
                type="button" 
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={updateNote}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Modal);
