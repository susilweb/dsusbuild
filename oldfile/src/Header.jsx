import React, { useState } from "react";
import { ExternalLink } from "react-external-link";
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
        <div className="container-fluid">
          <nav id="navbar" className="navbar">
            <div className="left-logo">
              <NavLink to="/" className="logo">
                <img
                  src="/assets/img/dynamicssqure-logo.svg"
                  alt="Dynamics Square logo"
                />
              </NavLink>
            </div>
            <div className="right-nav">
              <ul>
                <li className="dropdown megamenu">
                  <NavLink to="#">
                    <span>Solution</span>
                    <i className="bi bi-chevron-down"></i>
                  </NavLink>
                  <div className="megamenu-list">
                    <div className="left-list">
                      <div className="d-flex align-items-start">
                        <div
                          className="nav flex-column nav-pills me-3"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <div
                            className="nav-link active"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                          >
                            <NavLink to="#">
                              <span>Dynamics 365</span>
                            </NavLink>
                          </div>
                          <div
                            className="nav-link"
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            aria-selected="false"
                          >
                            <NavLink to="#">
                              <span>Azure IoT</span>
                            </NavLink>
                          </div>
                          <div
                            className="nav-link"
                            id="v-pills-messages-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-messages"
                            aria-selected="false"
                          >
                            <NavLink to="#">
                              <span>Power Platform</span>
                            </NavLink>
                          </div>
                          <div
                            className="nav-link"
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings"
                            aria-selected="false"
                          >
                            <NavLink to="#">
                              <span>Legacy Dynamics</span>
                            </NavLink>
                          </div>
                          <div
                            className="nav-link"
                            id="v-pills-settingss-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-settingss"
                            aria-selected="false"
                          >
                            <NavLink to="#">
                              <span>More Solutions</span>
                            </NavLink>
                          </div>
                        </div>
                        <div className="tab-content" id="v-pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="v-pills-home"
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/dynamics-365-business-central/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/dynamics-365-businesscentral.svg"
                                          alt="dynamics-365-businesscentral"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Business Central</span>
                                        <p>
                                          All-in-one solution for all your
                                          business practices
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-dynamics-365-finance/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/dynamics-365-finance.svg"
                                          alt="dynamics-365-finance"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Finance</span>
                                        <p>Improve your finance practices</p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/dynamics-365-supply-chain-management/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/dynamics-365-supplychainmanagement.svg"
                                          alt="dynamics-365-supplychainmanagement"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Supply Chain</span>
                                        <p>
                                          Optimize operations and drive agile
                                          Supply Chain
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>

                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/dynamics-365-customer-engagement/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/dynamics-365-customer-engagement.svg"
                                          alt="dynamics-365-customer-engagement"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Customer Engagement</span>
                                        <p>
                                          Improve Your marketing capabilities
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-dynamics-365-sales/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/dynamics-365-sales.svg"
                                          alt="dynamics-365-sales"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Sales</span>
                                        <p>Drive end-to-end sales practices</p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-dynamics-365-customer-service/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/dynamics-365-customer-service.svg"
                                          alt="dynamics-365-customer-service"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Customer Service</span>
                                        <p>
                                          Drive omnichannel customer experience
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-dynamics-365-field-service/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/dynamics-365-fieldservice.svg"
                                          alt="dynamics-365-fieldservice"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Field Service</span>
                                        <p>
                                          Drive connected and collaborated field
                                          service
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-dynamics-365-commerce/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/dynamics-365-commerce.svg"
                                          alt="dynamics-365-commerce"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Commerce</span>
                                        <p>
                                          Unify Your Back-Office, In-Store, And
                                          Digital Experience
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/dynamics-365-project-operations/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/dynamics-365-project-management.svg"
                                          alt="dynamics-365-project-management"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Project Operations</span>
                                        <p>
                                          Automate and streamline your projects
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-dynamics-365-marketing/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/dynamics-365-marketing.svg"
                                          alt="dynamics-365-marketing"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Marketing</span>
                                        <p>
                                          Maximize ROI with integrated Marketing
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/dynamics-365-human-resources/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/dynamics-365-HRM.svg"
                                          alt="dynamics-365-HRM"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Human Resource</span>
                                        <p>
                                          Optimize Your Resource Utilization
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="v-pills-profile">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/azure-iot-hub/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/iot-hub.svg"
                                          alt="iot-hub"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>IoT Hub</span>
                                        <p>
                                          Connect, monitor, and control millions
                                          of devices
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/azure-iot-central/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/iot-central.svg"
                                          alt="iot-central"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>IoT Central</span>
                                        <p>
                                          Register, connect, and manage devices
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/azure-sphere/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/iot-sphere.svg"
                                          alt="iot-sphere"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Azure Sphere</span>
                                        <p>
                                          An embedded security solution for your
                                          devices
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/azure-iot-edge/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/iot-edge.svg"
                                          alt="iot-edge"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>IoT Edge</span>
                                        <p>
                                          Extend cloud business intelligence &
                                          analytics
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/azure-digital-twins/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/digital-twins.svg"
                                          alt="digital-twins"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Digital Twins</span>
                                        <p>
                                          Create digital representation of IoT
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/azure-machine-learning/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/machine-learning.svg"
                                          alt="machine-learning"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Machine Learning</span>
                                        <p>
                                          Drive improved enterprise grade
                                          Machine Learning
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="v-pills-messages">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-power-bi/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/power-bi.svg"
                                          alt="power-bi"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Power BI</span>
                                        <p>
                                          Create powerful visual insights,
                                          analytics
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-power-apps/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/power-apps.svg"
                                          alt="power-apps"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Power Apps</span>
                                        <p>
                                          Build web & mobile apps with zero or
                                          minimal code
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-power-automate/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/power-automate.svg"
                                          alt="power-automate"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Power Automate</span>
                                        <p>
                                          Automate your processes to improve
                                          workflows
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-power-virtual-agents/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/virtual agent.svg"
                                          alt="virtual agent"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Power Virtual Agents</span>
                                        <p>
                                          Create powerful AI Bots to maximize
                                          productivity
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="v-pills-settings">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-dynamics-nav/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/NAV.png"
                                          alt="NAV"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Dynamics NAV</span>
                                        <p>A flexible ERP solution for SMBs</p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-dynamics-crm/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/CRM.png"
                                          alt="CRM"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Dynamics CRM</span>
                                        <p>
                                          Increase Revenue and Customer
                                          Satisfaction
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-dynamics-ax/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img//menu-icons/AX.png"
                                          alt="AX"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Dynamics AX</span>
                                        <p>
                                          The Most Complete, Agile And Powerful
                                          ERP
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-dynamics-gp/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/GP.png"
                                          alt="GP"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Dynamics GP</span>
                                        <p>
                                          Accounting software designed for SMEs
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="v-pills-settingss">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-azure/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/azure.svg"
                                          alt="azure"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Microsoft Azure</span>
                                        <p>
                                          Create secure, future-ready cloud
                                          solutions
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-dynamics-365/mixed-reality/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/mixed-Reality-icons.svg"
                                          alt="mixed-Reality-icons"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Mixed Reality</span>
                                        <p>
                                          Technology that modernises your
                                          workforce
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="list-itmes-maga-menu">
                                    <NavLink to="/products/microsoft-dynamics-365-ai/">
                                      <div className="pic">
                                        <img
                                          src="/assets/img/menu-icons/AI.svg"
                                          alt="AI"
                                        />
                                      </div>
                                      <div className="content">
                                        <span>Artificial Intelligence</span>
                                        <p>
                                          Leverage Microsoft's deep learning
                                          technology
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right-list">
                      <div className="rigt-list-menu">
                        <p>Must Read</p>
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
                            <NavLink to="/products/dynamics-365-business-central/advantages-capabilities/">
                              Business Central - Advantages & Capabilities
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/dynamics-365-finance-operations-vs-sap-erp/">
                              D365 Finance & Operations vs SAP ERP
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/dynamics-365-business-central-vs-sap-business-one/">
                              D365 Business Central vs SAP Business One
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/dynamics-365-business-central-vs-netsuite/">
                              D365 Business Central vs. NetSuite
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li className="dropdown">
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
              </li> */}
                <li className="dropdown">
                  <NavLink to="/industries/">
                    <span>Industries</span>{" "}
                    <i className="bi bi-chevron-down"></i>
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink to="/industries/startups/">Startups</NavLink>
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
                    <span>Resources</span>{" "}
                    <i className="bi bi-chevron-down"></i>
                  </NavLink>
                  <ul>
                    <li>
                      <ExternalLink
                        href="https://www.dynamicssquare.co.uk/blog/"
                        rel=""
                      >
                        Blog
                      </ExternalLink>
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
                  <ExternalLink
                    className="getstarted custtss"
                    href="tel:+12818990865"
                  >
                    <i className="bi bi-telephone-fill"></i> +1 281 899 0865
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </nav>
          <div className="mobile-menu-section-wr">
            <div className="togglr-icon-nav">
              <ExternalLink
                href="#offcanvasWithBothOptions"
                data-bs-toggle="offcanvas"
                aria-controls="offcanvasWithBothOptions"
              >
                <i className="bi bi-list mobile-nav-toggle"></i>
              </ExternalLink>
            </div>
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
                    <img
                      src="/assets/img/dynamicssqure-logo.svg"
                      alt="Dynamics Square logo"
                    />
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
                                    <NavLink to="/products/microsoft-dynamics-365/mixed-reality/">
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
                              {/* <li>
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
                              </li> */}
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
                                <NavLink to="/industries/startups/">
                                  Startups
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
                                <ExternalLink href="https://www.dynamicssquare.co.uk/blog/" target="_blank" rel="">Blogs</ExternalLink>
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
