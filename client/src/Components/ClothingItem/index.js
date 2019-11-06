import React from "react";
import { MDBAnimation } from "mdbreact";
import "./style.css";

const ClothingItem = props => {
  return (
    <div>
      <MDBAnimation reveal type="flipInX" className="clothingItem"><img
        src={`/assets/${props.imageURL}`}
        className={props.className ? props.className : "fitContainer"}
        alt="Clothing item"
      ></img>
      </MDBAnimation>
    </div>
  );
};

export default ClothingItem;
