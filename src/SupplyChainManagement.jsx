import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import Blog from "./Blog";
const SupplyChainManagement = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dynamics 365 Supply Chain Management - Dynamics Square</title>
        <meta
          name="description"
          content="Dynamics 365 Supply Chain management helps organizations simplify, streamline, and accelerate their supply chain practices just to produce, drive, and scale high."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/dynamics-365-supply-chain-management/"
        />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="R3Ol_-prHeI"
        onClose={() => setOpen(false)}
      />

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Dynamics 365
                Supply Chain Management
              </h1>
              <p>
              Streamline your supply chain with Dynamics 365 Supply Chain Management to ensure process acceleration and drive innovation.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Book A Call</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/assets/img/supply-chain-banner.png"
                alt="Dynamics 365 Supply Chain Management"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
        <div className="row justify-content-center"> 
        <div className="col-lg-8 col-md-8"> 
        <header className="section-header"> 
        <h2> What Is Dynamics 365 Supply Chain Management?</h2> 
<p>Accelerate process execution, continuously monitor your end-to-end supply chain practices from inventory, warehousing to distribution along with forecasting data and revealing analytics instantly to make strategic and timely decisions. When you implement Dynamics 365 Supply Chain Management solution in your system, it helps optimize supply chain practices, automate tasks, and improves efficiency across supply chain pipeline.</p> 
       </header> 
      </div>
      </div> 
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <div className="wr-in">
                          <img src="/assets/img/Accelerate-Time-to-Market.svg" alt="Accelerate-Time-to-Market" />
                        </div>
                        <span>Faster Time to Market</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      Enterprises can boost their supply chain capabilities in terms of streamlining order management, monitoring and resolving quality issues, and accelerating time to market to efficiently drive customers.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <div className="wr-in">
                          <img src="/assets/img/Demand-Analysis-Fulfillment.svg" alt="Demand-Analysis-Fulfillment" />
                        </div>
                        <span>Demand Planning & Analysis</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      Automate your demand planning & distribution practices, forecast demand leveraging data intelligence. Drive proactive resource allocation, streamline sales, and automate your production line with D365 Supply Chain Management.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img src="/assets/img/Sell-smarter-and-improve-customer-service.svg" alt="Sell-smarter-and-improve-customer-service" />
                        </div>
                        <span>Streamline Inventory & Logistics</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      Simplify your inventory data with real-time access, bring automation in your logistics and warehousing practices, drive effortless procurement management, and accurately estimate your logistics costs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnews">
                <hr className="mob-disp" />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fi4"
                        aria-expanded="false"
                        aria-controls="fi4"
                      >
                        <div className="wr-in">
                          <img src="/assets/img/4.jpg" alt="images-name" />
                        </div>
                        <span>High-End Manufacturing & Distribution</span>
                      </button>
                    </h3>
                    <div
                      id="fi4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                      Dynamics 365 Supply Chain is highly configured with AI and <NavLink to="/products/microsoft-azure/">IoT capabilities</NavLink> to streamline manufacturing & distribution processes while enabling remote process handling and reducing error potentials.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fi5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <div className="wr-in">
                          <img
                            src="/assets/img/Increase-Asset-Uptime.svg"
                            alt="Increase-Asset-Uptime"
                          />
                        </div>
                        <span>Maximize Asset Uptime</span>
                      </button>
                    </h3>
                    <div
                      id="fi5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                      Enable automated resource scheduling, prevent machine downtime, and efficiently manage end-to-end Supply Chain Operations with applied predictive maintenance and maximized equipment efficiency.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
            <div className="wy-sultion-left-head">
            <h2>Dynamics 365 Supply Chain Management Features</h2>
            <h3>Strengthen your supply chain operations by implementing Dynamics 365 Supply Chain Management</h3>
            </div>
              <div className="m-o-t m-o-t-b">
                <NavLink
                  data-bs-toggle="modal"
                  to="#exampleModal"
                  className="btn-get-started scrollto"
                >
                  <span>Know More</span>
                </NavLink>
              </div>
              {/* <div className="downlad_guid">
                        <NavLink to="#">
                        <span>Download Microsoft Guide</span>
                        </NavLink>
                     </div> */}
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Connected Operations{" "}
                      </h3>
                      <div className="overlay">
                        <p>
                        Unify your supply chain operations from inventory and warehousing to logistics and drive an integrated approach in your supply chain pipeline to quickly respond to customers and ensure collaborative efforts.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Maximize Growth <br/> & Scalability
                      </h3>
                      <div className="overlay">
                        <p>
                        Microsoft's Supply Chain solution helps enterprises to optimize their supply chain performance, supports to maintain the right production flow, and enables them to acquire growth & maximize scalability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Ensure Strategic
                        <br /> Planning
                      </h3>
                      <div className="overlay">
                        <p>
                        With Dynamics Supply Chain module solution, enable a smoother flow in your logistics and warehousing data, leverage data to analyze & forecast, and strategize planning to uplift your profitability level.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Optimize Resources
                      </h3>
                      <div className="overlay">
                        <p>
                        Keep tracking your inventory levels, improve cost management, predict customer demand, and enable better resource and inventory planning to drive productivity while reducing downtime and eliminating repetitive tasks.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <img
                    src="/assets/img/supply-chain-page-side-image.png"
                    className="fix-im"
                    alt="Supply Chain Management Service"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <NavLink
                        to="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/assets/img/Video-Supply Chain Management.png"
                          alt="Video-Supply Chain Management"
                        />
                        <span className="cente-icns">
                          <img
                            src="/assets/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Supply Chain Management Services</h2>
                <p>
                Drive Productive Growth with Dynamics 365 Supply Chain Management Solutions
                </p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/assets/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Implementation</h3>
                  <p>
                  Enable your business to start achieving new milestones with Dynamics 365 Supply Chain Management.{" "}
                  </p>
                  <div className="action-content">
                    <Link data-bs-toggle="modal" to="#exampleModal">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/assets/img/Business Central Upgrade-icons.svg"
                    alt="Business Central Upgrade-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Upgrade</h3>
                  <p>
                  Support your continuously upgrading practices with our Supply Chain Operations upgrade solutions.
                  </p>
                  <div className="action-content">
                    <Link data-bs-toggle="modal" to="#exampleModal">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/assets/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>
                  Drive agile flow and support your business continuity with our Supply Chain upgrade services.
                  </p>
                  <div className="action-content">
                    <Link data-bs-toggle="modal" to="#exampleModal">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Supply Chain Management Pricing</h2>
            <p>
            Build a consistent and flexible supply chain by our Dynamics 365 Supply Chain Management Packages
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-3">
              {/* <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Financial Management</li>
                           <li> <i className="bi bi-check-lg"></i> Inventory Management</li>
                           <li> <i className="bi bi-check-lg"></i> Order Management</li>
                           <li> <i className="bi bi-check-lg"></i> Purchase Order Management</li>
                           <li> <i className="bi bi-check-lg"></i> Project Management</li>
                           <li> <i className="bi bi-check-lg"></i> Additional Capabilities</li>
                        </ul>
                       
                     </div> */}
            </div>
            <div className="col-lg-6">
              <div className="box box-22">
                <h3>
                  Dynamics 365
                  <br />
                  Supply Chain Management
                </h3>
                <div className="price">
                  <sup>$</sup>180<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li className="text-center">
                  Scalable, composable, secure, and streamlined solution for an intelligent supply chain.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              {/* <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Read and Approve</li>
                           <li> <i className="bi bi-check-lg"></i> Employee Self Serve</li>
                           <li> <i className="bi bi-check-lg"></i> Run All Reports</li>
                        </ul>
                       
                     </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Create an intelligent and adaptable supply chain</h3>
                <p>Discuss your business requirement with us, we can suggest a highly customized solution for your Business.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <NavLink
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get Started Now</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs-extra">
        <div className="container">
          <header className="section-header">
            <h2>Explore Our Recent Blogs & Resources</h2>
            <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
          </header>
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <NavLink to="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>Nucleus Research
                      Report 2019
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>The top 8 Trends
                      Every COO Should Know
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>The Savvy
                      Leader’s Guide to Building Intelligent Supply Chain
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>Creating an
                      Agile Supply Chain
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>A Quick-Start
                      Guide for Improving Supply Chain Resilience
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i>Risk Mitigation
                      Across Today's Supply Chain
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" target="_blank">
                      <i className="bi bi-file-earmark-pdf"></i> Licensing Guide
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* <div className="blogs-extra-title">
                        <h4>Learn More</h4>
                     </div>
                     <div className="blogs-extra-right">
                        <ul>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Collections automation</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Vendor invoice automation</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Why to Upgrade Dynamics NAV to Business Central</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Asset leasing</NavLink></li>
                        </ul>
                     </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about D365 Supply Chain Management? 
            </h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What is D365 Supply Chain Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics 365 Supply Chain Management is an all-in-one
                      package to simplify and transform the supply chain
                      practices for small to medium scale businesses. Dynamics
                      Supply Chain module empowers your supply chain workforce
                      with not just planning and logistics capabilities, even it
                      enables to gain predictive insights and other real-time
                      connectivity across supply chain operations including
                      production, planning, warehousing, and transportation
                      management to boost operational efficiency while
                      maximizing profitability and scalability.</p>
                      <p>To know more about how D365 Supply Chain Management
                      solutions can help to improve and maximize your supply
                      chain efficiency, <NavLink to="/contact-us/">Dynamics Square</NavLink>{" "} can help.
                      </p>                  
                  </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      How D365 Supply Chain Management helps manufacturers?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Once your business starts growing, manufacturers are needed to support their ongoing as well as continuously growing processes to ensure no process abundance is taking place. With cloud-embedded Dynamics 365 for Supply Chain Management, enterprises can automate their processes while maximizing customer demand, adapting industrial changes, and simplifying the process flow.</p>
                    <p>Since Dynamics 365 Supply Chain is configured with AI and IoT capabilities that enable you to gain in-depth analytics in real-time to make instant decisions. Enterprises can also predict equipment downtime whereby they can plan and manage their production or process flow in advance that drives smoother flow across their organization and ensures scalable growth.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      Why Choose Dynamics 365 for Supply Chain?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>Leveraging Dynamics 365 Supply Chain, modern enterprises can manage their entire supply chain workflow with real-time tracking and process monitoring capability. It enables you to stay updated with actual inventory flow, ease procurement process, and helps to optimize your logistics operations.</p>
                     <p>Utilizing cloud-data efficiency, you can streamline and automate your data to ensure informed decisions supporting your concurrent business processes as well as enabling you to handle sudden process changes in your organization.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      What are the key features of Dynamics 365 Supply Chain
                      Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    <p>Dynamics 365 Supply Chain Management comes with several business-driven features that help to manage the entire supply chain practices with real-time data-driven capability. Here is the list of D365 Supply Chain Management features:</p>
                      <ul>
                        <li>Asset Management</li>
                        <li>Cost Accounting</li>
                        <li>Cost Management</li>
                        <li>Inventory Management</li>
                        <li>IoT Intelligence</li>
                        <li>Master Planning</li>
                        <li>Procurement & Sourcing</li>
                        <li>Product Information Management</li>
                        <li>Production Control</li>
                        <li>Sales & Marketing</li>
                        <li>Service Management</li>
                        <li>Transportation Management</li>
                        <li>Warehouse Management</li>
                      </ul>
                      <p>All the above features can be configured fully or can be customized as per your specific or customized business needs. Experts at Dynamics Square can implement the highly customized Supply Chain solution demonstrating your enterprise needs.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      How D365 Supply Chain Management helps to drive smarter?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                     <p>With Dynamics 365 Supply Chain, you can automate your data and stay updated with every process flow from actual inventory level to warehousing practices, logistics needs, procurement to transportation management, and more. Connect with Dynamics Square to know how Supply Chain solutions can impact your overall Supply Chain pipeline and enable growth while reducing investment costs.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      How much does it cost to implement Dynamics 365 Supply
                      Chain Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                   <p>For the very first time, your initial license cost would be $180 per user/per month. For subsequent app users, you are required to pay $30 per user/month. So, your total cost can be calculated depending on the number of user licenses you avail of.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                     Can I customize or integrate my Supply Chain Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes, Microsoft Dynamics 365 Supply Chain is highly flexible and configurable according to your business needs. It's designed with several vital modules supporting your supply chain operational flow. Addressing your distinct supply chain needs and operational flow, you can ask your implementation provider whether to implement all the available modules or implement the required ones only.</p>
                      <p>Further, it can be integrated with either your existing system or with any of Microsoft's applications to enable your system to work parallel while ensuring a smoother flow in your operational environment. At Dynamics Square, we have experts to configure, customize, and <NavLink to="/our-services/dynamics-365-implementation-services/">implement</NavLink>{" "} a solution matching your specific supply chain operation needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupplyChainManagement;
