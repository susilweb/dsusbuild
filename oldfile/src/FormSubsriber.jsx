import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

//import HubspotForm from "react-hubspot-form";

const FormSubsriber = () => {
  const [display, setDisplay] = useState("const2");
  const history = useHistory();
  function sendEmail(e) {
    setDisplay("spinner-border");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jzvnjn9",
        "template_42oj655",
        e.target,
        "5cRmnYTfhzKZ7GDf0"
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
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="* Company Name"
              name="company_name"
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              checked
              readOnly
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree to the&nbsp;
              <Link
                to="/privacy-policy/"
                title="privacy-policy"
                target="_blank"
              >
                Privacy Policy&nbsp;
              </Link>
              and&nbsp;
              <Link to="/terms-of-use/" title="terms-of-use" target="_blank">
                Terms of Service
              </Link>{" "}
              & give consent to receive creatives, newsletters and other
              updates.
            </label>
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

export default FormSubsriber;
