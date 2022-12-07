import React from "react";
import { Helmet } from "react-helmet";
import FooterHide from "./FooterHide";
import FormCampaign from "./FormCampaign";

const EmailWMS = () => {
  const inns ={
    display:'block',
    padding: '20px 20px',
    marginBottom:'10px',
    boxShadow:'rgb(0 0 0 / 15%) 0px 0px 10px 0px',
    borderRadius:'5px'
  };
const myhed ={

  fontSize: '16px',
  fontWight: 700,
};
const pg ={
  fontSize: '14px',
  lineheight: 1.6,
  marginBottom: 0,
    paddingBottom: 0
};
  return (
    <>
      <Helmet>
        <title>
        Enhance Your Warehouse Operations | Dynamics Square
        </title>
        <meta
          name="description"
          content="Modern warehouse management systems enable warehouse work operations and integrate with Dynamics 365 Business Central and Dynamics NAV functions."
        />
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/email-wms/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
      </Helmet>

      <section
        className="Solution-banner"
        style={{ overflow: "hidden",paddingBottom:'60px',marginBottom:'100px' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center nav-to">
              <h1>Enhance Your Warehouse Operations</h1>
              <p>Modern warehouse management systems enable warehouse work operations and integrate with Dynamics 365 Business Central and Dynamics NAV functions.<br /> <br />Some of the key highlighted points of Modern WMS are:</p>
              <div className="row">
                <div className="col-lg-6">
                  <dv style={inns}>
                    <h3 style={myhed}>Offline Functionality</h3>
                    <p style={pg}>Allows key work operations to be completed without  any network connection. The end result is a trustworthy solution.</p>
                  </dv>
                  <dv style={inns}>
                    <h3 style={myhed}>Easy to Customize</h3>
                    <p style={pg}>Mobile WMS is meant to be readily upgraded with custom functionality.All changes are made in Dynamics 365 BC/NAV and FO/AX.</p>
                  </dv>
                  
                </div>
                <div className="col-lg-6">
                <dv style={inns}>
                    <h3 style={myhed}>Integrates to Standard</h3>
                    <p style={pg}>Mobile WMS is fully integrated with standard Microsoft Dynamics 365 BC/NAV and SCM/FO/AX. All versions are compatible.</p>
                  </dv>
                
                  <dv style={inns}>
                    <h3 style={myhed}>User-Friendly Interface</h3>
                    <p style={pg}>Mobile WMS is designed with the goal of reducing "clicks" and irrelevant information. End users will spend little time training.</p>
                  </dv>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-5 align-self-center">
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

export default EmailWMS;
