import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useHistory, useLocation } from "react-router-dom";

//import HubspotForm from "react-hubspot-form";

const FormGuide = () => {
  const history = useHistory();
  const currentUrl = window.location.href;
  const [display, setDisplay] = useState("dspn");

  //console.log(pathname);

  function sendEmail(e) {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8nlbo04",
        "template_3b4uq29",
        e.target,
        "6bh9sGQpzDgqfRNHH"
      )
      .then((res) => {
        history.push("/guides/download/power-guide-pdf/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div
        className="modal fade form-main-model"
        id="powerBIModal"
        tabIndex="-1"
        aria-labelledby="powerBIModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="powerBIModalLabel">
                Download as PDF
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <p></p>
            </div>
            <p>Get the guide in PDF format right in your inbox!</p>
            <div className="modal-body">
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
                      pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="*Company Name"
                      name="company_name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="*Phone Number"
                      name="phone"
                      pattern="^\d{10,13}$"
                      required
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
                      I agree to the
                      <a
                        href="https://www.dynamicssquare.co.uk/privacy-policy/"
                        title="https://www.dynamicssquare.co.uk/privacy-policy/"
                        target="_blank"
                      >
                        {" "}
                        Privacy Policy{" "}
                      </a>
                      and
                      <a
                        href="https://www.dynamicssquare.co.uk/terms-of-use/"
                        title="https://www.dynamicssquare.co.uk/terms-of-use/"
                        target="_blank"
                      >
                        {" "}
                        Terms of Service{" "}
                      </a>
                      .
                    </label>
                  </div>

                  <div className="spiner-wrper">
                    <button
                      type="submit"
                      className="btn btn-primary fomr-submit"
                    >
                      Download Now
                    </button>
                    <div className={display} role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormGuide;
