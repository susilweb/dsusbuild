import React from "react";
import { Helmet } from "react-helmet";
import FooterHide from "./FooterHide";
import FormCampaign from "./FormCampaign";
const DynamicsEmailerPowerBIGuide = () => {
  return (
    <>
      <Helmet>
        <title>
          Powerful Suite that specializes in the connectivity | Dynamics Square
        </title>
        <meta
          name="description"
          content="Powerful Suite that specializes in the connectivity, visualization, and analysis of data"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/emailer-power-bi/"
        />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <section
        className="Solution-banner hero-1 hero"
        style={{ overflow: "hidden" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center nav-to">
              <h1>
                Powerful Suite that specializes in the <span>Connectivity</span>
                , <span>Visualization</span>, and <span>Analysis</span> of data.
              </h1>
              <p>
                The platform itself is a set of apps and connectors that enable
                the creation of customized dashboards, the connection of data
                sources, the creation of data models, and the efficient
                presentation of data.
              </p>
              <p>
                <b>Benefits of Power BI:</b>
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>Extensive data connectivity</p>
                    </div>
                  </div>
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>Multimodal support for remote working</p>
                    </div>
                  </div>
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>Streamlines reporting & Cost savings</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>Highly secured cloud-based data</p>
                    </div>
                  </div>
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>User friendly dashboards and data analysis</p>
                    </div>
                  </div>
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>Turning valuable data into easy actions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1  align-self-center"></div>
            <div className="col-lg-5  align-self-center">
              <div className="main-form-wrper main-form-wrper-nav">
                <h3>Please fill the form to connect further</h3>
                <FormCampaign />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <FooterHide />
    </>
  );
};

export default DynamicsEmailerPowerBIGuide;
