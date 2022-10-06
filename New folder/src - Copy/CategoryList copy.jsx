import React from "react";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet";

const CategoryList = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Azure IoT Edge | Cloud Intelligent Solutions</title>
        <link rel="canonical" href="" />
        <meta
          name="description"
          content="With Azure IoT Edge, optimize your device performance, measure your equipment to prevent downtime, enable your devices to respond promptly."
        />
        <meta content="" name="keywords" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Case Studies</h1>
              <h2>
                Check out some of our case studies to see how Dynamics 365 has
                made a difference for our clients.
              </h2>
              {/* <div>
                <div className="text-center text-lg-start">
                  <NavLink to="#" className="btn-get-started scrollto">
                    <span>Borwse List</span>
                  </NavLink>
                </div>
              </div> */}
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/assets/img/case-icons-list.png"
                alt="case-icons-list"
              />
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
                  Upgrade
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Implementation
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Support
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Top Trending
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settingss"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settingss"
                  aria-selected="false"
                >
                  Recommended
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
                    <div className="col-lg-4">
                      <div className="card card-custom-1">
                        <a href="#" className="over-ff">
                          <img
                            className="card-img-top"
                            src="/assets/img/dummy-1.png"
                            alt="Card image cap"
                          />
                          <span>
                            <i className="bi bi-play-circle-fill"></i>
                          </span>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">Introduction to Power BI</a>
                          </h5>
                          <p className="card-text">Speaker Name</p>
                          <div className="action-card">
                            <div className="left">10'January</div>
                            <div className="right">
                              <a href="#">
                                <i className="bi bi-download"></i>
                              </a>
                              <a href="#">
                                <i className="bi bi-share-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-custom-1">
                        <a href="#" className="over-ff">
                          <img
                            className="card-img-top"
                            src="/assets/img/dummy-1.png"
                            alt="Card image cap"
                          />
                          <span>
                            <i className="bi bi-play-circle-fill"></i>
                          </span>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">Introduction to Power BI</a>
                          </h5>
                          <p className="card-text">Speaker Name</p>
                          <div className="action-card">
                            <div className="left">10'January</div>
                            <div className="right">
                              <a href="#">
                                <i className="bi bi-download"></i>
                              </a>
                              <a href="#">
                                <i className="bi bi-share-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-custom-1">
                        <a href="#" className="over-ff">
                          <img
                            className="card-img-top"
                            src="/assets/img/dummy-1.png"
                            alt="Card image cap"
                          />
                          <span>
                            <i className="bi bi-play-circle-fill"></i>
                          </span>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">Introduction to Power BI</a>
                          </h5>
                          <p className="card-text">Speaker Name</p>
                          <div className="action-card">
                            <div className="left">10'January</div>
                            <div className="right">
                              <a href="#">
                                <i className="bi bi-download"></i>
                              </a>
                              <a href="#">
                                <i className="bi bi-share-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-custom-1">
                        <a href="#" className="over-ff">
                          <img
                            className="card-img-top"
                            src="/assets/img/dummy-1.png"
                            alt="Card image cap"
                          />
                          <span>
                            <i className="bi bi-play-circle-fill"></i>
                          </span>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">Introduction to Power BI</a>
                          </h5>
                          <p className="card-text">Speaker Name</p>
                          <div className="action-card">
                            <div className="left">10'January</div>
                            <div className="right">
                              <a href="#">
                                <i className="bi bi-download"></i>
                              </a>
                              <a href="#">
                                <i className="bi bi-share-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-custom-1">
                        <a href="#" className="over-ff">
                          <img
                            className="card-img-top"
                            src="/assets/img/dummy-1.png"
                            alt="Card image cap"
                          />
                          <span>
                            <i className="bi bi-play-circle-fill"></i>
                          </span>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">Introduction to Power BI</a>
                          </h5>
                          <p className="card-text">Speaker Name</p>
                          <div className="action-card">
                            <div className="left">10'January</div>
                            <div className="right">
                              <a href="#">
                                <i className="bi bi-download"></i>
                              </a>
                              <a href="#">
                                <i className="bi bi-share-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-custom-1">
                        <a href="#" className="over-ff">
                          <img
                            className="card-img-top"
                            src="/assets/img/dummy-1.png"
                            alt="Card image cap"
                          />
                          <span>
                            <i className="bi bi-play-circle-fill"></i>
                          </span>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">Introduction to Power BI</a>
                          </h5>
                          <p className="card-text">Speaker Name</p>
                          <div className="action-card">
                            <div className="left">10'January</div>
                            <div className="right">
                              <a href="#">
                                <i className="bi bi-download"></i>
                              </a>
                              <a href="#">
                                <i className="bi bi-share-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card card-custom-1">
                        <a href="#" className="over-ff">
                          <img
                            className="card-img-top"
                            src="/assets/img/dummy-1.png"
                            alt="Card image cap"
                          />
                          <span>
                            <i className="bi bi-play-circle-fill"></i>
                          </span>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">Transform Your Customer Experience</a>
                          </h5>
                          <p className="card-text">Speaker Name</p>
                          <div className="action-card">
                            <div className="left">10'January</div>
                            <div className="right">
                              <a href="#">
                                <i className="bi bi-download"></i>
                              </a>
                              <a href="#">
                                <i className="bi bi-share-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-custom-1">
                        <a href="#" className="over-ff">
                          <img
                            className="card-img-top"
                            src="/assets/img/dummy-1.png"
                            alt="Card image cap"
                          />
                          <span>
                            <i className="bi bi-play-circle-fill"></i>
                          </span>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">Transform Your Customer Experience</a>
                          </h5>
                          <p className="card-text">Speaker Name</p>
                          <div className="action-card">
                            <div className="left">10'January</div>
                            <div className="right">
                              <a href="#">
                                <i className="bi bi-download"></i>
                              </a>
                              <a href="#">
                                <i className="bi bi-share-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-custom-1">
                        <a href="#" className="over-ff">
                          <img
                            className="card-img-top"
                            src="/assets/img/dummy-1.png"
                            alt="Card image cap"
                          />
                          <span>
                            <i className="bi bi-play-circle-fill"></i>
                          </span>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">Transform Your Customer Experience</a>
                          </h5>
                          <p className="card-text">Speaker Name</p>
                          <div className="action-card">
                            <div className="left">10'January</div>
                            <div className="right">
                              <a href="#">
                                <i className="bi bi-download"></i>
                              </a>
                              <a href="#">
                                <i className="bi bi-share-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-custom-1">
                        <a href="#" className="over-ff">
                          <img
                            className="card-img-top"
                            src="/assets/img/dummy-1.png"
                            alt="Card image cap"
                          />
                          <span>
                            <i className="bi bi-play-circle-fill"></i>
                          </span>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">Transform Your Customer Experience</a>
                          </h5>
                          <p className="card-text">Speaker Name</p>
                          <div className="action-card">
                            <div className="left">10'January</div>
                            <div className="right">
                              <a href="#">
                                <i className="bi bi-download"></i>
                              </a>
                              <a href="#">
                                <i className="bi bi-share-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-custom-1">
                        <a href="#" className="over-ff">
                          <img
                            className="card-img-top"
                            src="/assets/img/dummy-1.png"
                            alt="Card image cap"
                          />
                          <span>
                            <i className="bi bi-play-circle-fill"></i>
                          </span>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">Introduction to Power BI</a>
                          </h5>
                          <p className="card-text">Speaker Name</p>
                          <div className="action-card">
                            <div className="left">10'January</div>
                            <div className="right">
                              <a href="#">
                                <i className="bi bi-download"></i>
                              </a>
                              <a href="#">
                                <i className="bi bi-share-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-custom-1">
                        <a href="#" className="over-ff">
                          <img
                            className="card-img-top"
                            src="/assets/img/dummy-1.png"
                            alt="Card image cap"
                          />
                          <span>
                            <i className="bi bi-play-circle-fill"></i>
                          </span>
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="#">Introduction to Power BI</a>
                          </h5>
                          <p className="card-text">Speaker Name</p>
                          <div className="action-card">
                            <div className="left">10'January</div>
                            <div className="right">
                              <a href="#">
                                <i className="bi bi-download"></i>
                              </a>
                              <a href="#">
                                <i className="bi bi-share-fill"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  3
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  4
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settingss"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  5
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryList;
