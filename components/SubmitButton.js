import React from "react";
import resumeStyles from "../styles/_contact.module.scss";

const SubmitButton = ({ submitted, loading, success }) => {
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
        loading ? (
          "Loading"
        ) : success ? (
          <img src="/icons/success.svg" alt="Success checkmark icon"></img>
        ) : (
          <img src="/icons/error.svg" alt="Error exclamation icon"></img>
        )
      ) : (
        "Send"
      )}
    </button>
  );
};

export default SubmitButton;
