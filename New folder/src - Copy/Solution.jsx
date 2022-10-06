import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Solution = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title></title>
        <link rel="canonical" href="" />
        <meta name="description" content="" />
        <meta content="" name="keywords" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Dynamics 365
                <br />
                Business Central
              </h1>
              <h2>
                Manage your end-to-end business processes and drive effective
                growth, sustainability, and scalability in your business with
                Microsoft Dynamics 365 Business Central.
              </h2>
              <div>
                <div className="text-center text-lg-start">
                  <NavLink to="#" className="btn-get-started scrollto">
                    <span>Schedule a Demo</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://www.dynamicssquare.co.uk/wp-content/uploads/2021/11/Dynamics-365-Business-Central.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section>
            <div className="container">
               <header className="section-header">
                  <h3>What is dynamics 365<br />
                     business central?
                  </h3>
                  <p>Dynamics 365 Business Central (formerly known as Dynamics NAV) is a comprehensive business management solution helping <br />enterprises to determine their business goals and enabling them to manage their sales, finance, service, and operations <br /> seamlessly and effectively. Business Central is designed to help modern enterprises effortlessly connect their users to adapt & drive faster, and eventually deliver the anticipated results.</p>
               </header>
               <div className="row">
                  <div className="swiper solution_new_slider">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide col-lg-4 col-md-4">
                           
                           <div id="accordion" className="accordion-container">
                              <div className="srcve_head">
                                 <h3>Finance</h3>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Internal Transactions</h4>
                                 <div className="accordion-content">
                                    <p>Customize and automate inter-company transactions with access level control across different teams.</p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Cash flow Forecasting</h4>
                                 <div className="accordion-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Budgeting</h4>
                                 <div className="accordion-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Inventory Costing</h4>
                                 <div className="accordion-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Consolidation and Multicompanies</h4>
                                 <div className="accordion-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Costs and Income Allocation</h4>
                                 <div className="accordion-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Banking</h4>
                                 <div className="accordion-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Cost Accounting</h4>
                                 <div className="accordion-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Fixed Assets</h4>
                                 <div className="accordion-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Accounts Receivable</h4>
                                 <div className="accordion-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Accounts Payable</h4>
                                 <div className="accordion-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>General Ledger</h4>
                                 <div className="accordion-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="swiper-slide col-lg-4 col-md-4">

                        <div id="accordion" className="accordion-container">
                           <div className="srcve_head">
                              <h3>Sales</h3>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Customer management</h4>
                              <div className="accordion-content">
                                 <p>Customize and automate inter-company transactions with access level control across different teams.</p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Sales Quote</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Sales order</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Sales Invoices</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Drop Shipments</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Sales Returns</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Assembly Order</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Order Planning & Promising</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Single invoice Multiple Shipments</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Correction or Cancel Unpaid Invoices</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Pick List Creation</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                        </div>
                        </div>

                        <div className="swiper-slide col-lg-4">

                        <div id="accordion" className="accordion-container">
                           <div className="srcve_head">
                              <h3>Purchase</h3>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Vendor Management</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Purchase Quote</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Purchase Order</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Purchase Invoices</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Purchase Items for Sales</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Purchase Returns</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Combine Receipts on Single Invoice</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Electronic Documents</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Date Calculation for Purchase</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>
                           <div className="content-entry">
                              <h4 className="article-title"><i className="bi"></i>Merge Duplicate Records</h4>
                              <div className="accordion-content">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                              </div>
                           </div>

                        </div>
                        </div>

                        <div className="swiper-slide col-lg-4">

                           <div id="accordion" className="accordion-container">
                              <div className="srcve_head">
                                 <h3>Purchase</h3>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Vendor Management</h4>
                                 <div className="accordion-content">
                                    <p>Accordion content 1</p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Purchase Quote</h4>
                                 <div className="accordion-content">
                                    <p>Accordion content 1</p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Purchase Order</h4>
                                 <div className="accordion-content">
                                    <p>Accordion content 1</p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Purchase Invoices</h4>
                                 <div className="accordion-content">
                                    <p>Accordion content 1</p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Purchase Items for Sales</h4>
                                 <div className="accordion-content">
                                    <p>Accordion content 1</p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Purchase Returns</h4>
                                 <div className="accordion-content">
                                    <p>Accordion content 1</p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Combine Receipts on Single Invoice</h4>
                                 <div className="accordion-content">
                                    <p>Accordion content 1</p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Electronic Documents</h4>
                                 <div className="accordion-content">
                                    <p>Accordion content 1</p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Date Calculation for Purchase</h4>
                                 <div className="accordion-content">
                                    <p>Accordion content 1</p>
                                 </div>
                              </div>
                              <div className="content-entry">
                                 <h4 className="article-title"><i className="bi"></i>Merge Duplicate Records</h4>
                                 <div className="accordion-content">
                                    <p>Accordion content 1</p>
                                 </div>
                              </div>
   
                           </div>
                           </div>

              

                     </div>
                   
                     <div className="swiper-pagination"></div>
                  </div>
               </div>
            </div>
         </section> */}

      <section>
        <div className="container">
          <header className="section-header">
            <h3>
              What is dynamics 365
              <br />
              business central?
            </h3>
            <p>
              Dynamics 365 Business Central (formerly known as Dynamics NAV) is
              a comprehensive business management solution helping <br />
              enterprises to determine their business goals and enabling them to
              manage their sales, finance, service, and operations <br />{" "}
              seamlessly and effectively. Business Central is designed to help
              modern enterprises effortlessly connect their users to adapt &
              drive faster, and eventually deliver the anticipated results.
            </p>
          </header>
          <div className="row new-Prod">
            <div className="col-lg-4">
              <div className="busines-accr">
                <div className="srcve_head">
                  <h3>Finance</h3>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sol1"
                        aria-expanded="false"
                        aria-controls="sol1"
                      >
                        Internal Transactions
                      </button>
                    </h2>
                    <div
                      id="sol1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Customize and automate inter-company transactions with
                        access level control across different teams.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sol2"
                        aria-expanded="false"
                        aria-controls="sol2"
                      >
                        Cash flow Forecasting
                      </button>
                    </h2>
                    <div
                      id="sol2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sol3"
                        aria-expanded="false"
                        aria-controls="sol3"
                      >
                        Budgeting
                      </button>
                    </h2>
                    <div
                      id="sol3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sol4"
                        aria-expanded="false"
                        aria-controls="sol4"
                      >
                        Inventory Costing
                      </button>
                    </h2>
                    <div
                      id="sol4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sol5"
                        aria-expanded="false"
                        aria-controls="sol5"
                      >
                        Consolidation and Multicompanies
                      </button>
                    </h2>
                    <div
                      id="sol5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sol6"
                        aria-expanded="false"
                        aria-controls="sol6"
                      >
                        Costs and Income Allocation
                      </button>
                    </h2>
                    <div
                      id="sol6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sol7"
                        aria-expanded="false"
                        aria-controls="sol7"
                      >
                        Banking
                      </button>
                    </h2>
                    <div
                      id="sol7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sol8"
                        aria-expanded="false"
                        aria-controls="sol8"
                      >
                        Cost Accounting
                      </button>
                    </h2>
                    <div
                      id="sol8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sol9"
                        aria-expanded="false"
                        aria-controls="sol9"
                      >
                        Fixed Assets
                      </button>
                    </h2>
                    <div
                      id="sol9"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sol10"
                        aria-expanded="false"
                        aria-controls="sol10"
                      >
                        Accounts Receivable
                      </button>
                    </h2>
                    <div
                      id="sol10"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sol11"
                        aria-expanded="false"
                        aria-controls="sol11"
                      >
                        Accounts Receivable
                      </button>
                    </h2>
                    <div
                      id="sol11"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sol12"
                        aria-expanded="false"
                        aria-controls="sol12"
                      >
                        Accounts Receivable
                      </button>
                    </h2>
                    <div
                      id="sol12"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="busines-accr">
                <div className="srcve_head">
                  <h3>Sales</h3>
                </div>
                <div className="accordion" id="exm2">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sec1"
                        aria-expanded="false"
                        aria-controls="sec1"
                      >
                        Customer management
                      </button>
                    </h2>
                    <div
                      id="sec1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Manage your customers well. Create Customer Card for
                        each customer that you sell to.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sec2"
                        aria-expanded="false"
                        aria-controls="sec2"
                      >
                        Sales Quote
                      </button>
                    </h2>
                    <div
                      id="sec2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sec3"
                        aria-expanded="false"
                        aria-controls="sec3"
                      >
                        Sales order
                      </button>
                    </h2>
                    <div
                      id="sec3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sec4"
                        aria-expanded="false"
                        aria-controls="sec4"
                      >
                        Sales Invoices
                      </button>
                    </h2>
                    <div
                      id="sec4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sec5"
                        aria-expanded="false"
                        aria-controls="sec5"
                      >
                        Drop Shipments
                      </button>
                    </h2>
                    <div
                      id="sec5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sec6"
                        aria-expanded="false"
                        aria-controls="sec6"
                      >
                        Sales Returns
                      </button>
                    </h2>
                    <div
                      id="sec6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sec7"
                        aria-expanded="false"
                        aria-controls="sec7"
                      >
                        Assembly Order
                      </button>
                    </h2>
                    <div
                      id="sec7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sec8"
                        aria-expanded="false"
                        aria-controls="sec8"
                      >
                        Order Planning & Promising
                      </button>
                    </h2>
                    <div
                      id="sec8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sec9"
                        aria-expanded="false"
                        aria-controls="sec9"
                      >
                        Single invoice Multiple Shipments
                      </button>
                    </h2>
                    <div
                      id="sec9"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sec10"
                        aria-expanded="false"
                        aria-controls="sec10"
                      >
                        Correction or Cancel Unpaid Invoices
                      </button>
                    </h2>
                    <div
                      id="sec10"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sec11"
                        aria-expanded="false"
                        aria-controls="sec11"
                      >
                        Pick List Creation
                      </button>
                    </h2>
                    <div
                      id="sec11"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="busines-accr">
                <div className="srcve_head">
                  <h3>Purchase</h3>
                </div>
                <div className="accordion" id="exm2">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#third1"
                        aria-expanded="false"
                        aria-controls="third1"
                      >
                        Vendor Management
                      </button>
                    </h2>
                    <div
                      id="third1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Customize and automate inter-company transactions with
                        access level control across different teams.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#third2"
                        aria-expanded="false"
                        aria-controls="third2"
                      >
                        Purchase Quote
                      </button>
                    </h2>
                    <div
                      id="third2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet conthirdtetur adipisicing
                        elit. Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#third3"
                        aria-expanded="false"
                        aria-controls="third3"
                      >
                        Purchase Order
                      </button>
                    </h2>
                    <div
                      id="third3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet conthirdtetur adipisicing
                        elit. Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#third4"
                        aria-expanded="false"
                        aria-controls="third4"
                      >
                        Purchase Invoices
                      </button>
                    </h2>
                    <div
                      id="third4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet conthirdtetur adipisicing
                        elit. Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#third5"
                        aria-expanded="false"
                        aria-controls="third5"
                      >
                        Purchase Items for Sales
                      </button>
                    </h2>
                    <div
                      id="third5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet conthirdtetur adipisicing
                        elit. Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#third6"
                        aria-expanded="false"
                        aria-controls="third6"
                      >
                        Purchase Returns
                      </button>
                    </h2>
                    <div
                      id="third6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet conthirdtetur adipisicing
                        elit. Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#third7"
                        aria-expanded="false"
                        aria-controls="third7"
                      >
                        Combine Receipts on Single Invoice
                      </button>
                    </h2>
                    <div
                      id="third7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet conthirdtetur adipisicing
                        elit. Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#third8"
                        aria-expanded="false"
                        aria-controls="third8"
                      >
                        Electronic Documents
                      </button>
                    </h2>
                    <div
                      id="third8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet conthirdtetur adipisicing
                        elit. Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#third9"
                        aria-expanded="false"
                        aria-controls="third9"
                      >
                        Date Calculation for Purchase
                      </button>
                    </h2>
                    <div
                      id="third9"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet conthirdtetur adipisicing
                        elit. Maxime mollitia, molestiae quas vel sint
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#third10"
                        aria-expanded="false"
                        aria-controls="third10"
                      >
                        Merge Duplicate Records
                      </button>
                    </h2>
                    <div
                      id="third10"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#exm2"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet conthirdtetur adipisicing
                        elit. Maxime mollitia, molestiae quas vel sint
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
            <div className="col-lg-5 m--t">
              <h3>
                Why Move to
                <br />
                Microsoft
                <br />
                Dynamics 365
                <br /> Business Central?
              </h3>

              <h4>
                Streamline your business to a new level with Dynamics 365
                Business Central Features
              </h4>
              <div className="m-o-t m-o-t-b">
                <NavLink to="#about" className="btn-get-started scrollto">
                  <span>Know More</span>
                </NavLink>
              </div>
              <div className="downlad_guid">
                <NavLink to="#">
                  <span>Download Microsoft Guide</span>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        An Integrated <br />
                        ERP Solution
                      </h3>
                      <div className="overlay">
                      <p>
                        Microsoft Dynamics 365 Business Central is an all-in-one
                        ERP system whereby enterprises can connect their teams
                        to drive effective and timely collaboration from anytime
                        and anywhere using any device.
                      </p></div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Real-time Reporting
                        <br />& Analytics
                      </h3>
                      <div className="overlay">
                      <p>
                        Real-time reporting & analytics help to make
                        business-driven decisions. Businesses can get a variety
                        of reports and boost their reporting and analytics
                        process when integrated with Power BI.
                      </p></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Improved
                        <br />
                        Customer Experiencee
                      </h3>
                      <div className="overlay">
                      <p>
                        Implementing Dynamics 365 Business Central can help you
                        to drive a sound customer experience by keeping track of
                        customer activities and supporting them in their hourly
                        need.
                      </p></div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Personalization
                        <br />& Integrationm
                      </h3>
                      <div className="overlay">
                      <p>
                        Business Central can be easily customized to suit your
                        business requirements. Businesses can get seamless
                        integration with Microsoft's products as well as other
                        existing business applications.
                      </p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call_to_action call_to_action-n">
        <div className="container">
          <div className="swiper solution_new_callto">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="call_to_action-left">
                      <h3>Dynamics NAV to Business Central Upgrade!</h3>
                      <p>
                        Are you looking to upgrade from Dynamics NAV to Dynamics
                        365 BC?
                      </p>
                      <div className="new-btn new-btn-nn">
                        <NavLink to="#about" className="btn-get-started-color">
                          <span>Read More Feature</span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="call_to_action-right">
                      <img src="/assets/img/Group-683.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="call_to_action-left">
                      <h3>Dynamics NAV to Business Central Upgrade!</h3>
                      <p>
                        Are you looking to upgrade from Dynamics NAV to Dynamics
                        365 BC?
                      </p>
                      <div className="new-btn new-btn-nn">
                        <NavLink to="#about" className="btn-get-started-color">
                          <span>Read More Feature</span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="call_to_action-right">
                      <img src="/assets/img/Group-683.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <img
                    src="/assets/img/bisin_leftimg.jpg"
                    className="fix-im"
                    alt="bisin_leftimg"
                  />
                  <img
                    src="/assets/img/ico6.svg"
                    className="flot-img"
                    alt="ico6"
                  />
                  <div className="video-ytube">
                    <div className="popup-btn">
                      <NavLink data-bs-toggle="modal" to="#exampleModalToggle">
                        <img src="/assets/img/contactfor-sede-img.jpg" />
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
            <div className="col-lg-6">
              <div className="side-heading">
                <h3>Business central services</h3>
                <p>
                  We offer a full range of services to support you on your
                  Dynamics 365 journey
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
                  <h3>Business Central Implementation</h3>
                  <p>
                    Transform your business capabilities with our highly
                    customized and secured Business Central Implementation.
                  </p>
                  <div className="action-content">
                    <NavLink to="#">Get Started</NavLink>
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
                  <h3>Business Central Upgrade</h3>
                  <p>
                    Avail seamless Business Central upgrade to explore your
                    business opportunities and scale high.
                  </p>
                  <div className="action-content">
                    <NavLink to="#">Get Started</NavLink>
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
                  <h3>Business Central Support</h3>
                  <p>
                    Drive smoother flow and continuity throughout your
                    enterprise with our seamless support services.
                  </p>
                  <div className="action-content">
                    <NavLink to="#">Get Started</NavLink>
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
            <h3>Dynamics 365 Business Central Pricing & Licensing</h3>
          </header>
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="box">
                <h4>
                  Business Central
                  <br />
                  Essentials
                </h4>
                <div className="price">
                  <sup>£</sup>52.80<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Financial Management
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Inventory Management
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Order Management
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Purchase Order Management
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Project Management
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <h4>
                  Business Central
                  <br />
                  Essentials
                </h4>
                <div className="price">
                  <sup>£</sup>52.80<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Financial Management
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i>Inventory Management
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i>Sales Order Management
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i>Purchase Order Management
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Project Management
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Service Management
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Manufacturing
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <h4>
                  Business Central
                  <br />
                  Essentials
                </h4>
                <div className="price">
                  <sup>£</sup>52.80<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Read and Approve
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Employee Self Serve
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check-lg"></i> Run All Reports
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn d-flex justify-content-center">
                <NavLink to="#about" className="btn-get-red">
                  <span>Get Started Now</span>
                </NavLink>
                <NavLink to="#about" className="btn-get-whit">
                  <span>See Licensing Guide</span>
                </NavLink>
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
                <h3>Maximize your business potentials</h3>
                <p>
                  Drive new business challenges by implementing Dynamics 365
                  Business Central
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <NavLink to="#about" className="btn-get-started scrollto">
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
            <h3>
              Check out our Best Resources
              <br />
              for Business Central
            </h3>
          </header>
          <div className="row top-2 gx-5">
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h4>Articles</h4>
              </div>
              <div className="blogs-extra-left">
                <div className="blogs-extra-left-img">
                  <NavLink to="#">
                    <img
                      src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/D365-vs-GP-300x157.jpg"
                      alt="img"
                      width="200"
                      height="104"
                    />
                  </NavLink>
                </div>
                <div className="blogs-extra-left-content">
                  <h4>
                    <NavLink to="#">
                      Dynamics 365 Business Central Vs GP
                    </NavLink>
                  </h4>
                  <span>28 March 2022</span>
                </div>
              </div>
              <div className="blogs-extra-left">
                <div className="blogs-extra-left-img">
                  <NavLink to="#">
                    <img
                      src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/D365-vs-GP-300x157.jpg"
                      alt="img"
                      width="200"
                      height="104"
                    />
                  </NavLink>
                </div>
                <div className="blogs-extra-left-content">
                  <h4>
                    <NavLink to="#">
                      Business Central Vs Finance & Supply Chaint
                    </NavLink>
                  </h4>
                  <span>28 March 2022</span>
                </div>
              </div>
              <div className="blogs-extra-left">
                <div className="blogs-extra-left-img">
                  <NavLink to="#">
                    <img
                      src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/D365-vs-GP-300x157.jpg"
                      alt="img"
                      width="200"
                      height="104"
                    />
                  </NavLink>
                </div>
                <div className="blogs-extra-left-content">
                  <h4>
                    <NavLink to="#">
                      10 Powerful Reasons to Upgrade Accounting Software
                    </NavLink>
                  </h4>
                  <span>28 March 2022</span>
                </div>
              </div>
              <div className="blogs-extra-left">
                <div className="blogs-extra-left-img">
                  <NavLink to="#">
                    <img
                      src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/D365-vs-GP-300x157.jpg"
                      alt="img"
                      width="200"
                      height="104"
                    />
                  </NavLink>
                </div>
                <div className="blogs-extra-left-content">
                  <h4>
                    <NavLink to="#">
                      Dynamics 365 Business Central Wave 2: 2021 Highlights
                    </NavLink>
                  </h4>
                  <span>28 March 2022</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h4>Documents</h4>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i> Is Your
                      Business Outgrowing Your Accounting Software?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i> Business
                      Owner's Guide
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i> Reimagine
                      Productivity
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i> Licensing Guide
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i> Technology
                      Trends Helping Businesses Thrive in a Digital World
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i> Reinvent
                      productivity with Dynamics 365 and Microsoft 365
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i> The Total
                      Economic Impact of Dynamics 365 Business Central
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="blogs-extra-title">
                <h4>Learn More</h4>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-box-arrow-up-right"></i> Why Choose
                      Microsoft Dynamics 365 Business Central?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-box-arrow-up-right"></i> Advantages
                      and Capabilities
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-box-arrow-up-right"></i> Why to
                      Upgrade Dynamics NAV to Business Central
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-box-arrow-up-right"></i> Is Your
                      Business Outgrowing Your Accounting Software?
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h3>
              Have you got
              <br />
              questions about Business Central?
            </h3>
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
                      What is Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Business Central is a one-stop solution for
                      all your enterprise needs. Since Business Central is built
                      with excel-like features and easy-to-use navigation,
                      anyone exposed to advanced excel functionality can easily
                      adapt and leverage the powerful use of Business Central.
                      <br />
                      <br />
                      Business Central is designed as a complete ERP solution
                      for modern enterprises seeking to simplify end-to-end
                      enterprise practices from financials to sales, warehousing
                      to supply chain, project management to general reporting,
                      assembly to manufacturing; Business Central is embedded
                      with all potential business management solutions that give
                      you real-time eyes into your business. <br />
                      <br />
                      You can host your application whether on cloud (private or
                      public) or on-premise; the choice is yours. When it comes
                      to Dynamics 365 Business Central Overview, it comprises
                      huge things. <br />
                      <br />
                      To get more information about Business Central, how it
                      works, and how it can transform your business context, do
                      contact Dynamics Square. Our Dynamics 365 Business Central
                      experts can assist you with the right and precise
                      information.
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
                      How is Business Central related to Dynamics NAV?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Business Central is the updated version of Dynamics NAV.
                      With its upgrade, Microsoft changed its name too. The Core
                      functionality still remains, it's updated with advanced
                      features and navigation to support modern enterprises and
                      to serve every industry. To get more insights, read our
                      blog Why to Upgrade Dynamics NAV to Business Central.
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
                      How do I upgrade to Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Often, enterprises seem confused about when is the right
                      time to upgrade to Dynamics 365 Business Central. If the
                      same question is rolling out in your mind, contact
                      Dynamics Square. We provide free-system health-check to
                      identify your system lacks and upgrading needs considering
                      your current business practices. Our experts can let you
                      know whether you are in need to upgrade your current
                      system or not.
                      <br />
                      <br />
                      To know more about Why move to Dynamics 365 Business
                      Central? Contact our Dynamics 365 experts, we can help you
                      with all your questions. For instance, when you need to
                      upgrade, what are possible personalized options for you?
                      What sort of implementation practices do we follow while
                      upgrading your existing business solution to Microsoft
                      Dynamics 365 Business Central?
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
                      What industries can Dynamics 365 Business Central Support?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Business Central is designed in such a way
                      that any industry from retailers to manufacturers, food &
                      beverages to operations, e-commerce industry to financial
                      services, and more can avail of seamless support in terms
                      of Dynamics 365 business central. Moreover, Business
                      Central can be personalized as per your industry-specific
                      needs, or custom operational navigation takes place in
                      your organization.
                      <br />
                      <br />
                      To get more information about how this ERP solution can be
                      implemented and leveraged by your specific industry, talk
                      to us, we are here to answer all your queries.
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
                      How much does Dynamics 365 Business Central cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Business Central pricing goes as per your
                      specific business processes. You can choose out of the
                      given licensing options:
                      <br />
                      <br />
                      <ul>
                        <li>Essential</li>
                        <li>Premium</li>
                        <li>Team Member</li>
                      </ul>
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
                      How do I get ongoing support for Dynamics 365 Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      You will get direct support from Dynamics Square as we are
                      a gold partner for Microsoft's products with existence in
                      the UK market and other global locations with a
                      well-equipped support system. Our support system includes
                      end-user training, technical assistance, and off-hours
                      support whenever required.
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
                      How do I get ongoing support for Dynamics 365 Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      You will get direct support from Dynamics Square as we are
                      a gold partner for Microsoft's products with existence in
                      the UK market and other global locations with a
                      well-equipped support system. Our support system includes
                      end-user training, technical assistance, and off-hours
                      support whenever required.
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

export default Solution;
