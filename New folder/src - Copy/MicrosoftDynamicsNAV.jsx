import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";

const MicrosoftDynamicsNAV = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Microsoft Dynamics NAV (Navision) Support Partner</title>
        <link rel="canonical" href="https://www.dynamicssquare.com/products/microsoft-dynamics-nav/" />
        <meta
          name="description"
          content="Need Microsoft Dynamics NAV support? Whether you're using an older or newer version, we offer high quality, low cost Navision support services. Contact us now to get started."
        />
          <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
      </Helmet>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="4sdOb8PUE-o"
        onClose={() => setOpen(false)}
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft
                <br />
                Dynamics NAV
              </h1>
              <p>
              Improve Your Workflow and Maximize Your Profitability with Microsoft Dynamics NAV
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <NavLink
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get NAV Support</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/assets/img/nav-banner.png" alt="Microsoft Dynamics NAV" />
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom custom001">
        <div className="container">
          <div className="row g-5">
          <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>
                What Is Microsoft Dynamics NAV?
                </h2>
              </div>
              <div className="custom002">
                <p>Dynamics NAV (formerly known as Navision) is a flexible <NavLink to="/products/microsoft-dynamics-erp/">ERP solution</NavLink> that enables small to medium-sized businesses (SMBs) to manage finance, sales, warehousing, operations, customers, supply chain, accounting and stock management.</p>
                <p>Microsoft Dynamics NAV is a productive tool that generally helps employees be more productive and efficient by managing and operating the business from one dashboard. With this tool, all the employees and decision-makers can work collaboratively for the organization's overall growth by making communications and data transfer smoother.</p>
                <p>Being a <NavLink to="/about-us/">Microsoft Gold Partner</NavLink>, we will help SMBs to grow faster by delivering value for money Dynamics NAV support services. Get Microsoft Dynamics NAV support by connecting to one of our Microsoft consultants.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <img
                    src="/assets/img/NAV-implementation.jpg"
                    className="fix-im"
                    alt="d605-left"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>Benefits Of Microsoft Dynamics NAV</h2>
            <p>
            Microsoft Dynamics NAV carries several capabilities to cope with business management processes and operations. With over 550K+ customer base, it has some functions which no other ERP solution is provided in the market. Some capabilities of Dynamics NAV are listed below:
            </p>
          </header>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnewas">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        
                        <span>Financial Management and Accounting</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnewas"
                    >
                      <div className="accordion-body">
                       <p>It assists users in smoothly managing their finances by maintaining operations such as banking, constant cash flow, analytical accounting, asset management, allocations, and other finance tasks.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        
                        <span>Manufacturing, Distribution and Supply Chain Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnewas"
                    >
                      <div className="accordion-body">
                       <p>Dynamics NAV is better at supervising the manufacturing and distribution of products and making records of the same. It helps the users continuously run the supply chain and makes the whole process easy for the concerned department. </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        
                        <span>Sales, Support, and Marketing</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnewas"
                    >
                      <div className="accordion-body">
                       <p>It makes customer data management easy and accessible anytime for sales and marketing purposes. It can also organize and execute the campaigns run by the marketing department and show the real insights.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accnews">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin11"
                        aria-expanded="false"
                        aria-controls="fin11"
                      >
                        <span>Project Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin11"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                       <p>Dynamics NAV makes project tracking easy with the updated data of costs, time, budget, and the needed resources to complete a project successfully. It performs all such tasks with NAV's Capacity Management feature, available in almost all versions. </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin12"
                        aria-expanded="false"
                        aria-controls="fin12"
                      >
                        <span>Business Intelligence and Reporting</span>
                      </button>
                    </h3>
                    <div
                      id="fin12"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                       <p>The Business Intelligence function allows the system to provide insights and reports to the users so they can make an informed decision whenever there is a need. It provides the visibility to track almost all performances with the help of Microsoft integrations like Excel and Office.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin13"
                        aria-expanded="false"
                        aria-controls="fin13"
                      >
                        <span>Mobile Service Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin13"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accnews"
                    >
                      <div className="accordion-body">
                       <p>MS Dynamics NAV makes service operations management possible with optimum efficiency and while maintaining long-term relationships with the customers. It helps you to organize all the service requests, service-contract management, equipment tracking, etc.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-whys">
        <div className="container">
        <header className="section-header">
            <h2>Dynamics NAV Pricing & Licensing</h2>
            <p>
            Microsoft Dynamics NAV carries several capabilities to cope with business management processes and operations. With over 550K+ customer base, it has some functions which no other ERP solution is provided in the market. Some capabilities of Dynamics NAV are listed below:
            </p>
          </header>
          <div className="row g-5">
          
            <div className="col-lg-6">
              <div className="parten-more parten-more-ss">
              <h3>Starter Pack</h3>
              <span>Features</span>
              <p>Starter packs allow the three users of the organization to deal with finance and trade functionality. It lets you access the basic finance features, supply chain management, sales management, and project management. Also, it lets the users get insights and reports on the processes and operations of the product. </p>
              </div>
            </div>
            <div className="col-lg-6">
            <div className="parten-more  parten-more-ss">
              <h3>Extended Pack</h3>
              <span>Features</span>
              <p>If you are a growing organisation whose business requirements are more complex and advanced, the Extended Pack is for you. Apart from the functions of the starter pack, it lets you manage the manufacturing and warehousing too as an add-on. In addition, users can request more customizations from the vendor partner if necessary.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Looking for a new Dynamics NAV Support Partner?</h3>
                <p>
                We have over 135+ NAV consultants ready to help your business every step of the way. 
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <NavLink data-bs-toggle="modal"
                    to="#exampleModal" className="btn-get-started scrollto">
                    <span>Talk to NAV Expert </span>
                  </NavLink>
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
                    src="/assets/img/Microsoft-Dynamics-NAV-sede-pic.png"
                    className="fix-im"
                    alt="Dynamics 365 Finance Service"
                  />
                  {/* <img
                    src="/assets/img/ico6.svg"
                    className="flot-img"
                    alt="ico6"
                  /> */}
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <NavLink
                        to="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/assets/img/Microsoft-Dynamics-NAV_video.png"
                          alt="Microsoft-Dynamics-NAV_video"
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
                <h2>Microsoft Dynamics NAV <br />Partners UK</h2>
                <p>
                  Are you looking for better Dynamics NAV support or advice? Get
                  it here at Dynamics Square.
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
                    Drive seamless flow of your enterprise practices by our
                    Microsoft Dynamics NAV support solution.
                  </p>
                  <div className="action-content">
                    <NavLink data-bs-toggle="modal"
                    to="#exampleModal">Get Started</NavLink>
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
                    For betterment, upgrade your Dynamics NAV account to a
                    modernized Business Central solution.
                  </p>
                  <div className="action-content">
                    <NavLink to="/dynamics-nav-to-business-central/">Get Started</NavLink>
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
                    Drive consistency in your processes and ensure smoother
                    workflow by availing of our Navision Support
                  </p>
                  <div className="action-content">
                    <NavLink data-bs-toggle="modal"
                    to="#exampleModal">Get Started</NavLink>
                  </div>
                </div>
              </div>
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
              questions about Dynamics NAV?
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
                      Is Microsoft Dynamics the same as Navision?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Yes, Microsoft Dynamics is the same as Navision. It offers the same functionality and are built on the same codebase. Navision was first introduced in 1984 by Microsoft as a single-user PC accounting software to deal with finance, warehouse management, and debits. It was a simple tool with limited capabilities to perform accounting tasks.  From 1984 to 2017, it has received a number of updates, and a lot of features have been added. However, in 2018, Microsoft Dynamics Navision was renamed Dynamics 365 Business Central, an all-in-one ERP solution for overall business management. With the limited capabilities of Dynamics NAV, D365 Business Central came up with a lot of benefits and features for users to make smarter business decisions. </p>
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
                     How much does Microsoft NAV Cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      There is no such data available as fixed pricing for Dynamics NAV. There are several factors, like company size, industry type, number of users, the storage required, and more, on which the pricing depends. Moreover, the pricing of the Dynamics NAV cloud starts from £152 per user per month. The selection of your plan (Starter Pack or Extended Pack) along with the customizations decides the final price.  The users have the option to pay the total fee upfront or pay a per month/use fee to their NAV support partner. 
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
                      data-bs-target="#faq-content-3"
                    >
                     Why Choose Dynamics Square As Your NAV Support Partner?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      With Dynamics NAV, we support SMBs in planning, controlling, and optimizing business processes with the help of efficient, transparent, automated, and reliable ERP software. By using our Dynamics NAV support solutions, small-to-medium businesses get more transparency and control over business processes for long-term growth.</p>
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

export default MicrosoftDynamicsNAV;
