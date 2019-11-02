import React from "react";
import "./style.css";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ children, style, className }) {
  return (
    <div className={`container ${className ? className : ""} `} style={style}>
      {children}
    </div>
  );
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ children, style, className }) {
  return (
    <div className={`row ${className ? className : ""}`} style={style}>
      {children}
    </div>
  );
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, style, children, className }) {
  return (
    <div
      className={
        size && className
          ? size
              .split(" ")
              .map(size => "col-" + size + ` ${className}`)
              .join(" ")
          : size
          ? size
              .split(" ")
              .map(size => "col-" + size)
              .join(" ")
          : className
          ? className
          : ""
      }
      style={style}
    >
      {children}
    </div>
  );
}
