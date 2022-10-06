
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
const MyComponents = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Microsoft Azure | Microsoft Azure Cloud Services</title>
        <link rel="canonical" href="" />
        <meta
          name="description"
          content="Microsoft Azure is referred to cloud computing service owned and operated by Microsoft to manage hosted applications via its Microsoft-managed data centers."
        />
        <meta content="" name="keywords" />
      </Helmet>

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft <br /> Dynamics 365
                <br />
                Finance
              </h1>
              <h2>
                Boost your organization's ability to develop, modify and control
                budgets, make faster financial decision making with Microsoft
                Dynamics 365 Finance.
              </h2>
              <div>
                <div className="text-center text-lg-start">
                  <NavLink
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/assets/img/Dynamics-365-Finance-Banner-1.svg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
                Microsoft Dynamics
                <br />
                Partner Glasgow
              </h1>
              <h2>
                We are experienced Microsoft Gold Partners based in Glasgow, UK.
              </h2>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/assets/img/Microsoft-Dynamics-Partner-Glasgow.png"
                alt="Microsoft-Dynamics-Partner-Glasgow"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h2>
              Deliver A Flexible, Scalable Solution <br />
              That Adapts To Your Needs & Processes.
            </h2>
            <p>
              Streamline your supply chain, avoid production delays and
              equipment downtime, ensure quality delivery, and remotely monitor
              your
              <br />
              devices & service equipment all through by implementing Azure IoT
              intelligence in your business.
            </p>
          </header>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <div className="wr-in">
                          <img
                            src="/assets/img/icons-azure_cloud-embed.svg"
                            alt="icons-azure_cloud-embed"
                          />
                        </div>
                        <span>Azure IoT hub</span>
                      </button>
                    </h2>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Connect and manage your IoT (Internet of Things) devices
                        and drive highly secured data communications between
                        your connected devices and IoT applications. With Azure
                        IoT hub solutions, connect your devices virtually in the
                        backend and ensure a security-enabled communication
                        channel to send and receive data leveraging IoT devices.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <div className="wr-in">
                          <img
                            src="/assets/img/icons-azure_agile.svg"
                            alt="icons-azure_agile"
                          />
                        </div>
                        <span>Azure IoT Central</span>
                      </button>
                    </h2>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Drive highly integrated and connected experience with
                        Azure IoT Central. Develop and deploy secure, scalable,
                        and growth encouraging IoT solutions. Integrate your IoT
                        solutions with your existing system or business app to
                        drive anticipated results. Predict your investments in
                        IoT solutions, ensure quick connectivity between your
                        IoT devices and drive transparency between your
                        applications and IoT data.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="/assets/img/icons-azure_project-management.svg"
                            alt="icons-azure_project-management"
                          />
                        </div>
                        <span>Azure Sphere</span>
                      </button>
                    </h2>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Azure Sphere is designed to protect your data, devices,
                        and overall involved infrastructure. It helps to enable
                        multiple protection layers to secure your data and
                        devices against any security threats or attempts and
                        ensures a secure and trustworthy platform to drive new
                        IoT experiences. Azure Sphere also helps to monitor
                        potential threats and support ongoing servicing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr className="mob-disp" />
                <div className="accordion" id="accneww">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="/assets/img/icons-azure_innovation.svg"
                            alt="icons-azure_innovation"
                          />
                        </div>
                        <span>Azure Digital Twins</span>
                      </button>
                    </h2>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        With Azure Digital Twins - an IoT platform, develop a
                        digital demonstration of real-world things, data,
                        people, or business processes to get valuable integrated
                        insights helping your business to optimize operations &
                        costs and drive better product strategy along with
                        improved customer experience with continuity and
                        reliability.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <div className="wr-in">
                          <img
                            src="/assets/img/icons-azure_security.svg"
                            alt="icons-azure_security"
                          />
                        </div>
                        <span>Azure IoT Edge</span>
                      </button>
                    </h2>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Implement Azure IoT Edge on-premises to centralize data
                        and seamlessly drive operational data in the Microsoft
                        Azure cloud. Ensure secure and remote deployment of
                        cloud-native processes or workloads including AI, Azure
                        services, etc. to directly connect and process on your
                        IoT devices. Effectively drive IoT connected approach
                        with cloud intelligence implemented locally on IoT
                        devices.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <div className="wr-in">
                          <img
                            src="/assets/img/icons-azure_machine-learning.svg"
                            alt="icons-azure_machine-learning"
                          />
                        </div>
                        <span>Azure Machine Learning</span>
                      </button>
                    </h2>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Strengthen your development capability and equip your
                        developers to develop, deploy, and manage high-end data
                        models. With Azure Machine Learning, leverage integrated
                        tools and ensure premium support to available
                        open-source frameworks and libraries. Deploy data models
                        with just a single click and manage efficiently all
                        through Machine Learning Operations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>
              Power Your Business With
              <br />
              Microsoft Business Apps
            </h2>
            <p>Dedicated Microsoft Dynamics 365 experts, just for you!</p>
          </header>
          <div className="row gy-2">
            <div className="col-lg-4 col-md-6">
              <div className="service-box blue">
                <img
                  src="/assets/img/business-center-logo.svg"
                  alt="business-center-logo"
                  className="icon"
                />
                <h3>
                  Dynamics 365 <br />
                  Business Central
                </h3>
                <p>
                  Drive an efficient business model on the cloud while keeping
                  real-time eyes on your sales insights, effectively manage your
                  finance, and ensure a sound customer experience with Microsoft
                  Dynamics 365 Business Central.
                </p>
                <Link
                  to="/products/dynamics-365-business-central/"
                  className="read-more"
                >
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box orange">
                <img
                  src="/assets/img/finace-icons.svg"
                  alt="finace-icons"
                  className="icon"
                />
                <h3>
                  Dynamics 365 <br />
                  Finance
                </h3>
                <p>
                  Simplify your finance hierarchy and boost your organization's
                  ability to develop, modify and control budgets, make faster
                  and more informed financial decision making with Microsoft
                  Dynamics 365 Finance.
                </p>
                <Link
                  to="/products/microsoft-dynamics-365-finance/"
                  className="read-more"
                >
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box green">
                <img
                  src="/assets/img/supplychain-logo.svg"
                  alt="supplychain-logo"
                  className="icon"
                />
                <h3>
                  Dynamics 365 <br />
                  Supply Chain
                </h3>
                <p>
                  Explore new Supply Chain capabilities, optimize resources,
                  maximize operational efficiency, and accelerate time to market
                  while keeping real-time eyes in your end-to-end supply chain
                  operations.
                </p>
                <Link
                  to="/dynamics-365-supply-chain-management/"
                  className="read-more"
                >
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-box red">
                <img
                  src="/assets/img/Sales_scalable.svg"
                  alt="Sales_scalable"
                  className="icon"
                />
                <h3>
                  Dynamics 365 <br />
                  Sales
                </h3>
                <p>
                  Upgrade your system with Microsoft Dynamics 365 Sales to
                  impact your sales drive and improve sound customer
                  relationships to elevate your business values while maximizing
                  your revenue outcomes.
                </p>
                <Link to="/microsoft-dynamics-365-sales/" className="read-more">
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="service-box purple">
                <img
                  src="/assets/img/Powerapps_power-apps.svg"
                  alt="Powerapps_power-apps"
                  className="icon"
                />
                <h3>
                  Microsoft <br />
                  Power BI
                </h3>
                <p>
                  Steadily monitor your business activities with power-packed
                  data visualization and real-time reporting insights to make
                  informed decisions for better productivity ahead.
                </p>
                <Link to="/products/microsoft-power-bi/" className="read-more">
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="service-box pink">
                <img
                  src="/assets/img/Azure-IoT.svg"
                  alt="Azure-IoT"
                  className="icon"
                />
                <h3>
                  Internet Of <br />
                  Things
                </h3>
                <p>
                  Outreach more efficient, scalable, and secure data
                  distribution practices by simply integrating cloud-equipped,
                  modernized, and seamless data-driven solutions with Microsoft
                  Azure.
                </p>
                <Link
                  to="/products/azure-iot-internet-of-things/"
                  className="read-more"
                >
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services hero-1 hero">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Become an Industry leader</h2>
            <p>By implementing Dynamics 365 Business Applications</p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/assets/img/StartUp-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Startup</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Startup</h3>
                  <p>
                    With Microsoft Dynamics Business Solutions, startups can
                    streamline their business efficiency and ensure levelling up
                    their business in a shorter time span.
                  </p>
                  <Link
                    to="/industries/startup/"
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/assets/img/Not for Profit--icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="Not for Profit"
                  />
                  <h3>Not for Profit</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Not for Profit</h3>
                  <p>
                    Our experienced Dynamics consultants in the UK can help to
                    streamline your end-to-end non-profit practices across your
                    organization or divisions.
                  </p>
                  <Link
                    to="/industries/microsoft-cloud-for-nonprofit/"
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/assets/img/E-Commerce-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>E-Commerce</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>E-Commerce</h3>
                  <p>
                    Automate your entire e-commerce operations from ordering and
                    inventory management to supply chain efficiency to final
                    customer delivery with Dynamics 365 E-commerce.
                  </p>
                  <Link
                    to="/industries/ecommerce/"
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/assets/img/Manufacturing & Distribution-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Manufacturing & Distribution</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Manufacturing & Distribution</h3>
                  <p>
                    By eliminating redundancies, our experts in the United
                    Kingdom can boost efficiency in your manufacturing &
                    distribution model through D365 Business Applications.
                  </p>
                  <Link
                    to="/industries/microsoft-cloud-for-manufacturing/"
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/assets/img/Professional Services-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Professional Services</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Professional Services</h3>
                  <p>
                    We help to automate and streamline your professional
                    services from managing finances, customers, and clients to
                    projects while reducing costs and equipping efficiency.
                  </p>
                  <Link
                    to="/industries/professional-services/"
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="figer-box">
                <div className="top">
                  <img
                    src="/assets/img/Food & Beverages-icons.png"
                    width="50"
                    height="50"
                    className="boxshadow"
                    alt="StartUp-icons"
                  />
                  <h3>Food & Beverages</h3>
                </div>
                <div className="over-layer-cont">
                  <h3>Food & Beverages</h3>
                  <p>
                    We deep-dive your industry-specific needs and implement a
                    next-generation Microsoft D365 Solution delivering true
                    values to your food & beverages business domain.
                  </p>
                  <Link
                    to="/industries/food-and-beverages/"
                    className="boxshadow kallyas-button kallyas-button-nn"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4">
              <div className="centerflipcard">
                <div className="square-flip">
                  <div className="square">
                    <div className="square-container">
                      <div className="align-center">
                        <img
                          src="/assets/img/StartUp-icons.png"
                          width="50"
                          height="50"
                          className="boxshadow"
                          alt="Not for Profit--icons"
                        />
                      </div>
                      <h3 className="textshadow">Not for Profit</h3>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                  <div className="square2">
                    <div className="square-container2">
                      <div className="align-center">
                        <h3 className="textshadow">Not for Profit</h3>
                        <p>
                          Our experienced Dynamics consultants in the UK can
                          help to streamline your end-to-end non-profit
                          practices across your organization or divisions.
                        </p>
                      </div>
                      <a
                        to="#"
                        target="_blank"
                        className="boxshadow kallyas-button"
                      >
                        Learn More
                      </Link>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="centerflipcard">
                <div className="square-flip">
                  <div className="square">
                    <div className="square-container">
                      <div className="align-center">
                        <img
                          src="/assets/img/Not for Profit--icons.png"
                          width="50"
                          height="50"
                          className="boxshadow"
                          alt="Not for Profit--icons"
                        />
                      </div>
                      <h3 className="textshadow">Not for Profit</h3>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                  <div className="square2">
                    <div className="square-container2">
                      <div className="align-center">
                        <h3 className="textshadow">Not for Profit</h3>
                        <p>
                          Our experienced Dynamics consultants in the UK can
                          help to streamline your end-to-end non-profit
                          practices across your organization or divisions.
                        </p>
                      </div>
                      <a
                        to="#"
                        target="_blank"
                        className="boxshadow kallyas-button"
                      >
                        Learn More
                      </Link>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="centerflipcard">
                <div className="square-flip">
                  <div className="square">
                    <div className="square-container">
                      <div className="align-center">
                        <img
                          src="/assets/img/E-Commerce-icons.png"
                          width="50"
                          height="50"
                          className="boxshadow"
                          alt="E-Commerce-icons"
                        />
                      </div>
                      <h3 className="textshadow">E-Commerce</h3>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                  <div className="square2">
                    <div className="square-container2">
                      <div className="align-center">
                        <h3 className="textshadow">E-Commerce</h3>
                        <p>
                          Automate your entire e-commerce operations from
                          ordering and inventory management to supply chain
                          efficiency to final customer delivery with Dynamics
                          365 E-commerce.
                        </p>
                      </div>
                      <a
                        to="#"
                        target="_blank"
                        className="boxshadow kallyas-button"
                      >
                        Learn More
                      </Link>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="500">
              <div className="centerflipcard">
                <div className="square-flip">
                  <div className="square">
                    <div className="square-container">
                      <div className="align-center">
                        <img
                          src="/assets/img/Manufacturing & Distribution-icons.png"
                          width="50"
                          height="50"
                          className="boxshadow"
                          alt="Manufacturing & Distribution-icons"
                        />
                      </div>
                      <h3 className="textshadow">
                        Manufacturing & Distribution
                      </h3>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                  <div className="square2">
                    <div className="square-container2">
                      <div className="align-center">
                        <h3 className="textshadow">
                          Manufacturing & Distribution
                        </h3>
                        <p>
                          By eliminating redundancies, our experts in the United
                          Kingdom can boost efficiency in your manufacturing
                          &amp; distribution model through D365 Business
                          Applications.
                        </p>
                      </div>
                      <a
                        to="#"
                        target="_blank"
                        className="boxshadow kallyas-button"
                      >
                        Learn More
                      </Link>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
              <div className="centerflipcard">
                <div className="square-flip">
                  <div className="square">
                    <div className="square-container">
                      <div className="align-center">
                        <img
                          src="/assets/img/Professional Services-icons.png"
                          width="50"
                          height="50"
                          className="boxshadow"
                          alt="Professional Services-icons"
                        />
                      </div>
                      <h3 className="textshadow">Professional Services</h3>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                  <div className="square2">
                    <div className="square-container2">
                      <div className="align-center">
                        <h3 className="textshadow">Professional Services</h3>
                        <p>
                          We help to automate and streamline your professional
                          services from managing finances, customers, and
                          clients to projects while reducing costs and equipping
                          efficiency.
                        </p>
                      </div>
                      <a
                        to="#"
                        target="_blank"
                        className="boxshadow kallyas-button"
                      >
                        Learn More
                      </Link>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="700">
              <div className="centerflipcard">
                <div className="square-flip">
                  <div className="square">
                    <div className="square-container">
                      <div className="align-center">
                        <img
                          src="/assets/img/Food & Beverages-icons.png"
                          width="50"
                          height="50"
                          className="boxshadow"
                          alt="Food & Beverages-icons"
                        />
                      </div>
                      <h3 className="textshadow">Food & Beverages</h3>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                  <div className="square2">
                    <div className="square-container2">
                      <div className="align-center">
                        <h3 className="textshadow">Food & Beverages</h3>
                        <p>
                          We deep-dive your industry-specific needs and
                          implement a next-generation Microsoft D365 Solution
                          delivering true values to your food &amp; beverages
                          business domain.
                        </p>
                      </div>
                      <a
                        to="#"
                        target="_blank"
                        className="boxshadow kallyas-button"
                      >
                        Learn More
                      </Link>
                    </div>
                    <div className="flip-overlay"></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="Health-Check">
        <div className="container">
          <header className="section-header">
            <h2>
              Dynamics 365
              <br />
              System Health Check
            </h2>
            <p>
              Enlarge your business capabilities and ensure your business <br />
              continuity with our Dynamics 365 system health check program.
            </p>
          </header>
          <div className="row">
            <div className="col-lg-6 aos-init align-self-center">
              <img
                src="/assets/img/hero-img.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content align-self-center">
              <ul>
                <li>
                  Considering your present business requirements and future
                  business anticipations, we diagnose your real-time
                  requirements demonstrating your future approach.
                </li>
                <li>
                  Consultants at Dynamics Square provide free system
                  health-check to discover the optimum and customized Microsoft
                  Dynamics 365 needs as per your distinct business context.
                </li>
                <li>
                  Now, it's time to decide whether you want to stay with your
                  existing equipped system or would love to schedule a Microsoft
                  Dynamics Demo to implement a modern-equipped system.
                </li>
              </ul>
              <Link
                to="/free-dynamics-365-system-health-check/"
                className="read-more"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                Get Free System Health Check
                <i className="bi bi-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom custom001">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <img
                    src="/assets/img/d605-left.png"
                    className="fix-im"
                    alt="d605-left"
                  />
                  <div className="video-ytube">
                    <div className="popup-btn">
                      <Link data-bs-toggle="modal" to="#exampleModalToggle">
                        <img src="/assets/img/contactfor-sede-img.jpg" />
                        <span className="cente-icns">
                          <img
                            src="/assets/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h3>
                  What is Microsoft <br />
                  Dynamics 365
                </h3>
              </div>
              <div className="custom002">
                <p>
                  <Link to="/products/microsoft-dynamics-365/">
                    Microsoft Dynamics 365
                  </Link>{" "}
                  is a comprehensive business solution package that helps or
                  strengthens businesses to manage their processes thoroughly
                  with powerful AI insights, automation, and a simplified
                  approach. Microsoft Dynamics 365 is designed to support your
                  business potential and adapt to new challenges to drive and
                  sustain growth while uplifting productivity and maximizing
                  revenues.
                  <br />
                  <br />
                  Addressing your core business practices and defining your
                  business context, Microsoft Dynamics 365 Business Applications
                  can be configured to work together when integrated with your
                  existing system. Enterprises can choose out of the available
                  applications and can get them configured to strengthen their
                  continuously enlarging business capabilities while connecting
                  resources, practices, and customers.
                  <br />
                  <br />
                  Dynamics Square is one of the UK's leading{" "}
                  <Link to="/products/microsoft-dynamics-365/">
                    Microsoft Dynamics 365 Partners
                  </Link>{" "}
                  helping your business to automate, streamline and control all
                  your core departments.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-bg">
        <div className="container">
          <header className="section-header">
            <h2>Microsoft dynamics 365 Suite</h2>
            <p>
              Drive innovative and strategic approach through your business
              premises with intelligent connected processes, data insights, and
              adaptive Dynamics 365 CRM & ERP solutions.
            </p>
          </header>
          <div className="row p-lg-6">
            <div className="col-lg-6 align-self-center">
              <div className="side-heding-new">
                <h3>
                  Dynamics 365
                  <br />
                  Support Plans
                  <br />
                  We Offer
                </h3>
                <p>
                  Dynamics Square will handle every aspect of your Dynamics 365
                  system from user support, training, customization, technical
                  consultancy to development work.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
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
                        <div className="wr-ins">
                          <img
                            src="/assets/img/Group1404.svg"
                            alt="Group1404"
                          />
                        </div>
                        <span>Ad-Hoc Support</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Our support services are designed to instantly and
                        accurately resolve the system issues that occur to
                        interrupt the partial, entire, or dependent workflow.
                      </div>
                    </div>
                  </div>
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
                        <div className="wr-ins">
                          <img
                            src="/assets/img/Group1403.svg"
                            alt="Group1403"
                          />
                        </div>
                        <span>Prepaid Hours Support</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        When it comes to our Prepaid Support model, we can help
                        enterprises with our ongoing support or priority
                        support. Our Prepaid Support is a 50-hours of support
                        strategy that involves all your priority needs
                        supporting your ongoing business processes or hourly
                        requirements. We assist enterprises with our quick
                        dedicated resolution enabling continuous process flow.
                      </div>
                    </div>
                  </div>
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
                        <div className="wr-ins">
                          <img
                            src="/assets/img/Group1402.svg"
                            alt="Group1402"
                          />
                        </div>
                        <span>Annual Support</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Our next support model is an annual support model
                        whereby we take charge of all your general
                        system-related issues including bug fixing, process
                        abundance, and other system complications that downgrade
                        your system capabilities. Our proficient support team
                        helps to sustain and improve your workflow and enables
                        you to leverage the maximized utilization of Dynamics
                        365.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-333">
        <div className="container">
          <header className="section-header">
            <h3>Power Platform and Business Central</h3>
            <p>
              <b>
                All the potential of Power Platform integrated with your ERP
              </b>
              <br />
              <br />
              Currently it is possible to use any of the Power Platform
              applications with Dynamics 365 Business Central through different
              connectors:
            </p>
          </header>
          <div className="row pad10x">
            <div className="col-lg-4">
              <div className="commen-box-2 commen-box-9">
                <div className="icons icons-0101">
                  <img
                    src="/assets/img/combo-icon_BI-Bcentral.svg"
                    alt="combo-icon_BI-Bcentral"
                  />
                </div>
                <div className="commen-boc-2-info">
                  <h3>
                    Power BI + <br />
                    Business Central
                  </h3>
                  <p>
                    The reporting center role is embedded with Power BI. Through
                    the Web Service connector, you can integrate the ERP data
                    automatically.
                  </p>
                </div>
                <div className="btn-003">
                  <a href="#" className="btn btn md btn-danger">
                    Get Integration
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="commen-box-2 commen-box-9">
                <div className="icons icons-0101">
                  <img
                    src="/assets/img/combo-icon_powerapps-bcentral.svg"
                    alt="combo-icon_powerapps-bcentral"
                  />
                </div>
                <div className="commen-boc-2-info">
                  <h3>
                    Power Apps + <br />
                    Business Central
                  </h3>
                  <p>
                    To link Power Apps and Power Automate with Dynamics 365
                    Business Central, it can be done through the available API
                    connector.
                  </p>
                </div>
                <div className="btn-003">
                  <a href="#" className="btn btn md btn-danger">
                    Get Integration
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="commen-box-2 commen-box-9">
                <div className="icons icons-0101">
                  <img
                    src="/assets/img/combo-icon_virtualagent-bcentral.svg"
                    alt="combo-icon_virtualagent-bcentral"
                  />
                </div>
                <div className="commen-boc-2-info">
                  <h3>
                    Power Automate + <br />
                    Business Central
                  </h3>
                  <p>
                    Link the automation solution to Dynamics 365 Business
                    Central <br />
                    using reusable flow templates.
                  </p>
                </div>
                <div className="btn-003">
                  <a href="#" className="btn btn md btn-danger">
                    Get Integration
                  </a>
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
                How IoT Implementation help to improve your operational flow?
              </h3>
              <h4>Azure IoT (Internet of things) Features</h4>
              <div className="m-o-t m-o-t-b">
                <NavLink to="#about" className="btn-get-started scrollto">
                  <span>Know More</span>
                </NavLink>
              </div>
              {/* <div className="downlad_guid">
                        <NavLink to="#">
                        <span>Download Microsoft Guide</span>
                        </NavLink>
                     </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Optimize <br />
                        Supply Chain
                      </h3>
                      <div className="overlay">
                      <p>
                        Optimize your supply chain by monitoring and regulating
                        in real-time. Stay updated with inventory levels,
                        warehousing flow, product delivery, and more to ensure
                        continuity.
                      </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Improve <br />
                        Production Flow
                      </h3>
                      <div className="overlay">
                      <p>
                        Get notified whenever there is a moisture or temperature
                        imbalance, so that you can intervene in production to
                        maintain product quality standards while minimizing
                        waste.
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Reduce <br />
                        Equipment Downtime
                      </h3>
                      <div className="overlay">
                      <p>
                        With Dynamics 365 and Azure IoT, get notified whenever
                        outage threshold gets exceeded so that to drive
                        production rescheduling or equipment can be sent for
                        maintenance.
                      </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Reduce <br />
                        Production Delays
                      </h3>
                      <div className="overlay">
                      <p>
                        Compare actual production cycle time with the planned
                        one. With Microsoft IoT Suite, get notified when your
                        production is on schedule and when you need to interrupt
                        production.
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
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h3>Microsoft Azure IoT Service</h3>
                <p>
                  We offer a full range of IoT services to support you on your
                  Dynamics journey including implementation, upgrade and
                  support.
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
                    Start uplifting your business with our Dynamics 365 and
                    Microsoft IoT implementation.
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
                  <h3>Upgrade</h3>
                  <p>
                    Continuously grow and scale your business with our optimum
                    IoT support services.
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
                  <h3>Support</h3>
                  <p>
                    Integrate IoT and Dynamics 365 to upgrade and level-up your
                    system capabilities.
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

      <section className="hero hero-1 hero-33">
        <div className="container">
          <header className="section-header">
            <h3>
              Microsoft Dynamics 365 <br />
              Applications
            </h3>
          </header>
          <div className="row pad9x rever-1">
            <div className="col-lg-7 align-self-center">
              <div className="commen-lef-pic">
                <img
                  src="/assets/img/Sales-Marketing.webp"
                  alt="Sales-Marketing"
                />
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="commen-rit-info">
                <h3>Sales & Marketing</h3>
                <p>
                  Implement intelligent sales and marketing solutions to turn
                  your prospects into engaged customers. Connect, engage, and
                  nurture your customer relationship to generate and close deals
                  faster. With AI insights, personalize your buyer experience,
                  predict sales, manage budget, and drive a seamless production
                  line.
                </p>
                <div className="cltt-actt">
                  <Link to="#">Get Started</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row pad9x">
            <div className="col-lg-5 align-self-center">
              <div className="commen-rit-info">
                <h3>Customer Service</h3>
                <p>
                  Provide proactive service to your customers and personalize
                  your customer engagement, leveraging a connected approach
                  across your sales channels to drive growth and innovation.
                  Empower your salespeople with the capability to make the right
                  decisions at the right time. With{" "}
                  <Link to="/products/microsoft-dynamics-365-customer-service/">
                    Dynamics 365 Customer
                  </Link>
                  service, optimize service operations and ensure proactive
                  customer service with IoT-enabled devices.
                </p>
                <div className="cltt-actt">
                  <Link to="#">Get Started</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="commen-lef-pic">
                <img
                  src="/assets/img/Customer-Service.webp"
                  alt="Customer-Service"
                />
              </div>
            </div>
          </div>

          <div className="row pad9x rever-1">
            <div className="col-lg-7 align-self-center">
              <div className="commen-lef-pic">
                <img
                  src="/assets/img/Connected-Field-Service.webp"
                  alt="Connected-Field-Service"
                />
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="commen-rit-info">
                <h3>Connected Field Service</h3>
                <p>
                  Optimize service schedules, leveraging efficient routing and
                  resourcing and access onsite appointments. Improve employee
                  collaboration and communication between field service
                  executives, field technicians, dispatchers, customers, and
                  stakeholders. Technicians can fulfill work orders at customer
                  locations as well as can leverage real-time guidance whether
                  for service work or any schedule changes that take place.
                </p>
                <div className="cltt-actt">
                  <Link to="#">Get Started</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row pad9x">
            <div className="col-lg-5 align-self-center">
              <div className="commen-rit-info">
                <h3>Finance & Operations</h3>
                <p>
                  Bring your processes together to automate and streamline,
                  uplift your financial performance, and strengthen your
                  employees’ capability to maximize profitability. With embedded
                  AI insights and data analytics, improve your financial
                  decision making, optimize stock & logistics operations,
                  predict disruptions, improve production planning, and maximize
                  your asset productivity.
                </p>
                <div className="cltt-actt">
                  <Link to="#">Get Started</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="commen-lef-pic">
                <img
                  src="/assets/img/Finance-Operations.webp"
                  alt="Finance-Operations"
                />
              </div>
            </div>
          </div>

          <div className="row pad9x rever-1">
            <div className="col-lg-7 align-self-center">
              <div className="commen-lef-pic">
                <img
                  src="/assets/img/Connected-Commerce.webp"
                  alt="Connected-Commerce"
                />
              </div>
            </div>
            <div className="col-lg-5 align-self-center">
              <div className="commen-rit-info">
                <h3>Connected Commerce</h3>
                <p>
                  Create omnichannel customer experience with{" "}
                  <Link to="/products/microsoft-dynamics-365-commerce/">
                    Dynamics 365 commerce solution.
                  </Link>{" "}
                  Deliver a personalized shopping experience to your customers
                  or partners at every touchpoint. With AI-enabled customer
                  engagement insights, gain customer loyalty and exceed their
                  expectations. Empower your workforce to predict customer needs
                  and have a 360-degree view of their customers.
                </p>
                <div className="cltt-actt">
                  <Link to="#">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <header className="section-header">
                <h3>
                  Implementation of Microsoft Dynamics 365 <br />
                  ERP and CRM Solutions
                </h3>
                <p>
                  To ensure a successful implementation comprises choosing a
                  domain-specific solution, modernized methodologies, and a
                  trustworthy implementation partner embedded with the high-end
                  understanding, right skill set, and ability to deliver within
                  eligible time-frame and cost.
                </p>
              </header>
            </div>
          </div>
        </div>
      </section>

      <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="busine_service_bottom-left custom012">
                <img
                  src="/assets/img/microosoft-partner.png"
                  alt="microosoft-partner.png"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="side-heading-custom-01">
                <h3>
                  Microsoft Dynamics
                  <br />
                  Implementation Partner
                </h3>
              </div>
              <div className="custom-p-001">
                <p>
                  Experts at Dynamics Square - an authorized Microsoft Gold
                  Partner have the proficiency to understand your complex
                  business requirement and undertake challenges involved to
                  deliver highly customized, process-integrated, and
                  profitability-driven implementation.
                  <br />
                  <br />
                  We ensure highly embedded implementation practices whether to
                  support your ERP needs, CRM practices, finance operations,
                  project automation respectively, and even your entire
                  integrated business needs with a single unified solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-bg-001 hero-001">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="custom-bg-001-left">
                <h3>
                  Delivering
                  <br />
                  Domain-Specific & <br />
                  Agile Implementation Approach
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="custom-bg-001-right">
                <img
                  src="/assets/img/Dynamics-365-overview.svg"
                  alt="Dynamics-365-overview"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-style-bg">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img
                    src="/assets/img/Customer-Service.svg"
                    alt="Customer-Service"
                  />
                </div>
                <div className="style-grid-content">
                  <h4>Customer Service</h4>
                  <p>
                    We implement highly embedded customer management solutions
                    helping your business to transform your customer experience
                    by delivering them personalized solutions integrated with
                    proactive support and omnichannel experience.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img src="/assets/img/sales.svg" alt="sales" />
                </div>
                <div className="style-grid-content">
                  <h4>Sales</h4>
                  <p>
                    Optimize sales and drive profitability with agile sales
                    insights and connected sales practices through our Microsoft
                    Dynamics 365 Implementation services. Predict, manage, and
                    streamline your sales and close more deals faster.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img
                    src="/assets/img/marketing-icons.svg"
                    alt="marketing-icons"
                  />
                </div>
                <div className="style-grid-content">
                  <h4>Marketing</h4>
                  <p>
                    Personalize your customer journey, engage the right
                    customers, build trust, and drive business success by
                    gaining a holistic customer view wrapped with AI analytics,
                    easy-to-use tools to drive seamless yet productive marketing
                    strategies.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img
                    src="/assets/img/commerce-icons.svg"
                    alt="commerce-icons"
                  />
                </div>
                <div className="style-grid-content">
                  <h4>Commerce</h4>
                  <p>
                    We create a highly unified and omnichannel experience for
                    your customers or partners equipped with AI-driven insights,
                    centralized commerce management, and modernized commerce
                    tools that simplify your commerce and enable growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img
                    src="/assets/img/supply-chain-icons.svg"
                    alt="supply-chain-icons"
                  />
                </div>
                <div className="style-grid-content">
                  <h4>Supply Chain</h4>
                  <p>
                    Enabling resilient supply chain integrated with AI practices
                    and seamlessly adaptable to bring transparency, faster time
                    to market, optimize inventory & logistics, predict potential
                    disruptions, and enhance asset productivity & longevity.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img
                    src="/assets/img/Field-Service-icons.svg"
                    alt="Field-Service-icons"
                  />
                </div>
                <div className="style-grid-content">
                  <h4>Field Service</h4>
                  <p>
                    Bring acceleration in your service part comprising customer
                    management, field service, and remote assist. We implement
                    highly configured, connected, and integrated solutions
                    simplified with AI, IoT, and Machine Learning capabilities.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img
                    src="/assets/img/finance-icns-1.svg"
                    alt="finance-icns-1"
                  />
                </div>
                <div className="style-grid-content">
                  <h4>Finance</h4>
                  <p>
                    With real-time and seamless financial reporting, Key
                    analytics, and AI insights, we enable enterprises to unify
                    their finance practices and automate their processes while
                    minimizing the potential risks and global financial
                    complexities.
                  </p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <img
                    src="/assets/img/Project-Management-icons.svg"
                    alt="Project-Management-icons"
                  />
                </div>
                <div className="style-grid-content">
                  <h4>Project Management</h4>
                  <p>
                    Track and manage your workflow and enable a project-centric
                    approach with a single integrated solution for your
                    business. We implement a solution to automate and streamline
                    your project cycle and ensure overall project success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-3334">
        <div className="container">
          <header className="section-header">
            <h3>
              why dynamics square for
              <br />
              implementation services Applications
            </h3>
          </header>
          <div className="row pad15x">
            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img
                    src="/assets/img/microsft-p-icons.svg"
                    alt="microsft-p-icons"
                  />
                  <h3>
                    Authorized Microsoft <br />
                    Gold Partner
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    Dynamics Square is an authorized gold Microsoft Partner that
                    delivers trustworthy Microsoft Dynamics 365 implementation
                    services followed by standard practices, specialized with
                    modernized methodologies, and strategized with high-end post
                    support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/assets/img/Group997.svg" alt="Group997.svg" />
                  <h3>
                    High-End <br />
                    Implementation Team
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    Since we are a trustworthy Microsoft Dynamics implementation
                    partner and hence, comprise a team of certified people with
                    years of implementation proficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/assets/img/Group772.svg" alt="Group772" />
                  <h3>
                    Cost-Effective <br />
                    Solution
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    We deploy a standard Microsoft Dynamics implementation at
                    40% discounted rates in comparison to other implementation
                    partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/assets/img/Group1003.svg" alt="Group1003" />
                  <h3>
                    Cost-Effective <br />
                    Solution
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    We deploy a standard Microsoft Dynamics implementation at
                    40% discounted rates in comparison to other implementation
                    partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img
                    src="/assets/img/proffesionalserviceicon.svg"
                    alt="proffesionalserviceicon"
                  />
                  <h3>
                    Highly <br />
                    Customized
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    By deeply reviewing your process flow and involved domain
                    modules, we deploy enterprise-specific implementation
                    practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 align-self-center">
              <div className="commen-box-3">
                <div className="icons">
                  <img src="/assets/img/Group1000.svg" alt="Group1000" />
                  <h3>
                    Flexible <br />
                    Delivery
                  </h3>
                </div>
                <div className="commen-boc-3-info">
                  <p>
                    Considering the importance of your time constraints, we
                    invest our full potential efforts to ensure flexible and
                    dedicated delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-333">
        <div className="container">
          <header className="section-header">
            <h3>
              Microsoft Dynamics 365 <br />
              Applications
            </h3>
          </header>
          <div className="row pad10x">
            <div className="col-lg-4">
              <div className="commen-box-2">
                <div className="icons">
                  <img src="/assets/img/Group774.svg" alt="Group774" />
                </div>
                <div className="commen-boc-2-info">
                  <h3>Trustworthy Partner</h3>
                  <p>
                    Dynamics Square is Microsoft's gold partner. So far, we have
                    delivered 70+ implementation projects and serving 250+
                    clients globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="commen-box-2">
                <div className="icons">
                  <img src="/assets/img/Group773.svg" alt="Group773" />
                </div>
                <div className="commen-boc-2-info">
                  <h3>Off-Hours Support</h3>
                  <p>
                    We enable your users to effectively adapt and use the newly
                    configured system to drive smoother operational flow.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="commen-box-2">
                <div className="icons">
                  <img src="/assets/img/Group772.svg" alt="Group772" />
                </div>
                <div className="commen-boc-2-info">
                  <h3>Trustworthy Partner</h3>
                  <p>
                    We provide all-time support to our UK clients with the help
                    of our support team present in 7 global locations including
                    UK.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call_to_action call_to_action-n call_to_action-t">
        <div className="container">
          <div className="swiper solution_new_callto">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row">
                  <div className="col-md-8 align-self-center">
                    <div className="call_to_action-left">
                      <h3>Connect And Talk To Expert</h3>
                      <p>
                        Discuss with our experts, we can suggest a best-in-class
                        IoT solution for your business.
                      </p>
                      <div className="new-btn new-btn-nn">
                        <NavLink to="#about" className="btn-get-started-color">
                          <span>Read More Feature</span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 align-self-center">
                    <div className="call_to_action-right call_to_action-right-t">
                      <img src="/assets/img/Group-683.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="swiper-slide">
                     <div className="row">
                        <div className="col-md-8">
                           <div className="call_to_action-left">
                              <h3>Dynamics NAV to
                                 Business Central Upgrade!
                              </h3>
                              <p>Are you looking to upgrade from Dynamics NAV to Dynamics 365 BC?</p>
                              <div className="new-btn new-btn-nn">
                                 <NavLink to="#about" className="btn-get-started-color">
                                 <span>Read More Feature</span>
                                 </NavLink>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-4">
                           <div className="call_to_action-right"><img src="/assets/img/Group-683.png" alt="image" /></div>
                        </div>
                     </div>
                    </div> */}
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <section className="call_to_action call_to_action-height">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/assets/img/MaskGroup8.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left">
                <h3>Consult To Reveal Best Approach</h3>
                <p>
                  Connect with us to facilitate your system to drive a parallel
                  approach in the market you deal with. We help enterprises to
                  implement their unique needs.
                </p>
                <div className="m-o-t m-o-t-inde">
                  <Link to="/contact-us/" className="btn-get-started scrollto">
                    <span>Schedule a Demo</span>
                  </Link>
                </div>
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
                <p>Drive new business challenges by implementing Azure IoT</p>
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

      <section>
        <div className="container">
          <header className="section-header">
            <h3>
              Dynamics 365 Cloud <br />
              Vs On-premise Comparison:
            </h3>
            <p>
              The below comparison table will enable you to precisely understand
              and decide which Microsoft Dynamics 365 deployment- in-cloud or
              on-premise -will suite your business requirements.
            </p>
          </header>
          <div className="row">
            <div className="col-lg-12">
              <div className="tabls-cloud table-responsive">
                <table className="table table-striped   align-middle">
                  <thead>
                    <tr>
                      <th>Key-Capabilities</th>
                      <th>Microsoft Dynamics 365 - In Cloud</th>
                      <th>Microsoft Dynamics 365 - On Premise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cost Model</td>
                      <td>Monthly subscription</td>
                      <td>Huge initial capital investment (CapEx</td>
                    </tr>
                    <tr>
                      <td>Information Storage</td>
                      <td>
                        Information stored in secured Microsoft data centre
                      </td>
                      <td>
                        Complete ownership and control over the stored
                        information
                      </td>
                    </tr>
                    <tr>
                      <td>Data Access</td>
                      <td>
                        Access only through application program interface (API)
                        or report connectors
                      </td>
                      <td>Full access</td>
                    </tr>
                    <tr>
                      <td>Storage Space</td>
                      <td>5-GB (additional 2.5-GB for every 20 licenses)</td>
                      <td>Limited to available server storage</td>
                    </tr>
                    <tr>
                      <td>System Administration</td>
                      <td>
                        Minimal internal administration required Microsoft
                        manages the system infrastructure
                      </td>
                      <td>Requires internal or vendor partner maintenance</td>
                    </tr>
                    <tr>
                      <td>Deployment</td>
                      <td>Quick and seamless</td>
                      <td>Time taking and complicated</td>
                    </tr>
                    <tr>
                      <td>Hardware Requirement</td>
                      <td>No additional hardware required</td>
                      <td>
                        Executed either from existing hardware or might need
                        additional servers
                      </td>
                    </tr>
                    <tr>
                      <td>Maintenance Expenses</td>
                      <td>None</td>
                      <td>
                        Involves huge spending on maintaining and upgrading
                        servers
                      </td>
                    </tr>
                    <tr>
                      <td>Connectivity</td>
                      <td>
                        Reliant connectivity with 99.9% financially supported by
                        Microsoft
                      </td>
                      <td>
                        No internet connectivity required to access applications
                        or information
                      </td>
                    </tr>
                    <tr>
                      <td>System Updates</td>
                      <td>
                        Updates (both minor and major) rolled out consistently
                      </td>
                      <td>
                        Minor updates can be held back until the next major
                        release
                      </td>
                    </tr>
                    <tr>
                      <td>Mobility</td>
                      <td>Applications available for offline access</td>
                      <td>Applications available for offline access</td>
                    </tr>
                    <tr>
                      <td>Flexibility</td>
                      <td>
                        Higher flexibility through integrated redundancy
                        capabilities
                      </td>
                      <td>
                        Hardware dependent and its expensive to install
                        redundant server for back-up
                      </td>
                    </tr>
                    <tr>
                      <td>Power BI</td>
                      <td>Integrated</td>
                      <td>Not Available</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="extr-cont">
                We know you're facing an important decision about modernizing
                your current Dynamics 365 On-premise solutions and potentially
                migrating to Dynamics 365 Cloud.
                <br />
                <br />
                <b>
                  If you're Dynamics on-premise customer today, then you're
                  already cloud-ready.
                </b>
                <br />
                <br />
                Are you looking to access cutting-edge technology, control costs
                and complexity and improving overall IT productivity? Our
                Dynamics 365 experts help you accelerate your journey and
                minimize risk.{" "}
                <span>
                  <a href="#">Talk to our experts today!</a>
                </span>
              </p>
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
              questions about Finance?
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
                      What is Microsoft Dynamics 365 Finance?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Finance is an advanced analytics
                        solution to support continuously changing or evolving
                        business needs. It enables enterprises to seamlessly
                        control and manage finances. Users can plan and forecast
                        with actual and relevant information to make timely and
                        informed decisions. &nbsp;
                      </p>
                      <p>
                        Leveraging D365 Finance, businesses can manage their
                        general ledger, cash &amp; bank, tax, accounts payable
                        &amp; receivable, credits &amp; collections, budgeting,
                        fixed assets, cost accounting, electronic invoicing, and
                        more.&nbsp;&nbsp;
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
                      What are the features of Dynamics 365 Finance?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Finance is a modern finance
                        management tool to simplify your finance practices while
                        reducing manual efforts, data redundancies, and
                        mitigating the risk of uncertainties. D365 Finance
                        solution is designed to support modern enterprises
                        seeking to simply their finance operations to drive
                        profitability and efficiency.
                      </p>
                      <p>Here are the core features list:</p>
                      <ol>
                        <li>General Ledger</li>
                        <li>Accounts Payable</li>
                        <li>Accounts Receivable</li>
                        <li>Cash &amp; Bank Management</li>
                        <li>Tax Management</li>
                        <li>Credit &amp; Collections</li>
                        <li>Budgeting</li>
                        <li>Fixed Assets</li>
                        <li>Cost Accounting</li>
                        <li>Electronic Invoicing</li>
                      </ol>
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
                      How Microsoft Dynamics 365 Finance management can help
                      your business to succeed?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        To support and drive financial practices in today's
                        modern enterprises, there is a crucial need to manage
                        end-to-end finances using a single interface. Dynamics
                        365 Finance boosts businesses to control their financial
                        operations and brings transparency into their financial
                        events in real-time. This helps and encourages the
                        organizations to stay updated with every financial move
                        across their organization and to support their financial
                        decision-making.Leveraging Dynamics 365 Finance,
                        businesses can have control over their entire financial
                        practices. Using intelligent business insights and
                        financial reports, enterprises can predict and control
                        unexpected events or circumstances.
                      </p>
                      <p>
                        Automation is something that reduces your efforts and
                        allows you to drive smarter. Dynamics 365 Finance
                        enables automated workflow across your organization
                        wherein repetitive tasks can be automated. Greater
                        visibility into insights helps to make strategic
                        decisions in a timely manner.&nbsp;
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
                      What is included in Dynamics 365 Finance & Operation?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Dynamics 365 Finance &amp; Operations is now&nbsp;
                        <NavLink to="/products/microsoft-dynamics-365-finance/">
                          Dynamics 365 Finance
                        </NavLink>
                        ” and “
                        <NavLink to="/products/dynamics-365-supply-chain-management/">
                          Dynamics 365 Supply Chain&nbsp;Management
                        </NavLink>
                        ”&nbsp;to manage all your financial operations in a
                        seamless manner. This financial analytics tool is
                        designed for SMBs&nbsp;to&nbsp;large size organizations
                        to&nbsp;effectively roll out their financial data.
                      </p>
                      <p>
                        Leveraging D365 Finance, enterprises can
                        manage&nbsp;their core to advance financial practices
                        including budgeting &amp; forecasting, banking,
                        taxation, cost accounting, invoicing, credit &amp;
                        collections, fixed assets, and more. Businesses can also
                        empower their financial hub with predictive data and
                        other financial statements to make smarter financial
                        decisions.
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
                      What is the Microsoft Dynamics 365 finance and operations
                      model?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <NavLink to="/products/microsoft-dynamics-365-finance-operations/">
                          Microsoft Dynamics 365 for Finance &amp; Operations
                        </NavLink>{" "}
                        has now converted to Dynamics 365 Finance and Dynamics
                        365 Supply Chain Management. With D365 Finance,
                        businesses can efficiently manage their entire financial
                        events. Depending on your specific requirements, you can
                        even integrate your Dynamics 365 Finance with other
                        Microsoft apps, CRM, analytics, or accounting
                        software.&nbsp;
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
                      How much does it cost to implement Dynamics 365 Finance?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      It could be a smart decision when it comes to Dynamics 365
                      Finance licensing. Users can avail of its licensing for
                      130 pounds (approx.) for First Dynamics 365 App and
                      further, for Subsequent qualifying Dynamics 365 Finance
                      app, it could cost you 21 pounds per users/per month
                      (approx.)
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
                      Can I customize my Microsoft Dynamics 365 Finance?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Yes, Dynamics 365 Finance comes with flexibility wherein
                      you can avail of customization as per your specific
                      business domain and set of practices you drive throughout
                      your organization. You can even integrate or configure
                      your D365 Finance with your existing system to enhance
                      your business capabilities. It could be Microsoft's own
                      apps or could be a third-party application. <br />
                      <br />
                      If you want to get more information or how it works,
                      contact Dynamics Square, we can suggest and implement a
                      highly customized solution for your business.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <section>
        <div className="container">
          <header className="section-header">
            <h2>
              What is Dynamics 365 <br />
              Business Central?
            </h2>
            <p>
              Dynamics 365 Business Central (formerly known as&nbsp;
              <Link to="/products/microsoft-dynamics-nav/" target="_blank">
                <b>Dynamics NAV</b>
              </Link>
              ) is a comprehensive business management solution helping SMBs to
              manage sales, finance, service, and operations seamlessly and
              effectively. As a Dynamics 365{" "}
              <NavLink to="/dynamics-365-business-central-implementation/">
                <b>Business Central Implementation Partner</b>
              </NavLink>
              , we ensure start-ups and small businesses to get a stress-free
              and successful software rollout, training and support.
            </p>
          </header>
          <div className="row new-Prod g-5">
            <Swiper
              autoplay={{
                delay: 100000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              slidesPerView={3}
              spaceBetween={5}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, FreeMode, Pagination]}
              className="mySwiper Busines-mySwiper"
            >
              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="busines-accr">
                    <div className="srcve_head">
                      <h3>Finance</h3>
                    </div>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sol1"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Automate and customise the company's internal
                            transactions with restricted access to team members.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sol2"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Manage cash balances and account schedules to
                            estimate future sales and expenses.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sol3"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Monitor and manage the company's overall financial
                            activities, along with budget control.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sol4"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Maintains the general ledger to manage the
                            inventory, manufacturing costs, and reconcile the
                            costs.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#sol5"
                            aria-expanded="false"
                            aria-controls="sol5"
                          >
                            Consolidation and Multi-Companies
                          </button>
                        </h4>
                        <div
                          id="sol5"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            With the combination of multiple general ledgers, it
                            can conduct financial analysis of the company.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sol6"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Distribute the entries from one general journal to
                            different accounts.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sol7"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            With seamless banking integration, it settles bank
                            accounts and funds transfers between accounts.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sol8"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Distribute the budget between actual and budgeted
                            costs for operations and projects to analyze
                            returns.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sol9"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Gives the complete control of fixed assets and
                            ensures timely reduction with D365 Business Central.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sol10"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Receives payments, settles bank accounts, and
                            collects the remaining balance.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#sol11"
                            aria-expanded="false"
                            aria-controls="sol11"
                          >
                            Accounts Payable
                          </button>
                        </h4>
                        <div
                          id="sol11"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Make payments, mark outgoing payments, and manage
                            cheques with D365 BC.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#sol12"
                            aria-expanded="false"
                            aria-controls="sol12"
                          >
                            General Ledger
                          </button>
                        </h4>
                        <div
                          id="sol12"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Manage the credit and debit entries to maintain the
                            entire financial data.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="busines-accr">
                    <div className="srcve_head">
                      <h3>Sales</h3>
                    </div>
                    <div className="accordion" id="exm2">
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sec1"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#exm2"
                        >
                          <div className="accordion-body">
                            Manage customers and keep track of their queries as
                            well.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sec2"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#exm2"
                        >
                          <div className="accordion-body">
                            Provides a sales quote to the customer to offer
                            negotiations before making the actual invoice.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sec3"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm2"
                        >
                          <div className="accordion-body">
                            Manages the process of creating sales orders with
                            drop shipment and partial shipping functions.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sec4"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm2"
                        >
                          <div className="accordion-body">
                            It creates a sales invoice for the actual purchases
                            processed by the buyers.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sec5"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm2"
                        >
                          <div className="accordion-body">
                            Manages the purchase order to ship the products
                            directly from vendor to customer.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sec6"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm2"
                        >
                          <div className="accordion-body">
                            Manages the data of sales invoices of the product
                            returned to release the refund amount.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sec7"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm2"
                        >
                          <div className="accordion-body">
                            Create linked assembly orders to process the full or
                            partial order quantity during product
                            unavailability.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sec8"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm2"
                        >
                          <div className="accordion-body">
                            Makes the customers informed about order delivery
                            dates by analysing capable-to-promise or available
                            to promise dates.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sec9"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm2"
                        >
                          <div className="accordion-body">
                            Combines multiple shipments and invoice a customer
                            once.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sec10"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm2"
                        >
                          <div className="accordion-body">
                            Automatically creates sales invoices for corrections
                            in unpaid invoices.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="sec11"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm2"
                        >
                          <div className="accordion-body">
                            Enables users to create a shipment pick-up list from
                            various vendor locations.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="busines-accr">
                    <div className="srcve_head">
                      <h3>Purchase</h3>
                    </div>
                    <div className="accordion" id="exm3">
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="third1"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#exm3"
                        >
                          <div className="accordion-body">
                            Creates a vendor card for each vendor to manages all
                            purchases.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="third2"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#exm3"
                        >
                          <div className="accordion-body">
                            Create purchase quote from the vendor and later
                            convert such quotes into purchase orders.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="third3"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm3"
                        >
                          <div className="accordion-body">
                            D365 BC manages all the purchase orders for the
                            vendors.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="third4"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm3"
                        >
                          <div className="accordion-body">
                            Manages all the purchase invoices and manages vendor
                            data to purchase products with terms.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="third5"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm3"
                        >
                          <div className="accordion-body">
                            D365 BC allows users to create a single invoice for
                            multiple selected purchase invoices.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="third6"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm3"
                        >
                          <div className="accordion-body">
                            Creates invoices for the vendor to show product
                            return data along with the amount to be refunded.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="third7"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm3"
                        >
                          <div className="accordion-body">
                            It combines multiple invoices from the same vendor
                            and converts them into a single one.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="third8"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm3"
                        >
                          <div className="accordion-body">
                            Manages and converts all the electronic invoices to
                            purchase invoices from the vendors.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="third9"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm3"
                        >
                          <div className="accordion-body">
                            It reflects the data of products to be received on
                            or before certain dates.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
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
                        </h4>
                        <div
                          id="third10"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm3"
                        >
                          <div className="accordion-body">
                            It merges all the duplicate records and eliminates
                            all the confusion.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="busines-accr">
                    <div className="srcve_head">
                      <h3>Inventory Management</h3>
                    </div>
                    <div className="accordion" id="exm4">
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#four1"
                            aria-expanded="false"
                            aria-controls="four1"
                          >
                            Item Master Management
                          </button>
                        </h4>
                        <div
                          id="four1"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#exm4"
                        >
                          <div className="accordion-body">
                            Creates the items or product cards an organisation
                            generally trades.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#four2"
                            aria-expanded="false"
                            aria-controls="four2"
                          >
                            Bill of Materials
                          </button>
                        </h4>
                        <div
                          id="four2"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#exm4"
                        >
                          <div className="accordion-body">
                            Creates the structure or data of the parent item to
                            be sold as the parent item’s component kits to
                            stock.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#four3"
                            aria-expanded="false"
                            aria-controls="four3"
                          >
                            Item Categorization
                          </button>
                        </h4>
                        <div
                          id="four3"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm4"
                        >
                          <div className="accordion-body">
                            Organises the items into categories and maintains an
                            overall overview.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#four4"
                            aria-expanded="false"
                            aria-controls="four4"
                          >
                            Item Attributes
                          </button>
                        </h4>
                        <div
                          id="four4"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm4"
                        >
                          <div className="accordion-body">
                            Assign the attributes to the different items to make
                            finding a specific item easy.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#four5"
                            aria-expanded="false"
                            aria-controls="four5"
                          >
                            Item Catalog
                          </button>
                        </h4>
                        <div
                          id="four5"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm4"
                        >
                          <div className="accordion-body">
                            Creates special item card that a company offers to
                            its customers with no inventory
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#four6"
                            aria-expanded="false"
                            aria-controls="four6"
                          >
                            Inventory Counting
                          </button>
                        </h4>
                        <div
                          id="four6"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm4"
                        >
                          <div className="accordion-body">
                            Manages to keep the stock of items counted in
                            real-time.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#four7"
                            aria-expanded="false"
                            aria-controls="four7"
                          >
                            Item Availablity
                          </button>
                        </h4>
                        <div
                          id="four7"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm4"
                        >
                          <div className="accordion-body">
                            Manages item availability by location, time, sales
                            event, use on assembly, and production BOMs.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#four8"
                            aria-expanded="false"
                            aria-controls="four8"
                          >
                            Inventory Transfer
                          </button>
                        </h4>
                        <div
                          id="four8"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm4"
                        >
                          <div className="accordion-body">
                            Manages all the transfer orders to transfer
                            inventory items from one location to another.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#four9"
                            aria-expanded="false"
                            aria-controls="four9"
                          >
                            Item Reservation
                          </button>
                        </h4>
                        <div
                          id="four9"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm4"
                        >
                          <div className="accordion-body">
                            Reserve some products from inventory for sales,
                            service, purchase, assembly, and production orders.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#four10"
                            aria-expanded="false"
                            aria-controls="third10"
                          >
                            Item Tracking
                          </button>
                        </h4>
                        <div
                          id="four10"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm4"
                        >
                          <div className="accordion-body">
                            Helps the user to track items using a serial number
                            or lot number in case of a recall situation.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#four11"
                            aria-expanded="false"
                            aria-controls="third11"
                          >
                            Block Items
                          </button>
                        </h4>
                        <div
                          id="four11"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm4"
                        >
                          <div className="accordion-body">
                            Blocks some items from entering into sales or
                            purchase lines or in any transaction.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="busines-accr">
                    <div className="srcve_head">
                      <h3>Warehouse Management</h3>
                    </div>
                    <div className="accordion" id="exm5">
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#five1"
                            aria-expanded="false"
                            aria-controls="five1"
                          >
                            Item Receiving
                          </button>
                        </h4>
                        <div
                          id="five1"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#exm5"
                        >
                          <div className="accordion-body">
                            Manages the record of all item receipts at the
                            warehouse location along with the details of the
                            purchase order.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#five2"
                            aria-expanded="false"
                            aria-controls="five2"
                          >
                            Item Shipments
                          </button>
                        </h4>
                        <div
                          id="five2"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#exm5"
                        >
                          <div className="accordion-body">
                            Manages the record of shipped items at the warehouse
                            location along with the details of the sales order.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#five3"
                            aria-expanded="false"
                            aria-controls="five3"
                          >
                            Cross Dock Items
                          </button>
                        </h4>
                        <div
                          id="five3"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm5"
                        >
                          <div className="accordion-body">
                            Bypass, pick, and place expedited items in inventory
                            for shipping.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#five4"
                            aria-expanded="false"
                            aria-controls="five4"
                          >
                            Putting Items Away
                          </button>
                        </h4>
                        <div
                          id="five4"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm5"
                        >
                          <div className="accordion-body">
                            Classifies the items received from various available
                            resources as per the configured warehouse process.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#five5"
                            aria-expanded="false"
                            aria-controls="five5"
                          >
                            Moving Items
                          </button>
                        </h4>
                        <div
                          id="five5"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm5"
                        >
                          <div className="accordion-body">
                            Helps the organisation to move items from different
                            locations in the warehouse
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#five6"
                            aria-expanded="false"
                            aria-controls="five6"
                          >
                            Picking Items
                          </button>
                        </h4>
                        <div
                          id="five6"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm5"
                        >
                          <div className="accordion-body">
                            Chooses the items for different purposes as per the
                            data configured in the warehouse.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#five7"
                            aria-expanded="false"
                            aria-controls="five7"
                          >
                            Automated Data Capture Systems (ADCS)
                          </button>
                        </h4>
                        <div
                          id="five7"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm5"
                        >
                          <div className="accordion-body">
                            Track the movements of items in the warehouse using
                            the barcode scanning feature.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="busines-accr">
                    <div className="srcve_head">
                      <h3>Project Management</h3>
                    </div>
                    <div className="accordion" id="exm6">
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#six1"
                            aria-expanded="false"
                            aria-controls="six1"
                          >
                            Project Creation
                          </button>
                        </h4>
                        <div
                          id="six1"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#exm6"
                        >
                          <div className="accordion-body">
                            The Dynamics 365 BS assists the organisation in
                            creating and managing projects, as well as assigning
                            jobs and planning projects.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#six2"
                            aria-expanded="false"
                            aria-controls="six2"
                          >
                            Resource Allocations
                          </button>
                        </h4>
                        <div
                          id="six2"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#exm6"
                        >
                          <div className="accordion-body">
                            Distributes resources to various tasks with price
                            management prior to the start of each project.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#six3"
                            aria-expanded="false"
                            aria-controls="six3"
                          >
                            Time Sheet Management
                          </button>
                        </h4>
                        <div
                          id="six3"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm6"
                        >
                          <div className="accordion-body">
                            Prepares the time sheet with job tasks, planning
                            lines, and updates the time sheet lines to the job
                            journal.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#six4"
                            aria-expanded="false"
                            aria-controls="six4"
                          >
                            Project Budget Management
                          </button>
                        </h4>
                        <div
                          id="six4"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm6"
                        >
                          <div className="accordion-body">
                            Analyze and compare the distribution of the budget
                            across various projects to check the quality, cost,
                            and efficiency.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#six5"
                            aria-expanded="false"
                            aria-controls="six5"
                          >
                            Resource Consumptions
                          </button>
                        </h4>
                        <div
                          id="six5"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm6"
                        >
                          <div className="accordion-body">
                            Keeps a record of all consumption based on various
                            jobs and updates the data in real-time.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#six6"
                            aria-expanded="false"
                            aria-controls="six6"
                          >
                            Project Supplies
                          </button>
                        </h4>
                        <div
                          id="six6"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm6"
                        >
                          <div className="accordion-body">
                            Manages the purchase of all supplies needed to
                            complete a project and keeps track of the item as
                            well as the time spent on it.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#six7"
                            aria-expanded="false"
                            aria-controls="six7"
                          >
                            Project WIP Methods
                          </button>
                        </h4>
                        <div
                          id="six7"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm6"
                        >
                          <div className="accordion-body">
                            This feature helps to ensure the creation of correct
                            financial statements and makes a financial
                            estimation of jobs.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#six8"
                            aria-expanded="false"
                            aria-controls="six8"
                          >
                            Project Progress and Performance
                          </button>
                        </h4>
                        <div
                          id="six8"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm6"
                        >
                          <div className="accordion-body">
                            It manages the correct financial statements and the
                            financial value of materials after consumption for a
                            job.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#six9"
                            aria-expanded="false"
                            aria-controls="six9"
                          >
                            Project Invoicing
                          </button>
                        </h4>
                        <div
                          id="six9"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm6"
                        >
                          <div className="accordion-body">
                            Send the project’s invoice to the customer after the
                            completion of a particular project or schedule it as
                            required.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#six10"
                            aria-expanded="false"
                            aria-controls="third10"
                          >
                            Merge Duplicate Records
                          </button>
                        </h4>
                        <div
                          id="six10"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm6"
                        >
                          <div className="accordion-body">
                            Eliminates the duplicate records of the same vendors
                            to remove the confusion.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="col-lg-12">
                  <div className="busines-accr">
                    <div className="srcve_head">
                      <h3>Manufacturing</h3>
                    </div>
                    <div className="accordion" id="exm7">
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#seven1"
                            aria-expanded="false"
                            aria-controls="seven1"
                          >
                            Production Planning
                          </button>
                        </h4>
                        <div
                          id="seven1"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#exm7"
                        >
                          <div className="accordion-body">
                            To plan and suggest, the planning system demands a
                            balanced supply chain.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#seven2"
                            aria-expanded="false"
                            aria-controls="seven2"
                          >
                            Supply Planning
                          </button>
                        </h4>
                        <div
                          id="seven2"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#exm7"
                        >
                          <div className="accordion-body">
                            Plan the supply and adjust the algorithms to meet
                            the manufacturing requirements.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#seven3"
                            aria-expanded="false"
                            aria-controls="seven3"
                          >
                            Demand Forecasting
                          </button>
                        </h4>
                        <div
                          id="seven3"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm7"
                        >
                          <div className="accordion-body">
                            Enables the users to forecast the demand as per
                            expected sales and production.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#seven4"
                            aria-expanded="false"
                            aria-controls="seven4"
                          >
                            Creation of Production Order from Sales Order
                          </button>
                        </h4>
                        <div
                          id="seven4"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm7"
                        >
                          <div className="accordion-body">
                            Manages the production orders from sales demand to
                            cover the exact sales order demand.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#seven5"
                            aria-expanded="false"
                            aria-controls="seven5"
                          >
                            Order Planning
                          </button>
                        </h4>
                        <div
                          id="seven5"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm7"
                        >
                          <div className="accordion-body">
                            Helps to manually plan for sales and production
                            demand, but one BOM level at a time.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#seven6"
                            aria-expanded="false"
                            aria-controls="seven6"
                          >
                            MRP & MPS
                          </button>
                        </h4>
                        <div
                          id="seven6"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm7"
                        >
                          <div className="accordion-body">
                            For supply chain automation, the planning worksheet
                            works on MPS and MRP options.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#seven7"
                            aria-expanded="false"
                            aria-controls="seven7"
                          >
                            Requisition Worksheet
                          </button>
                        </h4>
                        <div
                          id="seven7"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm7"
                        >
                          <div className="accordion-body">
                            Creates data automatically about the supply chain
                            and mentions the demand for refilled items.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#seven8"
                            aria-expanded="false"
                            aria-controls="seven8"
                          >
                            Calculate Work Centre Calendar
                          </button>
                        </h4>
                        <div
                          id="seven8"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm7"
                        >
                          <div className="accordion-body">
                            With D365 Business Central, it reschedules the work
                            centre calendar due to sudden planning changes.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#seven9"
                            aria-expanded="false"
                            aria-controls="seven9"
                          >
                            Item Availablity
                          </button>
                        </h4>
                        <div
                          id="seven9"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm7"
                        >
                          <div className="accordion-body">
                            Check the availability of a specific item and the
                            insights of events that influence it.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#seven10"
                            aria-expanded="false"
                            aria-controls="third10"
                          >
                            Production Order
                          </button>
                        </h4>
                        <div
                          id="seven10"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm7"
                        >
                          <div className="accordion-body">
                            Create production orders manually or automatically
                            with Dynamics 365 Business Central.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#seven11"
                            aria-expanded="false"
                            aria-controls="third11"
                          >
                            Subcontracting
                          </button>
                        </h4>
                        <div
                          id="seven11"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm7"
                        >
                          <div className="accordion-body">
                            Helps decision makers to outsource the selected
                            processes or operations to a subcontractor.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h4 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#seven12"
                            aria-expanded="false"
                            aria-controls="third12"
                          >
                            Production Consumption & Output
                          </button>
                        </h4>
                        <div
                          id="seven12"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#exm7"
                        >
                          <div className="accordion-body">
                            Record, post production output with material and
                            time consumption for single released production
                            line.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default MyComponents;
