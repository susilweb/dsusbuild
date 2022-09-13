import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Blog from "./Blog";

import { ExternalLink } from "react-external-link";

const BusinessCentral = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Dynamics 365 Business Central Partner | Dynamics Square
        </title>
        <meta
          name="description"
          content="Automate and manage your end-to-end business processes seamlessly with Dynamics 365 Business Central - A unified business management solution for small business."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/products/dynamics-365-business-central/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        
      </Helmet>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yCJ7C1KS-Jw"
        onClose={() => setOpen(false)}
      />

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <h1>
              Microsoft Dynamics 365 Business Central
              </h1>
              <p>
              Streamline across your business practices to maximize growth potential, drive sustainability, and improve outcomes by implementing Microsoft Dynamics 365 Business Central.
              </p>
              <div>
                <div className="text-center text-lg-start">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/assets/img/Dynamics-365-Business-Central.png"
                alt="Dynamics 365 Business Central"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 ">
            <header className="section-header">
            <h2>
              What is Dynamics 365 Business Central?
            </h2>
            <p>
            Dynamics 365 Business Central is an all-in-one business management solution for SMBs enabling them to optimize sales, finance, services, operations, human resources, and more. Business Central helps automate, accelerate, and simplify your process and optimize operations to ensure maximized revenue outcomes and scalability.
            </p>
          </header>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
        <div className="row justify-content-center">
<div className="col-lg-6 col-md-8">
        <header className="section-header">
            <h2>
            Dynamics 365 Business Central Capabilities
            </h2>
          </header>
          </div></div>
          <div className="row d-lg-none">
           <div className="col-lg-12">
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
                        <span>Finance</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Internal Transactions</h4>
                            <p>Automate and customise the company's internal
                            transactions with restricted access to team members.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Cash flow Forecasting</h4>
                        <p>Manage cash balances and account schedules to
                            estimate future sales and expenses.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Budgeting</h4>
                        <p>Monitor and manage the company's overall financial
                            activities, along with budget control.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Inventory Costing</h4>
                        <p>Maintains the general ledger to manage the
                            inventory, manufacturing costs, and reconcile the
                            costs.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Consolidation and Multi-Companies</h4>
                        <p>With the combination of multiple general ledgers, it
                            can conduct financial analysis of the company.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Costs and Income Allocation</h4>
                        <p> Distribute the entries from one general journal to
                            different accounts.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Banking</h4>
                        <p>With seamless banking integration, it settles bank
                            accounts and funds transfers between accounts.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Cost Accounting</h4>
                        <p>Distribute the budget between actual and budgeted
                            costs for operations and projects to analyze
                            returns.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Fixed Assets</h4>
                        <p>Gives the complete control of fixed assets and
                            ensures timely reduction with D365 Business Central.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Accounts Receivable</h4>
                        <p>Receives payments, settles bank accounts, and
                            collects the remaining balance.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Accounts Payable</h4>
                        <p>Make payments, mark outgoing payments, and manage
                            cheques with D365 BC.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>General Ledger</h4>
                        <p>Manage the credit and debit entries to maintain the
                            entire financial data.</p>
                            </div>
                      </div>
                    </div>
                  </div>
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
                        <span>Sales</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Customer management</h4>
                            <p>Manage customers and keep track of their queries as
                            well.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales Quote</h4>
                        <p>Provides a sales quote to the customer to offer
                            negotiations before making the actual invoice.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales order</h4>
                        <p>Manages the process of creating sales orders with
                            drop shipment and partial shipping functions.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales Invoices</h4>
                        <p>It creates a sales invoice for the actual purchases
                            processed by the buyers.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Drop Shipments</h4>
                        <p>Manages the purchase order to ship the products
                            directly from vendor to customer.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales Returns</h4>
                        <p>Manages the data of sales invoices of the product
                            returned to release the refund amount.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Assembly Order</h4>
                        <p>Create linked assembly orders to process the full or
                            partial order quantity during product
                            unavailability.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Order Planning & Promising</h4>
                        <p>Makes the customers informed about order delivery
                            dates by analysing capable-to-promise or available
                            to promise dates.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Single invoice Multiple Shipments</h4>
                        <p>Combines multiple shipments and invoice a customer
                            once.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Correction or Cancel Unpaid Invoices</h4>
                        <p>Automatically creates sales invoices for corrections
                            in unpaid invoices.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Pick List Creation</h4>
                        <p>Enables users to create a shipment pick-up list from
                            various vendor locations.</p>
                            </div>
                      </div>
                    </div>
                  </div>
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
                        <span>Purchase</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Vendor Management</h4>
                          <p>Creates a vendor card for each vendor to manages all purchases.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Quote</h4>
                          <p>Create purchase quote from the vendor and later
                            convert such quotes into purchase orders.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Order</h4>
                          <p>D365 BC manages all the purchase orders for the
                            vendors.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Invoices</h4>
                          <p>Manages all the purchase invoices and manages vendor
                            data to purchase products with terms.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Items for Sales</h4>
                          <p>D365 BC allows users to create a single invoice for
                            multiple selected purchase invoices.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Returns</h4>
                          <p>Creates invoices for the vendor to show product
                            return data along with the amount to be refunded.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Combine Receipts on Single Invoice</h4>
                          <p>It combines multiple invoices from the same vendor
                            and converts them into a single one.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Electronic Documents</h4>
                          <p>Manages and converts all the electronic invoices to
                            purchase invoices from the vendors.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Date Calculation for Purchase</h4>
                          <p>It reflects the data of products to be received on
                            or before certain dates.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                          <p>It merges all the duplicate records and eliminates
                            all the confusion.</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
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
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <span>Inventory Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Master Management</h4>
                          <p>Creates the items or product cards an organisation
                            generally trades.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Bill of Materials</h4>
                          <p>Creates the structure or data of the parent item to
                            be sold as the parent item’s component kits to
                            stock.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Categorization</h4>
                          <p>Organises the items into categories and maintains an
                            overall overview.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Attributes</h4>
                          <p>Assign the attributes to the different items to make
                            finding a specific item easy.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Catalog</h4>
                          <p>Creates special item card that a company offers to
                            its customers with no inventory</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Counting</h4>
                          <p>Manages to keep the stock of items counted in
                            real-time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                          <p>Manages item availability by location, time, sales
                            event, use on assembly, and production BOMs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Transfer</h4>
                          <p>Manages all the transfer orders to transfer
                            inventory items from one location to another.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Reservation</h4>
                          <p>Reserve some products from inventory for sales,
                            service, purchase, assembly, and production orders.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Tracking</h4>
                          <p>Helps the user to track items using a serial number
                            or lot number in case of a recall situation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Block Items</h4>
                          <p>Blocks some items from entering into sales or
                            purchase lines or in any transaction.</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <span>Warehouse Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Receiving</h4>
                          <p>Manages the record of all item receipts at the
                            warehouse location along with the details of the
                            purchase order.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Shipments</h4>
                          <p>Manages the record of shipped items at the warehouse
                            location along with the details of the sales order.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cross Dock Items</h4>
                          <p>Bypass, pick, and place expedited items in inventory
                            for shipping.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Putting Items Away</h4>
                          <p>Classifies the items received from various available
                            resources as per the configured warehouse process.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Moving Items</h4>
                          <p>Helps the organisation to move items from different
                            locations in the warehouse.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Picking Items</h4>
                          <p>Chooses the items for different purposes as per the
                            data configured in the warehouse.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Automated Data Capture Systems (ADCS)</h4>
                          <p>Track the movements of items in the warehouse using
                            the barcode scanning feature.</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <span>Project Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Creation</h4>
                          <p>The Dynamics 365 BS assists the organisation in
                            creating and managing projects, as well as assigning
                            jobs and planning projects.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Allocations</h4>
                          <p>Distributes resources to various tasks with price
                            management prior to the start of each project.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Time Sheet Management</h4>
                          <p>Prepares the time sheet with job tasks, planning
                            lines, and updates the time sheet lines to the job
                            journal.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Budget Management</h4>
                          <p>Analyze and compare the distribution of the budget
                            across various projects to check the quality, cost,
                            and efficiency.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Consumptions</h4>
                          <p>Keeps a record of all consumption based on various
                            jobs and updates the data in real-time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Supplies</h4>
                          <p>Manages the purchase of all supplies needed to
                            complete a project and keeps track of the item as
                            well as the time spent on it.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project WIP Methods</h4>
                          <p>This feature helps to ensure the creation of correct
                            financial statements and makes a financial
                            estimation of jobs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Progress and Performance</h4>
                          <p>It manages the correct financial statements and the
                            financial value of materials after consumption for a
                            job.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Invoicing</h4>
                          <p>Send the project’s invoice to the customer after the
                            completion of a particular project or schedule it as
                            required.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                          <p>Eliminates the duplicate records of the same vendors
                            to remove the confusion.</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <span>Manufacturing</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Planning</h4>
                          <p>To plan and suggest, the planning system demands a
                            balanced supply chain.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Supply Planning</h4>
                          <p>Plan the supply and adjust the algorithms to meet
                            the manufacturing requirements.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Demand Forecasting</h4>
                          <p>Enables the users to forecast the demand as per
                            expected sales and production.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Creation of Production Order from Sales Order</h4>
                          <p>Manages the production orders from sales demand to
                            cover the exact sales order demand.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Order Planning</h4>
                          <p>Helps to manually plan for sales and production
                            demand, but one BOM level at a time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>MRP & MPS</h4>
                          <p>For supply chain automation, the planning worksheet
                            works on MPS and MRP options.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Requisition Worksheet</h4>
                          <p>Creates data automatically about the supply chain
                            and mentions the demand for refilled items.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Calculate Work Centre Calendar</h4>
                          <p>With D365 Business Central, it reschedules the work
                            centre calendar due to sudden planning changes.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                          <p>Check the availability of a specific item and the
                            insights of events that influence it.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Order</h4>
                          <p>Create production orders manually or automatically
                            with Dynamics 365 Business Central.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Subcontracting</h4>
                          <p>Helps decision makers to outsource the selected
                            processes or operations to a subcontractor.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Consumption & Output</h4>
                          <p>Record, post production output with material and
                            time consumption for single released production
                            line.</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
          </div>


          <div className="row busines-bg g-0">
            <div className="col-lg-3 no-pad">
              <div className="nav flex-column nav-pills  bus-ser-left" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <div className="nav-link active" id="v-pills-Finance-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Finance"  role="tab" aria-controls="v-pills-Finance" aria-selected="true"><h3>Finance</h3></div>
                  <div className="nav-link" id="v-pills-Sales-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Sales"  role="tab" aria-controls="v-pills-Sales" aria-selected="false"><h3>Sales</h3></div>
                  <div className="nav-link" id="v-pills-Purchase-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Purchase"  role="tab" aria-controls="v-pills-Purchase" aria-selected="false"><h3>Purchase</h3></div>
                  <div className="nav-link" id="v-pills-Management-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Management"  role="tab" aria-controls="v-pills-Management" aria-selected="false"><h3>Inventory Management</h3></div>
                  <div className="nav-link" id="v-pills-Inventory-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Inventory"  role="tab" aria-controls="v-pills-Inventory" aria-selected="false"><h3>Warehouse Management</h3></div>
                  <div className="nav-link" id="v-pills-Project-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Project"  role="tab" aria-controls="v-pills-Project" aria-selected="false"><h3>Project Management</h3></div>
                  <div className="nav-link" id="v-pills-Manufacturing-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Manufacturing"  role="tab" aria-controls="v-pills-Manufacturing" aria-selected="false"><h3>Manufacturing</h3></div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-Finance" role="tabpanel" aria-labelledby="v-pills-Finance-tab" >
                  
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Internal Transactions</h4>
                            <p>Automate and customise the company's internal
                            transactions with restricted access to team members.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Cash flow Forecasting</h4>
                        <p>Manage cash balances and account schedules to
                            estimate future sales and expenses.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Budgeting</h4>
                        <p>Monitor and manage the company's overall financial
                            activities, along with budget control.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Inventory Costing</h4>
                        <p>Maintains the general ledger to manage the
                            inventory, manufacturing costs, and reconcile the
                            costs.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Consolidation and Multi-Companies</h4>
                        <p>With the combination of multiple general ledgers, it
                            can conduct financial analysis of the company.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Costs and Income Allocation</h4>
                        <p> Distribute the entries from one general journal to
                            different accounts.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Banking</h4>
                        <p>With seamless banking integration, it settles bank
                            accounts and funds transfers between accounts.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Cost Accounting</h4>
                        <p>Distribute the budget between actual and budgeted
                            costs for operations and projects to analyze
                            returns.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Fixed Assets</h4>
                        <p>Gives the complete control of fixed assets and
                            ensures timely reduction with D365 Business Central.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Accounts Receivable</h4>
                        <p>Receives payments, settles bank accounts, and
                            collects the remaining balance.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Accounts Payable</h4>
                        <p>Make payments, mark outgoing payments, and manage
                            cheques with D365 BC.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>General Ledger</h4>
                        <p>Manage the credit and debit entries to maintain the
                            entire financial data.</p>
                            </div>
                      </div>
                    </div>
                  </div>



                </div>
                <div className="tab-pane fade" id="v-pills-Sales" role="tabpanel" aria-labelledby="v-pills-Sales-tab" >
                  
                <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Customer management</h4>
                            <p>Manage customers and keep track of their queries as
                            well.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales Quote</h4>
                        <p>Provides a sales quote to the customer to offer
                            negotiations before making the actual invoice.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales order</h4>
                        <p>Manages the process of creating sales orders with
                            drop shipment and partial shipping functions.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales Invoices</h4>
                        <p>It creates a sales invoice for the actual purchases
                            processed by the buyers.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Drop Shipments</h4>
                        <p>Manages the purchase order to ship the products
                            directly from vendor to customer.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales Returns</h4>
                        <p>Manages the data of sales invoices of the product
                            returned to release the refund amount.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Assembly Order</h4>
                        <p>Create linked assembly orders to process the full or
                            partial order quantity during product
                            unavailability.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Order Planning & Promising</h4>
                        <p>Makes the customers informed about order delivery
                            dates by analysing capable-to-promise or available
                            to promise dates.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Single invoice Multiple Shipments</h4>
                        <p>Combines multiple shipments and invoice a customer
                            once.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Correction or Cancel Unpaid Invoices</h4>
                        <p>Automatically creates sales invoices for corrections
                            in unpaid invoices.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Pick List Creation</h4>
                        <p>Enables users to create a shipment pick-up list from
                            various vendor locations.</p>
                            </div>
                      </div>
                    </div>
                  </div>


                </div>
                <div className="tab-pane fade" id="v-pills-Purchase" role="tabpanel" aria-labelledby="v-pills-Purchase-tab" >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Vendor Management</h4>
                          <p>Creates a vendor card for each vendor to manages all purchases.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Quote</h4>
                          <p>Create purchase quote from the vendor and later
                            convert such quotes into purchase orders.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Order</h4>
                          <p>D365 BC manages all the purchase orders for the
                            vendors.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Invoices</h4>
                          <p>Manages all the purchase invoices and manages vendor
                            data to purchase products with terms.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Items for Sales</h4>
                          <p>D365 BC allows users to create a single invoice for
                            multiple selected purchase invoices.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Returns</h4>
                          <p>Creates invoices for the vendor to show product
                            return data along with the amount to be refunded.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Combine Receipts on Single Invoice</h4>
                          <p>It combines multiple invoices from the same vendor
                            and converts them into a single one.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Electronic Documents</h4>
                          <p>Manages and converts all the electronic invoices to
                            purchase invoices from the vendors.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Date Calculation for Purchase</h4>
                          <p>It reflects the data of products to be received on
                            or before certain dates.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                          <p>It merges all the duplicate records and eliminates
                            all the confusion.</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-Management" role="tabpanel" aria-labelledby="v-pills-Management-tab" >
                <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Master Management</h4>
                          <p>Creates the items or product cards an organisation
                            generally trades.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Bill of Materials</h4>
                          <p>Creates the structure or data of the parent item to
                            be sold as the parent item’s component kits to
                            stock.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Categorization</h4>
                          <p>Organises the items into categories and maintains an
                            overall overview.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Attributes</h4>
                          <p>Assign the attributes to the different items to make
                            finding a specific item easy.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Catalog</h4>
                          <p>Creates special item card that a company offers to
                            its customers with no inventory</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Counting</h4>
                          <p>Manages to keep the stock of items counted in
                            real-time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                          <p>Manages item availability by location, time, sales
                            event, use on assembly, and production BOMs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Transfer</h4>
                          <p>Manages all the transfer orders to transfer
                            inventory items from one location to another.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Reservation</h4>
                          <p>Reserve some products from inventory for sales,
                            service, purchase, assembly, and production orders.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Tracking</h4>
                          <p>Helps the user to track items using a serial number
                            or lot number in case of a recall situation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Block Items</h4>
                          <p>Blocks some items from entering into sales or
                            purchase lines or in any transaction.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-Inventory" role="tabpanel" aria-labelledby="v-pills-Inventory-tab" >
                <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Receiving</h4>
                          <p>Manages the record of all item receipts at the
                            warehouse location along with the details of the
                            purchase order.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Shipments</h4>
                          <p>Manages the record of shipped items at the warehouse
                            location along with the details of the sales order.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cross Dock Items</h4>
                          <p>Bypass, pick, and place expedited items in inventory
                            for shipping.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Putting Items Away</h4>
                          <p>Classifies the items received from various available
                            resources as per the configured warehouse process.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Moving Items</h4>
                          <p>Helps the organisation to move items from different
                            locations in the warehouse.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Picking Items</h4>
                          <p>Chooses the items for different purposes as per the
                            data configured in the warehouse.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Automated Data Capture Systems (ADCS)</h4>
                          <p>Track the movements of items in the warehouse using
                            the barcode scanning feature.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-Project" role="tabpanel" aria-labelledby="v-pills-Project-tab" >
                <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Creation</h4>
                          <p>The Dynamics 365 BS assists the organisation in
                            creating and managing projects, as well as assigning
                            jobs and planning projects.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Allocations</h4>
                          <p>Distributes resources to various tasks with price
                            management prior to the start of each project.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Time Sheet Management</h4>
                          <p>Prepares the time sheet with job tasks, planning
                            lines, and updates the time sheet lines to the job
                            journal.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Budget Management</h4>
                          <p>Analyze and compare the distribution of the budget
                            across various projects to check the quality, cost,
                            and efficiency.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Consumptions</h4>
                          <p>Keeps a record of all consumption based on various
                            jobs and updates the data in real-time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Supplies</h4>
                          <p>Manages the purchase of all supplies needed to
                            complete a project and keeps track of the item as
                            well as the time spent on it.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project WIP Methods</h4>
                          <p>This feature helps to ensure the creation of correct
                            financial statements and makes a financial
                            estimation of jobs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Progress and Performance</h4>
                          <p>It manages the correct financial statements and the
                            financial value of materials after consumption for a
                            job.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Invoicing</h4>
                          <p>Send the project’s invoice to the customer after the
                            completion of a particular project or schedule it as
                            required.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                          <p>Eliminates the duplicate records of the same vendors
                            to remove the confusion.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-Manufacturing" role="tabpanel" aria-labelledby="v-pills-Manufacturing-tab" >
                <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Planning</h4>
                          <p>To plan and suggest, the planning system demands a
                            balanced supply chain.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Supply Planning</h4>
                          <p>Plan the supply and adjust the algorithms to meet
                            the manufacturing requirements.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Demand Forecasting</h4>
                          <p>Enables the users to forecast the demand as per
                            expected sales and production.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Creation of Production Order from Sales Order</h4>
                          <p>Manages the production orders from sales demand to
                            cover the exact sales order demand.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Order Planning</h4>
                          <p>Helps to manually plan for sales and production
                            demand, but one BOM level at a time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>MRP & MPS</h4>
                          <p>For supply chain automation, the planning worksheet
                            works on MPS and MRP options.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Requisition Worksheet</h4>
                          <p>Creates data automatically about the supply chain
                            and mentions the demand for refilled items.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Calculate Work Centre Calendar</h4>
                          <p>With D365 Business Central, it reschedules the work
                            centre calendar due to sudden planning changes.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                          <p>Check the availability of a specific item and the
                            insights of events that influence it.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Order</h4>
                          <p>Create production orders manually or automatically
                            with Dynamics 365 Business Central.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Subcontracting</h4>
                          <p>Helps decision makers to outsource the selected
                            processes or operations to a subcontractor.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Consumption & Output</h4>
                          <p>Record, post production output with material and
                            time consumption for single released production
                            line.</p>
                        </div>
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
          <div className="row g-5">
            <div className="col-lg-5 align-self-center">
              <div className="wy-sultion-left-head">
                <h2>
                  Microsoft Dynamics 365 <br />
                  Business Central Features
                </h2>
                <h3>
                Reasons for Moving to Microsoft Dynamics 365 Business Central?
                </h3>
              </div>
              <div className="m-o-t m-o-t-b">
                <NavLink
                  to="/dynamics-365-business-central-features/"
                  className="btn-get-started scrollto"
                >
                  <span>Read More Features </span>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6 col-md-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      An Integrated <br />
                      Business Approach
                      </h3>
                      <div className="overlay">
                        <p>
                        Dynamics 365 Business Central is a complete business solution package that helps enterprises seamlessly connect & operate processes while optimizing growth and scalability.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Simplified Reporting
                        <br />& Analytics
                      </h3>
                      <div className="overlay">
                        <p>
                        Leveraging inbuilt reporting and analytics capabilities, enable your workforce to make instant yet productive decisions. To enrich reporting with visuals, integrate your Business Central with <NavLink to="/products/microsoft-power-bi/">Power BI</NavLink>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Sound
                        <br />
                        Customer Experiencee
                      </h3>
                      <div className="overlay">
                        <p>
                        D365 Business Central comes with customer-driven features whereby you can connect & engage potential customers in real-time while providing flexibility to remain connected using cross-devices.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Customization
                        <br />& Integrationm
                      </h3>
                      <div className="overlay">
                        <p>
                        Business Central comes with easy-to-customize capabilities addressing your specific business needs. Enterprises can also utilize seamless integration with existing systems as well as Microsoft's products.
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
      <section className="call_to_action call_to_action-n">
        <div className="container">
          <div className="swiper solution_new_callto">
            <div className="swiper-wrapper">
              <Swiper
                autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-8 align-self-center">
                        <div className="call_to_action-left">
                          <h3>Dynamics NAV to Business Central Upgrade!</h3>
                          <p>
                            Are you looking to upgrade from Dynamics NAV to
                            Dynamics 365 BC?
                          </p>
                          <div className="new-btn new-btn-nn">
                            <NavLink
                              to="/dynamics-nav-to-business-central/"
                              className="btn-get-started-color"
                            >
                              <span>Learn More</span>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 align-self-center">
                        <div className="call_to_action-right">
                          <img
                            src="/assets/img/Group-683.png"
                            alt="microsft dynamics Nav"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

               
              </Swiper>
            </div>

            <div className="swiper-pagination"></div>
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
                    src="/assets/img/bisin_leftimg.jpg"
                    className="fix-im"
                    alt="Business Central Services"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <NavLink
                        to="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/assets/img/Video-Business Central.png"
                          alt="Video Business Central"
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
                <h2>Business Central Services</h2>
                <p>
                Deploy Microsoft D365 Business Central in the cloud or on-premises - on any device, anywhere.

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
                  <h3>
                    Business Central Implementation
                  </h3>
                  <p>
                  Enrich your system with Business Central implementation to support your continuously growing practices.
                  </p>
                  <div className="action-content">
                    <NavLink to="/dynamics-365-business-central-implementation/">
                      Get Started
                    </NavLink>
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
                  <h3>
                    Business Central Upgrade
                  </h3>
                  <p>
                  Upgrade your system to upgrade your business capabilities and carry out your potentials.
                  </p>
                  <div className="action-content">
                    <NavLink to="/dynamics-365-business-central-upgrade/">
                      Get Started
                    </NavLink>
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
                  <h3>
                    Business Central Support
                  </h3>
                  <p>
                  Ensure your business is growing at its peak with no interruptions through our Fully-equipped support.
                  </p>
                  <div className="action-content">
                    <NavLink to="/dynamics-365-business-central-support/">
                      Get Started
                    </NavLink>
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
            <h2>Dynamics 365 Business Central Pricing & Licensing</h2>
            <p>
              Explore D365 Business Central Pricing for Team Members, Essentials
              & Premium Plans
            </p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="box">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Essentials
                </h3>
                <div className="price">
                  <sup>$</sup>70<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Financial Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Inventory Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Purchase Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Project Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Premium
                </h3>
                <div className="price">
                  <sup>$</sup>100<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Financial Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Inventory Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Sales Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Purchase Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Project Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Service Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Manufacturing
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Team Members
                </h3>
                <div className="price">
                  <sup>$</sup>8<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Read and Approve
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Employee Self Serve
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Run All Reports
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn d-flex justify-content-center">
                <NavLink
                  data-bs-toggle="modal"
                  to="#exampleModal"
                  className="btn-get-red"
                >
                  <span>Get Started Now</span>
                </NavLink>
                <ExternalLink
                  href="/assets/pdf/Dynamics-365-Licensing-Guide-June-2022.pdf"
                  className="btn-get-whit"
                  target="_blank"
                  rel=""
                >
                  <span>See Licensing Guide</span>
                </ExternalLink>
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
                <h3>Dynamics 365 Business Central Implementation</h3>
                <p>
                  Maximize your business potentials and overcome business
                  challenges by implementing Dynamics 365 Business Central
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <NavLink
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Learn More The About Implementation Process </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs-extra">
        <div className="container">
        <div className="row justify-content-center">
<div className="col-lg-7 col-md-8">
          <header className="section-header">
            <h2>
              Check out our Best Resources
             
              for Business Central
            </h2>
          </header>
          </div></div>
          <div className="row top-2 gx-5">
            <Blog />
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <NavLink
                      target="_blank"
                      to="/assets/pdf/Is-Your-Business-Outgrowing-Your-Accounting-Software.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Is Your
                      Business Outgrowing Your Accounting Software?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assets/pdf/Business-Owners-Guide.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Business
                      Owner's Guide
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assets/pdf/Reimagine-Productivity.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Reimagine
                      Productivity
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assets/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Licensing Guide
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assets/pdf/Four-Technology-Trends-Helping-Businesses-Thrive-in-a-Digital-World.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Technology
                      Trends Helping Businesses Thrive in a Digital World
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assets/pdf/Reinvent-productivity-with-Dynamics-365-and-Microsoft-365.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Reinvent
                      productivity with Dynamics 365 and Microsoft 365
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/assets/pdf/The-Total-Economic-Impact-of-Microsoft-Dynamics-365-Business-Central.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> The Total
                      Economic Impact of Dynamics 365 Business Central
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="blogs-extra-title">
                <h3>Learn More</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <ExternalLink
                      rel=""
                      href="/why-choose-microsoft-dynamics-365-business-central/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Why Choose
                      Microsoft Dynamics 365 Business Central?
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      rel=""
                      href="/advantages-capabilities/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Advantages
                      and Capabilities
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      rel=""
                      href="https://www.dynamicssquare.com/upgrade-dynamics-nav-to-dynamics-365-business-central/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Why to
                      Upgrade Dynamics NAV to Business Central
                    </ExternalLink>
                  </li>
                  <li>
                    <ExternalLink
                      rel=""
                      href="https://www.dynamicssquare.com/reasons-to-upgrade-accounting-software/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Is Your
                      Business Outgrowing Your Accounting Software?
                    </ExternalLink>
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
            <h2>
              Have you got
              <br />
              questions about Business Central?
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
                      What is Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Dynamics 365 Business Central is a complete business solution package that comes with both on-cloud and on-premised facilitation and is designed to support and drive entire enterprise practices. Business Central is simple to use as comprising excel-like functionality, thereby, advanced excel users can instantly start leveraging the Business Central capabilities. It empowers enterprises to streamline and automate their tasks and processes by enabling connected and collaborated experience. With Business Central, enterprises can manage their end-to-end process flow from finance and supply chain to sales, warehousing, project management, manufacturing & distribution to project automation, reporting & analytics, and more.

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
                      How is Business Central related to Dynamics NAV?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                    Dynamics 365 Business Central is the updated version of <NavLink to="/products/microsoft-dynamics-nav/">Dynamics NAV</NavLink>. With its upgrade, Microsoft changed its name too. The Core functionality remains the same and is updated with advanced features and navigation to support modern enterprises and to serve every industry. However, existing Dynamics NAV users can still avail of the support services. Dynamics Square offers highly reliable and efficient NAV and Business Central Support Services at cost-effective rates.
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
                      <p>
                      If you are willing to upgrade to Dynamics 365 Business Central, Dynamics Square can implement a highly configured solution for your business. Upgrading to Dynamics 365 either from NAV or other existing systems requires experts’ practices and years of proficiency. Team at Dynamics Square comprises all the required skill sets and years of expertise to implement a solution fulfilling your customized business needs.
                      </p>
                      <p>
                      For more clarification or avail of our free system health check, call us today, we can help.
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
                    Business Central is designed and configured to support all the industries from E-commerce to <NavLink to="/industries/food-and-beverages/">food & beverages</NavLink>, <NavLink to="/industries/manufacturing/">Manufacturing & Distribution</NavLink>, Professional Services to Non-Profit. Business Central could be a quite effective deal for Startups too if you are willing to jumpstart your business and start simplifying and enabling automation in your practices from the very initial. <p>To know more about how Business Central can be implemented for your specific industry to drive an effective and efficient approach throughout your business premises, connect to our professionals today.

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
                      <p>
                      When you plan for Dynamics 365 Business Central implementation, your pricing may vary depending on your process requirement and the complexity of your business flow. Here are the standard options available for buying Business Central:
                      </p>
                      <ul>
                        <li>Essential - You will be charged $70 per user/per month for the Business Central essential plan.</li>
                        <li>Premium - Premium plan will ask you to pay $100 per user/per month.</li>
                        <li>Team Member</li>
                      </ul>
                      <p>
                      To know which plan would be a cost-effective and process-efficient deal for your business, just call our experts, we are here to help.
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
                      <p>
                      Dynamics Square has a highly embedded support system to provide timely, efficient, and flexible support to our clients. Whether your requirement goes for end-user training, prepaid hour support, or ad-hoc support, we believe in a flexible support model suited to your specific requirement and budget.
                      </p>
                      <p>
                      To know more about how our support model works and which support plan could be a vital one for your business, connect to our experts today.
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
                      data-bs-target="#faq-content-7"
                    >
                      How does Power BI Fit with Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                      Business Central is an all-in-one solution for all your business requirements. With D365 Business Central, enterprises can manage their entire practices including sales, <NavLink to="/products/microsoft-dynamics-365-finance/">finance</NavLink> , customers, manufacturing, <NavLink to="/products/dynamics-365-supply-chain-management/">supply chain</NavLink>, project operations, human resources, and reporting & analytics.
                      </p>
                      <p>
                      Since Business Central is quite flexible and thereby, can be integrated with any of Microsoft’s applications as well as with your existing system configurations. Thus, if your requirement goes for advanced reporting capabilities, then Power BI is the high-end solution to drive so. Enterprises can integrate their Business Central with Power BI to drive effective reporting strategies and avail of required key analytics to strengthen their decision-making.
                      </p>
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

export default BusinessCentral;
