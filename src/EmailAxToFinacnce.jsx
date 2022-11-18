import React from "react";
import { Helmet } from "react-helmet";
import FooterHide from "./FooterHide";
import FormCampaign from "./FormCampaign";

const EmailAxToFinacnce = () => {
  const mystyle = {
    marginBottom:'15px',paddingBottom:'0px',fontSize:'17px'
  };
  const mysize ={
    fontSize:'20px',color:'var(--color-red)'
  };
  return (
    <>
      <Helmet>
        <title>
        Moving from Dynamics AX to Dynamics 365 Finance | Dynamics Square
        </title>
        <meta
          name="description"
          content="Migrate from Dynamics AX to Dynamics 365 Finance and would want to ease and support your global expansion in terms of regulatory reporting and global"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/email-ax-to-finance/"
        />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <section
        className="Solution-banner"
        style={{ overflow: "hidden",paddingBottom:'60px',marginBottom:'100px' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center nav-to">
              <h1>Moving from Dynamics AX <br /> To Dynamics 365 Finance</h1>
              <p>Migrate from Dynamics AX to Dynamics 365 Finance to manage your complex financial operations using highly secure and cost-effective cloud technology solutions.</p>
              <p style={{marginBottom:'-20px'}}><b>Improvements you will gain by moving to D365 Finance :</b></p>
              <p style={mystyle}><i style={mysize} className="bi bi-arrow-right-circle-fill"></i> Access to unified data that breaks down the broad silos</p>
              <p style={mystyle}><i style={mysize} className="bi bi-arrow-right-circle-fill"></i> Financial process automation to save time and reduce errors</p>
              <p style={mystyle}><i style={mysize} className="bi bi-arrow-right-circle-fill"></i> Built-in AI and advanced predictive insights</p>
              <p style={mystyle}><i style={mysize} className="bi bi-arrow-right-circle-fill"></i> Flexible, pay-as-you-go model to predict spends and manage budgets efficiently</p>
              <p style={mystyle}><i style={mysize} className="bi bi-arrow-right-circle-fill"></i> Easy integrations and add-ons for industry-specific functionality</p>

            </div>
            <div className="col-lg-1  align-self-center"></div>
            <div className="col-lg-5  align-self-center">
              <div className="main-form-wrper main-form-wrper-nav">
                <h3>Fill in the form</h3>
                <FormCampaign />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterHide />
    </>
  );
};

export default EmailAxToFinacnce;
