import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import resumeStyles from "../styles/_contact.module.scss";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const contactForm = e.target;
    const formData = new FormData(contactForm);

    setSubmitted(true);
    setLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        setLoading(false);
        setSuccess(false);
        alert(error);
      });
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className={resumeStyles.form}
      // action="/?success=true"
      onSubmit={handleSubmitForm}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">Name</label>
      <input
        className={resumeStyles.formName}
        type="text"
        name="name"
        placeholder="Name (required)"
        autoComplete="Name"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        className={resumeStyles.formEmail}
        type="email"
        name="email"
        placeholder="Email (required)"
        autoComplete="email"
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
