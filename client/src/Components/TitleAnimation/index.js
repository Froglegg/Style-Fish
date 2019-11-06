import React from "react";
import { MDBAnimation } from "mdbreact";

const Title = ({children}) => {
    return (
        <MDBAnimation type="zoomIn" className="title">
        {children}
        </MDBAnimation>
    );
};

export default Title;