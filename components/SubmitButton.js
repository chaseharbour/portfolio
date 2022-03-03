import React from "react";
import resumeStyles from "../styles/_contact.module.scss";
import successIcon from "../public/icons/success.svg";
import errorIcon from "../public/icons/error.svg";

const SubmitButton = ({ submitted, success }) => {
  return (
    <button
      className={
        submitted
          ? success
            ? resumeStyles.btnSuccess
            : resumeStyles.btnError
          : resumeStyles.btn
      }
      type="submit"
      disabled={success}
    >
      {submitted ? (
        success ? (
          <img src={successIcon} alt="Success checkmark icon"></img>
        ) : (
          <img src={errorIcon} alt="Error exclamation icon"></img>
        )
      ) : (
        "Send"
      )}
    </button>
  );
};

export default SubmitButton;
