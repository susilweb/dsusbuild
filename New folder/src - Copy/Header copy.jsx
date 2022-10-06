import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.js";
const Header = () => {
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 250) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <>
      <ScrollToTop smooth />
      <header id="header" className={fix ? "header fixed-top" : "header"}>
        <div className="container-fluid  d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo d-flex align-items-center">
            <img src="/assets/img/dynamicssqure-logo.svg" alt="logo" />
          </NavLink>
          <nav id="navbar" className="navbar">
            <ul>
              <li className="dropdown">
                <NavLink to="#">
                  <span>Solutions</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li className="dropdown">
                    <NavLink to="/products/microsoft-dynamics-365/">
                      <span>Microsoft Dynamics 365</span>
                      <i className="bi bi-chevron-right"></i>
                    </NavLink>
                    <ul>
                      {/* <li className="dropdown">
                        <NavLink to="/products/dynamics-365-business-central/">
                          <span>Business Central</span>
                          <i className="bi bi-chevron-right"></i>
                        </NavLink>
                        <ul>
                          <li>
                            <NavLink to="/dynamics-365-business-central-implementation/">
                              Implementation
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/dynamics-365-business-central-upgrade/">
                              Upgrade
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/dynamics-365-business-central-support/">
                              Support
                            </NavLink>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <NavLink to="/products/dynamics-365-business-central/">
                          Business Central
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-dynamics-365-finance/">
                          Finance
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/dynamics-365-supply-chain-management/">
                          Supply Chain Management
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-dynamics-365-sales/">
                          Sales
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-dynamics-365-customer-service/">
                          Customer Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-dynamics-365-field-service/">
                          Field Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/dynamics-365-project-operations/">
                          Project Operations
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-dynamics-365-marketing/">
                          Marketing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-dynamics-365-commerce/">
                          Commerce
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/dynamics-365-human-resources/">
                          Human Resource
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="/products/azure-iot-internet-of-things/">
                      <span>Azure IoT</span>
                      <i className="bi bi-chevron-right"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="/products/azure-iot-hub/">IoT Hub</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/azure-iot-central/">
                          IoT Central
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/azure-sphere/">
                          Azure Sphere
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/azure-iot-edge/">
                          IoT Edge
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/azure-digital-twins/">
                          Digital Twins
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/azure-machine-learning/">
                          Machine Learning
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="/products/microsoft-power-platform/">
                      <span>Power Platform</span>
                      <i className="bi bi-chevron-right"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="/products/microsoft-power-bi/">
                          Power BI
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-power-apps/">
                          Power Apps
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-power-automate/">
                          Power Automate
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-power-virtual-agents/">
                          Power Virtual Agents
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <NavLink to="#">
                      <span>More Solutions</span>
                      <i className="bi bi-chevron-right"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="/products/microsoft-dynamics-erp/">
                          ERP Solutions (NAV/AX/GP)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-dynamics-crm/">
                          CRM Solutions
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-azure/">
                          Microsoft Azure
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-dynamics-365-mixed-reality/">
                          Mixed Reality
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/products/microsoft-dynamics-365-ai/">
                          Artificial Intelligence (AI)
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="#">
                      <span>Must Read</span>
                      <i className="bi bi-chevron-right"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="/microsoft-dynamics-365-cloud-vs-on-premise/">
                          Cloud vs On-premise Comparison
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/d365-business-central-vs-d365-finance/">
                          Business Central vs Finance
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/why-choose-microsoft-dynamics-365-business-central/">
                          Why Choose D365 Business Central?
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/10-reasons-to-choose-dynamics-365/">
                          Why Migrate to Dynamics 365?
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/advantages-capabilities/">
                          Business Central - Advantages & Capabilities
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/dynamics-365-finance-operations-vs-sap-erp/">
                          Dynamics 365 Finance & Operations vs SAP ERP
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/dynamics-365-business-central-vs-sap-business-one/">
                          Dynamics 365 Business Central vs SAP Business One
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/dynamics-365-business-central-vs-netsuite/">
                          Dynamics 365 Business Central vs. NetSuite
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="/industries/">
                  <span>Industries</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/industries/startup/">Startup</NavLink>
                  </li>
                  <li>
                    <NavLink to="/industries/microsoft-cloud-for-nonprofit/">
                      Not for Profit (Microsoft Cloud)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/industries/ecommerce/">Ecommerce</NavLink>
                  </li>
                  <li>
                    <NavLink to="/industries/microsoft-cloud-for-manufacturing/">
                      Manufacturing (Microsoft Cloud)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/industries/professional-services/">
                      Professional Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/industries/food-and-beverages/">
                      Food & Beverages
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="/our-services/">
                  <span>Our Services</span>
                  <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/our-services/dynamics-365-implementation-services/">
                      Implementation Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/our-services/dynamics-365-support-services/">
                      Support Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/our-services/dynamics-365-upgrade-services/">
                      Upgrade Services
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="#">
                  <span>Company</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/about-us/">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/why-us/">Why Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/partner/">Partner</NavLink>
                  </li>
                  <li>
                    <NavLink to="/career/">Career</NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="#">
                  <span>Resources</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/blogs/">Blogs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ebook/">eBook</NavLink>
                  </li>

                  <li>
                    <NavLink to="/case-studies/">Case Studies</NavLink>
                  </li>
                  <li>
                    <NavLink to="/webinars/">Webinars</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink className="nav-link" to="/contact-us/">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink className="getstarted" to="#">
                  0207 193 2502
                </NavLink>
              </li>
            </ul>
            <a
              href="#offcanvasWithBothOptions"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasWithBothOptions"
            >
              <i className="bi bi-list mobile-nav-toggle"></i>
            </a>
            <div className="mobile-new-nav">
              <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabIndex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div className="offcanvas-header">
                  <NavLink
                    to="/react-ds/"
                    className="logo d-flex align-items-center"
                  >
                    <img src="/assets/img/dynamicssqure-logo.svg" alt="logo" />
                  </NavLink>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="accordion" id="mobile-toggle-nav">
                    <div className="accordion-item">
                      <div className="accordion-header" id="list-1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <NavLink to="#">
                            <span>Solutions</span>
                          </NavLink>
                        </button>
                      </div>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="list-1"
                        data-bs-parent="#mobile-toggle-nav"
                      >
                        <div className="accordion-body">
                          <div className="iner-list">
                            <ul>
                              <li>
                                <NavLink to="/products/microsoft-dynamics-365/">
                                  <span>Microsoft Dynamics 365</span>
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/products/dynamics-365-business-central/">
                                  Business Central
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/products/microsoft-dynamics-365-finance/">
                                  Finance
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/products/dynamics-365-supply-chain-management/">
                                  Supply Chain Management
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/products/microsoft-dynamics-365-sales/">
                                  Sales
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/products/microsoft-dynamics-365-customer-service/">
                                  Customer Service
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/products/microsoft-dynamics-365-field-service/">
                                  Field Service
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/products/dynamics-365-project-operations/">
                                  Project Operations
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/products/microsoft-dynamics-365-marketing/">
                                  Marketing
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/products/microsoft-dynamics-365-commerce/">
                                  Commerce
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/products/dynamics-365-human-resources/">
                                  Human Resource
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/products/azure-iot-internet-of-things/">
                                  <span>Azure IoT</span>
                                </NavLink>
                                <ul>
                                  <li>
                                    <NavLink to="/products/azure-iot-hub/">
                                      IoT Hub
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/products/azure-iot-central/">
                                      IoT Central
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/products/azure-sphere/">
                                      Azure Sphere
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/azure-iot-edge">
                                      IoT Edge
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/products/azure-digital-twins/">
                                      Digital Twins
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/products/azure-machine-learning/">
                                      Machine Learning
                                    </NavLink>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <NavLink to="/products/microsoft-power-platform/">
                                  <span>Power Platform</span>
                                </NavLink>
                                <ul>
                                  <li>
                                    <NavLink to="/products/microsoft-power-bi/">
                                      Power BI
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/products/microsoft-power-apps/">
                                      Power Apps
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/products/microsoft-power-automate/">
                                      Power Automate
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/products/microsoft-power-virtual-agents/">
                                      Power Virtual Agents
                                    </NavLink>
                                  </li>
                                </ul>
                              </li>

                              <li>
                                <NavLink to="#">
                                  <span>More Solutions</span>
                                </NavLink>
                                <ul>
                                  <li>
                                    <NavLink to="/products/microsoft-dynamics-erp/">
                                      ERP Solutions (NAV/AX/GP)
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/products/microsoft-dynamics-crm/">
                                      CRM Solutions
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/products/microsoft-azure/">
                                      Microsoft Azure
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/products/microsoft-dynamics-365-mixed-reality/">
                                      Mixed Reality
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/products/microsoft-dynamics-365-ai/">
                                      Artificial Intelligence (AI)
                                    </NavLink>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <NavLink to="#">
                                  <span>Must Read</span>
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="/microsoft-dynamics-365-cloud-vs-on-premise/">
                                  Cloud vs On-premise Comparison
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/d365-business-central-vs-d365-finance/">
                                  Business Central vs Finance
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/why-choose-microsoft-dynamics-365-business-central/">
                                  Why Choose D365 Business Central?
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/10-reasons-to-choose-dynamics-365/">
                                  Why Migrate to Dynamics 365?
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/advantages-capabilities/">
                                  Business Central - Advantages & Capabilities
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/dynamics-365-finance-operations-vs-sap-erp/">
                                  Dynamics 365 Finance & Operations vs SAP ERP
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/dynamics-365-business-central-vs-sap-business-one/">
                                  Dynamics 365 Business Central vs SAP Business
                                  One
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/dynamics-365-business-central-vs-netsuite">
                                  Dynamics 365 Business Central vs. NetSuite
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="list-2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <NavLink to="/industries/">
                            <span>Industries</span>
                          </NavLink>
                        </button>
                      </div>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="list-2"
                        data-bs-parent="#mobile-toggle-nav"
                      >
                        <div className="accordion-body">
                          <div className="iner-list">
                            <ul>
                              <li>
                                <NavLink to="/industries/startup/">
                                  Startup
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/industries/microsoft-cloud-for-nonprofit/">
                                  Not for Profit (Microsoft Cloud)
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/industries/ecommerce/">
                                  Ecommerce
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/industries/microsoft-cloud-for-manufacturing/">
                                  Manufacturing (Microsoft Cloud)
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/industries/professional-services/">
                                  Professional Services
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/industries/food-and-beverages/">
                                  Food & Beverages
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="list-3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <NavLink to="#">
                            <span>Our Services</span>
                          </NavLink>
                        </button>
                      </div>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="list-3"
                        data-bs-parent="#mobile-toggle-nav"
                      >
                        <div className="accordion-body">
                          <div className="iner-list">
                            <ul>
                              <li>
                                <NavLink to="/our-services/dynamics-365-implementation-services/">
                                  Implementation Services
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/our-services/dynamics-365-support-services/">
                                  Support Services
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/our-services/dynamics-365-upgrade-services/">
                                  Upgrade Services
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="list-4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefour"
                          aria-expanded="false"
                          aria-controls="collapsefour"
                        >
                          <NavLink to="#">
                            <span>Company</span>
                          </NavLink>
                        </button>
                      </div>
                      <div
                        id="collapsefour"
                        className="accordion-collapse collapse"
                        aria-labelledby="list-4"
                        data-bs-parent="#mobile-toggle-nav"
                      >
                        <div className="accordion-body">
                          <div className="iner-list">
                            <ul>
                              <li>
                                <NavLink to="/about-us/">About Us</NavLink>
                              </li>
                              <li>
                                <NavLink to="/why-us/">Why Us</NavLink>
                              </li>
                              <li>
                                <NavLink to="/partner/">Partner</NavLink>
                              </li>
                              <li>
                                <NavLink to="/career/">Career</NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="list-5">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefive"
                          aria-expanded="false"
                          aria-controls="collapsefive"
                        >
                          <NavLink to="#">
                            <span>Resources</span>
                          </NavLink>
                        </button>
                      </div>
                      <div
                        id="collapsefive"
                        className="accordion-collapse collapse"
                        aria-labelledby="list-5"
                        data-bs-parent="#mobile-toggle-nav"
                      >
                        <div className="accordion-body">
                          <div className="iner-list">
                            <ul>
                              <li>
                                <NavLink to="/blog/">Blogs</NavLink>
                              </li>
                              <li>
                                <NavLink to="/ebook/">eBook</NavLink>
                              </li>

                              <li>
                                <NavLink to="/case-studies/">
                                  Case Studies
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/webinars/">Webinars</NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <NavLink className="nav-link" to="/contact-us/">
                        Contact Us
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
