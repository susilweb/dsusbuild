import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Guides = () => {
  return (
    <>
      <Helmet>
        <title>Microsoft Dynamics Guides: Knowledge Hub from Dynamics Square</title>
        <meta
          name="description"
          content="Our guides provide in-depth analysis, emerging technology updates, advanced ERP and CRM solutions to help you grow."
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://www.dynamicssquare.com/guides/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Microsoft Dynamics Guides</h1>
              <p>Our guides provide in-depth analysis, emerging technology updates, advanced ERP and CRM solutions to help you grow.</p>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/assets/img/guide-main-banner.png" alt="guide-main-banner" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <header className="section-header" style={{paddingBottom:'70px'}}>
          <h2>Make your digital transformation journey a success</h2>
          </header>
          <div className="row">
            <div className="col-lg-3">
              <div
                className="nav flex-column nav-pills me-3 side-bar-common-tabs"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Latest Guides
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <NavLink
                          to="/guides/power-bi-guide-for-smb/"
                          className="over-ff text-center"
                        >
                          <img
                            className="card-img-top"
                            src="/assets/img/powerbi-guid-pic.png"
                            alt="Power-bi-guide"
                          />
                        </NavLink>
                        <div className="card-body">
                          <h5 className="card-title">
                            <NavLink to="/guides/power-bi-guide-for-smb/">
                            Power BI: The Definitive Guide For SMBs
                            </NavLink>
                          </h5>
                          <div className="btn-003 btn-009">
                            <NavLink
                              className="btn btn-sm btn-danger"
                              to="/guides/power-bi-guide-for-smb/"
                            >
                              View The Guide
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Guides;
