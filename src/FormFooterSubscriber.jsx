import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

//import HubspotForm from "react-hubspot-form";

const FormFooterSubscriber = () => {
  const [display, setDisplay] = useState("const2");
  const currentUrl = window.location.href;
  const history = useHistory();
  function sendEmail(e) {
    setDisplay("spinner-border");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cxxhqoq",
        "template_601riyc",
        e.target,
        "7Ae4EIVY__86NsTQD"
      )
      .then((res) => {
        console.log(res);
        // alert("success");

        history.push("/thank-you/email-subscriber/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="main-form-wrper">
        <form onSubmit={sendEmail}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="* Full Name"
              name="name"
              required
            />
            <input type="hidden" name="url" value={currentUrl} />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="* Work Email"
              name="email"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary fomr-submit">
            Subscribe Now
          </button>
          <div className={display} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormFooterSubscriber;
