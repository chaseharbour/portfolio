import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import resumeStyles from "../styles/_contact.module.scss";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`
      )
      .join("&");
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        ...name,
      }),
    })
      .then((res) => {
        console.log(res);
        setSuccess(true);
      })
      .catch((error) => {
        setSuccess(false);
        alert(error);
      });
  };

  return (
    <form
      name="contact"
      method="POST"
      className={resumeStyles.form}
      onSubmit={handleSubmitForm}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">Name</label>
      <input
        className={resumeStyles.formName}
        type="text"
        name="name"
        placeholder="Name *"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        className={resumeStyles.formEmail}
        type="email"
        name="email"
        placeholder="Email *"
        required
      />
      <label htmlFor="subject">Subject</label>
      <input
        className={resumeStyles.formSubject}
        type="text"
        name="subject"
        placeholder="Subject"
      />
      <label htmlFor="message">Message</label>
      <textarea
        className={resumeStyles.formMessage}
        name="message"
        placeholder="Message..."
      />
      <SubmitButton success={success} submitted={submitted} />
    </form>
  );
};

export default Form;
