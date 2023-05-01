import React from "react";
import classNames from "classnames";
import InlineLoader from "@/icons/inline-loader.svg";
import PropTypes from "prop-types";

function PrimaryBtn({
  onClick,
  btnText,
  className,
  isLoading,
  disabled,
  type,
}) {
  const otherProps = {};

  if (type) {
    otherProps.type = type;
  }

  return (
    <button
      className={classNames(
        {
          "text-[#A4ABB3] bg-[#EBEDF0]": disabled,
          "text-white hover:text-[#E6E8EB] active:text-[#E6E8EB] bg-[#E81E61] hover:bg-[#CF1B57] active:bg-[#CF1B57]":
            !disabled,
        },
        `rounded-[10px] relative ${className}`
      )}
      disabled={disabled || isLoading}
      {...otherProps}
      onClick={onClick}
    >
      {isLoading && (
        <InlineLoader className="inline-block h-[3rem] w-[3rem] absolute top-[calc(50%_-_1.5rem)] left-[calc(50%_-_1.5rem)]" />
      )}
      <p
        className={classNames(
          {
            invisible: isLoading,
            visible: !isLoading,
          },
          "inline-block"
        )}
      >
        {btnText}
      </p>
    </button>
  );
}

PrimaryBtn.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  btnText: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

PrimaryBtn.defaultProps = {
  isLoading: false,
  disabled: false,
};

export default PrimaryBtn;
