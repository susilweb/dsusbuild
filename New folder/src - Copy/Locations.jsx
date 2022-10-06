import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
const Locations = () => {
  return (
    <>
      <Helmet>
      <title>Microsoft Dynamics 365 Partner By Location | Dynamics Square</title>
<meta name="description" content="Find a gold Mircosoft CRM partner or Microsoft Dynamics 365 partner by location like Leeds, Manchester, Liverpool, Bristol, Cardiff and much more."/>
<link rel="canonical" href="https://www.dynamicssquare.co.uk/location/" />
<meta property="og:locale" content="en_GB" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft Dynamics 365
                <br />
                Partner By Location
              </h1>
              <h2>Choose your location, we are here to help!</h2>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/assets/img/Microsoft-Dynamics-Partner-Bristol-Location-768x501.png"
                alt="Microsoft-Dynamics-Partner-Bristol-Location-768x501"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h3>Partner By Location</h3>
          </header>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>
                  Microsoft Dynamics
                  <br /> Partner Liverpool
                </h3>
                <div className="text-lg-center">
                  <NavLink
                    to="/location/microsoft-dynamics-partner-liverpool/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>Know More</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>
                  Microsoft Dynamics
                  <br /> Partner Bristol
                </h3>
                <div className="text-lg-center">
                  <NavLink
                    to="/location/microsoft-dynamics-partner-bristol/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>Know More</span>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>
                  Microsoft Dynamics
                  <br /> Partner Leeds
                </h3>
                <div className="text-lg-center">
                  <NavLink
                    to="/location/microsoft-dynamics-partner-leeds/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>Know More</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>
                  Microsoft Dynamics
                  <br /> Partner Edinburgh
                </h3>
                <div className="text-lg-center">
                  <NavLink
                    to="/location/microsoft-dynamics-partner-edinburgh/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>Know More</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="location-list-wrper">
                <h3>
                  Microsoft Dynamics
                  <br /> Partner Glasgow
                </h3>
                <div className="text-lg-center">
                  <NavLink
                    to="/location/microsoft-dynamics-partner-glasgow/"
                    className="btn-get-started btn-sm scrollto"
                  >
                    <span>Know More</span>
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

export default Locations;
