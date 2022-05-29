import React from "react";

export default function Alert(props) {
  return (
    <div className="container" style={{height: "50px"}}>
    {props.alert && <div className={`alert alert-${props.alert.Type}`} role="alert">
      <strong>{props.alert.msg}</strong>
    </div>}
    </div>
  );
}
