import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({title, buttonType, onClick, isDisabled}) => {
  return (
    <div data-testid="button-container" className="Button">
      <button
        data-testid="button"
        className={`button ${buttonType}`}
        onClick={onClick}
        disabled={isDisabled}>
        {title}
      </button>
    </div>
  );
};

Button.defaultProps = {
  buttonType: "start-button",
  onClick: null,
  isDisabled: false,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonType: PropTypes.oneOf(["start-button", "finish-button"]),
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default Button;
