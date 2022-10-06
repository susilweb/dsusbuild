import React from "react";
import { ExternalLink } from "react-external-link";
const Blog = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="blogs-extra-title">
          <h3>Articles</h3>
        </div>

        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <ExternalLink
              rel=""
              href="https://www.dynamicssquare.com/blog/what-are-dynamics-365-for-sales-benefits-and-capabilities/"
              target="_self"
            >
              <img
                src="/assets/img/MicrosoftTeams-image-4.jpg"
                alt="imgs"
                width="200"
                height="104"
              />
            </ExternalLink>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <ExternalLink
                rel=""
                href="https://www.dynamicssquare.com/blog/what-are-dynamics-365-for-sales-benefits-and-capabilities/"
                target="_self"
              >
               What are the Benefits and Capabilities of Microsoft Dynamics 365 for Sales?
              </ExternalLink>
            </h4>
            <span>August 3, 2022</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <ExternalLink
              rel=""
              href="https://www.dynamicssquare.com/blog/microsoft-dynamics-nav-vs-business-central/"
              target="_self"
            >
              <img
                src="/assets/img/Microsoft-Dynamics-NAV-and-Business-Central.jpg"
                alt="imgs"
                width="200"
                height="104"
              />
            </ExternalLink>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <ExternalLink
                rel=""
                href="https://www.dynamicssquare.com/blog/microsoft-dynamics-nav-vs-business-central/"
                target="_self"
              >
               What is the Difference between Microsoft Dynamics NAV and Dynamics 365 Business Central?
              </ExternalLink>
            </h4>
            <span>June 28, 2022</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <ExternalLink
              rel=""
              href="https://www.dynamicssquare.com/blog/why-your-business-needs-power-bi/"
              target="_self"
            >
              <img
                src="/assets/img/Why-Your-Business-Needs-Power-B.jpg"
                alt="imgas"
                width="200"
                height="104"
              />
            </ExternalLink>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <ExternalLink
                rel=""
                href="https://www.dynamicssquare.com/blog/why-your-business-needs-power-bi/"
                target="_self"
              >
                Why Your Business Needs Power BI?
              </ExternalLink>
            </h4>
            <span>June 22, 2022</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <ExternalLink
              rel=""
              href="https://www.dynamicssquare.com/blog/how-to-generate-interactive-reports-in-power-bi/"
              target="_self"
            >
              <img
                src="/assets/img/Generate-Interactive-Reports-in-Power-BI.jpg"
                alt="imgs"
                width="200"
                height="104"
              />
            </ExternalLink>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <ExternalLink
                rel=""
                href="https://www.dynamicssquare.com/blog/how-to-generate-interactive-reports-in-power-bi/"
                target="_self"
              >
               How to Generate Interactive Reports in Power BI?
              </ExternalLink>
            </h4>
            <span>June 16, 2022</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
