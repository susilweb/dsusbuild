import React from "react";
import { Helmet } from "react-helmet";
import FooterHide from "./FooterHide";
import FormCampaign from "./FormCampaign";
const DynamicsEmailerCRM = () => {
  return (
    <>
      <Helmet>
        <title>
          Drive sales higher, excellent customer service & improve marketing
          capabilities | Dynamics Square
        </title>
        <meta
          name="description"
          content="Drive sales higher, excellent customer service & improve marketing capabilities"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/email-dynamics365-crm/"
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
                Drive sales higher, excellent customer service & improve
                marketing capabilities
              </h1>
              <p>
                We help organizations to deepen their customer relationships,
                empower their sales and marketing teams with built-in
                intelligence to assure data analysis, and efficiently manage
                campaigns using Microsoft Dynamics 365 Customer Engagement
                (CRM).
              </p>
              <p>
                <b>
                  Benefits of Microsoft Dynamics 365 Customer Engagement(CRM):
                </b>
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                        Build Customer Relationships: Store, access, and
                        streamline your customers' data.
                      </p>
                    </div>
                  </div>
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                        Drive Predictive Approach: Leverage data analytics
                        capabilities to analyze customer data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                        Remain Productive: Enable enterprises to access
                        customers' data anywhere using any device.
                      </p>
                    </div>
                  </div>
                  <div className="ineer-div">
                    <div className="left">
                      <i class="bi bi-check2-all"></i>
                    </div>
                    <div className="right">
                      <p>
                        Drive Personalized Experienced: Understand & serve
                        customers a personalized solution as per need.
                      </p>
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

export default DynamicsEmailerCRM;
