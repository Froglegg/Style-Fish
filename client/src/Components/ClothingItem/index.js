import React from "react";
import "./style.css";
const ClothingItem = props => {
  return (
    <div>
      <img
        src={`/assets/${props.imageURL}`}
        className={props.className ? props.className : "fitContainer"}
        alt="Clothing item"
      ></img>
    </div>
  );
};

export default ClothingItem;
