import React, { forwardRef } from "react";

 const Modal = forwardRef((props, ref)=>{
  const {handleChange, updateNote } = props;
  return (
    <div>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
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
                    <input
                      type="text"
                      className="form-control"
                      id="newTitle"
                      name="newTitle"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="newTag" className="col-sm-2 col-form-label">
                    Tag
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="newTag"
                      name="newTag"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="newDescription"
                    className="col-sm-2 col-form-label"
                  >
                    Description
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="newDescription"
                      name="newDescription"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={updateNote}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Modal;
