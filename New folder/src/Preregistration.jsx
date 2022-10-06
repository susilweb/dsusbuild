import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import CustomFooter from "./CustomFooter";
import { ExternalLink } from "react-external-link";
const Preregistration = () => {
  const reloadCount = sessionStorage.getItem("reloadCount");
  if (reloadCount < 2) {
    sessionStorage.setItem("reloadCount", String(reloadCount + 1));
    console.log(reloadCount);
    window.location.reload();
  } else {
    sessionStorage.removeItem("reloadCount");
    console.log(reloadCount);
  }
  return (
    <>
      <Helmet>
        <title>Thank You Pre-registration | Dynamics Square</title>
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/thank-you-for-registration/"
        />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <section className="Solution-banner hero-1 hero hero-demo-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center text-center">
              <h1>You're All Set!</h1>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-sed-demp-wraper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-8  align-self-center">
              <div className="sedule-form">
                <h3>
                  You'll receive a copy of your eBook straight to your
                  registered email address.
                </h3>
              </div>
              <div className="row bg-3335">
                <div className="col-lg-6 align-self-center">
                  <div className="down-title">
                    <h4>
                      Why Should You Upgrade From Microsoft Dynamics Nav To
                      Dynamics 365 Business Central?
                    </h4>
                  </div>
                  <div className="text-center text-lg-start">
                        <ExternalLink 
                            href="/assets/pdf/Upgrade-from-Microsoft-Dynamics-NAV-to-Dynamics-365-Business-Central-EN-US.pdf" className="btn-get-started scrollto btn-mar">
                            <span>Download the Ebook </span>
                        </ExternalLink>
                        </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="down-title-img">
                    <img
                      src="/assets/img/Cover_Book_Moc.png"
                      alt="Cover_Book_Moc.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-wrper-erp">
        <div className="container">
          <div className="row p-4">
            <div className="col-lg-6 align-self-center">
              <img
                src="/assets/img/Dynamics-365-service.png"
                alt="Dynamics-365-service.png"
              />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="custom-wrper-erp-title">
                <h3>Upgrade to Dynamics 365 Business Central</h3>
                <p>
                  Willing to implement or upgrade Microsoft D365 Business
                  Central solution? Schedule your Business Central Demo today!
                </p>
              </div>
              <div className="text-lg-start">
                <NavLink
                  to="/products/dynamics-365-business-central/"
                  className="btn-get-started scrollto btn-mars"
                >
                  <span>Get Started </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
};

export default Preregistration;
