import React from "react";
import { Helmet } from "react-helmet";
import FooterHide from "./FooterHide";
import FormSubsriber from "./FormSubsriber";
const SubscribeUpdates = () => {
  return (
    <>
      <Helmet>
      <title>Subscribe Updates - Dynamics Square</title>
<meta name="description" content="Subscribe Now For Latest Updates Stay Updated With upcoming insights, Offers and More."/>
<link rel="canonical" href="https://www.dynamicssquare.com/subscribe-updates/" />
<meta property="og:locale" content="en_US" />
      </Helmet>
     
      <section className="Solution-banner hero hero-demo-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center text-center">
              <h1>
              Subscribe Now For Latest Updates
              </h1>
              <div>

              </div>
            </div>
          </div>
        </div>
      </section>

         
      <section className="custom-sed-demp-wraper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8  align-self-center">
           
              <div className="sedule-form">
              <h3>Stay Updated With upcoming insights, Offers and More</h3>
                <FormSubsriber />
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <FooterHide />
      
    </>
  );
};

export default SubscribeUpdates;
