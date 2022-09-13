import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
const ThankYouWebinar = () => {
  return (
    <>
      <Helmet>
      <title>Thank You for Webinar Registration - Dynamics Square</title>
<meta name="description" content="We will send you a confirmation email shortly, with details on how to join."/>
<link rel="canonical" href="https://www.dynamicssquare.com/thanks-webinar-registration/" />
<meta property="og:locale" content="en_US" />
      </Helmet>
      <section className="Solution-banner hero-1 hero custom-pd-4">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1>
              Thanks For Registering<br /> To Our Webinar!
              </h1>
              <p>
              We will send you a confirmation email shortly, with details on how to join.
              </p>
              <p><b>Until then, take a look at our:</b></p>
              <p><ExternalLink href="https://www.dynamicssquare.com/blog/" target="_blank" rel="noopener">Resources</ExternalLink> | <NavLink to="/webinars/" target="_blank" rel="noopener">Previous Webinars</NavLink></p><br />
              <div className="text-center">
                <div className="">
                  <NavLink
                    to="/"
                    className="btn-get-started scrollto"
                  >
                    <span>Back to Home</span>
                  </NavLink>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
      
    </>
  );
};

export default ThankYouWebinar;
