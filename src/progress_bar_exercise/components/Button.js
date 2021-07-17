import React from "react";

import "./Button.scss";

const Button = () => {
  return (
    <div className="Button" data-testid="button-container">
      <button className="button">START REQUEST</button>
    </div>
  );
};

export default Button;
