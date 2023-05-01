import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

function AuthBtn({ btnText, btnIcon, onClick, isDisabled = false }) {
  return (
    <div
      className="bg-white flex border border-[#CBD0D6] rounded-[0.625rem] h-[3.5rem] w-full sm:w-[30.375rem] items-center mt-[1.25rem] cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`w-[3.75rem] flex items-center justify-center h-full border-r ${
          isDisabled ? "grayscale" : ""
        }`}
      >
        <Image src={btnIcon} alt="gmail-icon" width={20} height={20} />
      </div>
      <div
        className={`w-full text-center text-[#1F2A3B] text-[1.125rem] ${
          isDisabled ? "text-[#A4ABB3]" : ""
        }`}
      >
        <p>{btnText}</p>
      </div>
    </div>
  );
}

AuthBtn.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnIcon: PropTypes.string.isRequired,
  path: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

AuthBtn.defaultProps = {
  isDisabled: false,
};

export default AuthBtn;
