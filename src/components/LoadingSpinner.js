import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="spinnermain">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
