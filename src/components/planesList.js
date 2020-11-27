import React from "react";
import { connect } from "react-redux";
import Plane from "./plane";
import selectPlanes from "../selectors/planes";

const PlanesLists = (props) => {  
  return (
    <div>
      {props.planes.map((plane) => (
        <Plane key={plane.model} {...plane} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {  
  return {
    planes: selectPlanes(state.planes, state.filters),
  };
};

export default connect(mapStateToProps)(PlanesLists);
