import React from "react";
import { Helmet } from "react-helmet";
import FooterHide from "./FooterHide";
import FormCampaign from "./FormCampaign";

const EmailGpToBc = () => {
  const mystyle = {
    marginBottom:'15px',paddingBottom:'0px',fontSize:'17px'
  };
  return (
    <>
      <Helmet>
        <title>
        Migrate your Dynamics GP to Business Central | Dynamics Square
        </title>
        <meta
          name="description"
          content="If you want to - anticipate trends, drive meaningful change, and out-think your competition, migrate now. Intelligent Cloud mobilizes your organization with a next-generation cloud operating model that helps increase velocity and control."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/email-gp-to-bc/"
        />
        <meta property="og:locale" content="en_GB" />
      </Helmet>

      <section
        className="Solution-banner"
        style={{ overflow: "hidden",paddingBottom:'60px',marginBottom:'100px' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center nav-to">
              <h1>Migrate your Dynamics GP to Business Central</h1>
              <p>So your company has decided to switch from Dynamics GP to Dynamics 365 Business Central. This is where <b style={{color:'var(--color-grey)'}}>Dynamics</b> <b style={{color:'var(--color-red)'}}>Square</b> can assist your business. It is safe to say that not all ERP migrations are challenging. However, for most businesses, it is critical to make the shift to digital transformation, which will allow you to increase productivity and sustainability.</p>
              <p style={{marginBottom:'-20px'}}><b>What you will gain from this migartion?</b></p>
              <p style={mystyle}>✔️ Streamlining operations, improving efficiency, and reducing costs.</p>
              <p style={mystyle}>✔️ Enterprise-grade apps for process optimization and sales force management. </p>
              <p style={mystyle}>✔️ Business function automation along with increased security and privacy.</p>
              <p style={mystyle}>✔️ A cloud-based ERP that you can access from anywhere, any device.</p>
            </div>
            <div className="col-lg-1  align-self-center"></div>
            <div className="col-lg-5  align-self-center">
              <div className="main-form-wrper main-form-wrper-nav">
                <h3 style={{fontSize:'18px'}}>Interested in switching from Dynamics GP to Business Central? Then, contact us by filling out the form.</h3>
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

export default EmailGpToBc;
