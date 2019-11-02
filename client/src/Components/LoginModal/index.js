import React from "react";

const LoginModal = props => {
  return (
    <>
      {props.auth === false
        ? alert("false!")
        : props.auth === true
        ? alert("true!")
        : ""}
    </>
  );
};

export default LoginModal;
