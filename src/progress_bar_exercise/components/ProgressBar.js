import React from "react";

import "./ProgressBar.scss";

const ProgressBar = () => {
  return (
    <div className="ProgressBar" data-testid="progress-bar">
      <div className="progress-bar">
        <div className="progress-bar-progress"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
