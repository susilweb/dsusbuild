import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
const Error404 = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Microsoft Azure | Microsoft Azure Cloud Services</title>
        <link rel="canonical" href="" />
        <meta
          name="description"
          content="Microsoft Azure is referred to cloud computing service owned and operated by Microsoft to manage hosted applications via its Microsoft-managed data centers."
        />
        <meta content="" name="keywords" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                404
                <br />
                page
              </h1>
              <h2>
                Are you seeking an upgrade from Dynamics NAV to Business
                Central, but unable to figure out where to start? Let us help
                you with a smoother and stress-free NAV upgrade process.
              </h2>
              <div>
                <div className="text-center text-lg-start">
                  <NavLink
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Home</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/assets/img/Microsoft-Dynamics-Partner-Leeds.png"
                alt="Microsoft-Dynamics-Partner-Leeds"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;
