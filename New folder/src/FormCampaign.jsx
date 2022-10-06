import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

//import HubspotForm from "react-hubspot-form";

const FormCampaign = () => {
  const [display, setDisplay] = useState("const2");
  const history = useHistory();
  const currentUrl = window.location.href;
  function sendEmail(e) {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s5buvhl",
        "template_rutby6n",
        e.target,
        "LvW2gMtZd1FL0qnvG"
      )
      .then((res) => {
        //console.log(res);
        // alert("success");

        history.push("/thank-you/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
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
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="* Company Name"
            name="company_name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            placeholder="* Phone Number"
            name="phone"
            pattern="^\d{10,13}$"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="* How Can We Help You?"
            rows="3"
            name="message"
          ></textarea>
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
            <Link to="/privacy-policy/" title="privacy-policy" target="_blank">
              Privacy Policy&nbsp;
            </Link>
            and&nbsp;
            <Link to="/terms-of-use/" title="terms-of-use" target="_blank">
              Terms of Service
            </Link>
            .
          </label>
        </div>
        <div className="spiner-wrper">
          <button type="submit" className="btn btn-primary fomr-submit">
            Submit
          </button>
          <div className={display} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormCampaign;
