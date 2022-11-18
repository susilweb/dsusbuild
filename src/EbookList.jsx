import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const EbookList = () => {
  return (
    <>
      <Helmet>
        <title>Ebook | Dynamics Square</title>
        <meta
          name="description"
          content="Ebook Ultimate Guide to Choose the Right ERP For Your Business Learn More +"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://www.dynamicssquare.com/ebook/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>EBook</h1>
              <p>
                Explore our eBooks to gain insights about how Microsoft Business
                Applications are transforming businesses to a new level.
              </p>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/assets/img/Cover_Book_Moc.png" alt="Cover_Book_Moc" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
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
                  Latest Ebooks
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
                          to="/ebook/dynamics-365-finance/"
                          className="over-ff text-center"
                        >
                          <img
                            className="card-img-top"
                            src="/assets/img/nav-guide-pic.png"
                            alt="ebooh-img"
                          />
                        </NavLink>
                        <div className="card-body">
                          <h5 className="card-title">
                            <NavLink to="/ebook/dynamics-365-finance/">
                            The Extensive Guide to Dynamics 365 Finance
                            </NavLink>
                          </h5>
                          <div className="btn-003 btn-009">
                            <NavLink
                              className="btn btn-sm btn-danger"
                              to="/ebook/dynamics-365-finance/"
                            >
                              Read Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <NavLink
                          to="/ebook/upgrade-nav-to-business-central/"
                          className="over-ff text-center"
                        >
                          <img
                            className="card-img-top"
                            src="/assets/img/Ebook-Nav-to-BC.png"
                            alt="ebooh-img"
                          />
                        </NavLink>
                        <div className="card-body">
                          <h5 className="card-title">
                            <NavLink to="/ebook/upgrade-nav-to-business-central/">
                              Upgrade From Dynamics NAV to Business Central
                            </NavLink>
                          </h5>
                          <div className="btn-003 btn-009">
                            <NavLink
                              className="btn btn-sm btn-danger"
                              to="/ebook/upgrade-nav-to-business-central/"
                            >
                              Read Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="card card-custom-1 p-3">
                        <NavLink
                          to="/ebook/how-to-choose-right-erp/"
                          className="over-ff"
                        >
                          <img
                            className="card-img-top"
                            src="/assets/img/ebooh-img.png"
                            alt="ebooh-img"
                          />
                        </NavLink>
                        <div className="card-body">
                          <h5 className="card-title">
                            <NavLink to="/ebook/how-to-choose-right-erp/">
                              Ultimate Guide to Choose the Right ERP For Your
                              Business
                            </NavLink>
                          </h5>
                          <div className="btn-003 btn-009">
                            <NavLink
                              className="btn btn-sm btn-danger"
                              to="/ebook/how-to-choose-right-erp/"
                            >
                              Read Now
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

export default EbookList;
