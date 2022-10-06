import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  // const reloadCount = sessionStorage.getItem("reloadCount");
  // if (reloadCount < 2) {
  //   sessionStorage.setItem("reloadCount", String(reloadCount + 1));
  //   //console.log(reloadCount);
  //   window.location.reload();
  // } else {
  //   sessionStorage.removeItem("reloadCount");
  //   console.log(reloadCount);
  // }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          About Dynamics Square | Dynamics 365 Business Central Partner
        </title>
        <meta
          name="description"
          content="At Dynamics Square, a dedicated team of highly-skilled Microsoft consultants takes care of your ERP &amp; CRM solutions. Learn more about Dynamics Square."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.com/about-us/"
        />
        <meta property="og:locale" content="en_US" />
       
      </Helmet>
      <main>
        <section className="Solution-banner hero-1 hero about-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6  mobile-1 align-self-center">
                <h1>About Us</h1>
                <p>
                We help businesses to take smarter decisions by implementing Microsoft Business Applications

                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <img src="/assets/img/about-pic.png" alt="About" />
              </div>
            </div>
          </div>
        </section>

        <section className="about-intr">
          <div className="container">
            <div className="col-lg-12">
              <div className="about-intr-wrpper">
                <div className="left-content">
                  <h3>
                    We're Microsoft
                    <br />
                    Gold Partners
                  </h3>
                </div>
                <div className="right-content">
                  <p>
                  We are one of the leading <NavLink to="/">Microsoft Dynamics Partner</NavLink>, and IT consulting service companies run by a passionate, professional, and highly experienced team for <NavLink to="/products/microsoft-dynamics-365/">Microsoft Dynamics 365</NavLink>  Business Solutions. <p>We help businesses to innovate and grow by streamlining their finance, operations, customer service, and increasing their productivity with Microsoft Business Solutions (Dynamics 365, <NavLink to="/products/microsoft-dynamics-nav/">NAV</NavLink> & AX), SharePoint, <NavLink to="/products/microsoft-power-bi/">Power BI solutions</NavLink> .

</p> <p>Our team consists the experience of hundreds of successful implementations, upgrades, and support with experience across the industries. Our deep product knowledge helps us to deliver the best solution to fit our customer’s business needs.

</p>


                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="counter-sec">
          <div className="container">
            <div className="row inner-side-pad">
              <div className="col-lg-4">
                <div className="counter-sec inerr">
                  <h3>250+</h3>
                  <p>Clients Worldwide</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="counter-sec inerr">
                  <h3>135+</h3>
                  <p>Certified Pofessionals</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="counter-sec inerr">
                  <h3>11+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mission">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="mission-pic">
                  <img
                    src="/assets/img/miss-lefiimage.png"
                    alt="miss-lefiimage"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mission-content">
                  <div className="mission-inner-con">
                    <img src="/assets/img/mission.svg" alt="mission" />
                    <h3>Our Mission</h3>
                    <p>
                    Our mission is to utilize our expertise in providing sustainable enterprise solutions to customers and help their businesses maximize potential.
                    </p>
                    <p>We aim to,

Function as a comprehensive hub for the installation, configuration, and support of business solutions, working alongside mid-market companies across the globe.
Become a respected name in the industry by providing a worthy space for people where individual contributions are appreciated and aptly rewarded.</p>
                  </div>

                  <div className="mission-inner-con">
                    <img src="/assets/img/vission.svg" alt="vission" />
                    <h3>Our Vision</h3>
                    <p>
                    Dynamics Square is driven by a set of guiding principles which dictate our decisions and responsibilities towards our people and customers. We imbibe these principles and values to maintain lasting relationships in the industry.
                    <ul>
                      <li>Honesty - Every interaction with our people, customers, and other stakeholders is infused with honesty and integrity.</li>
                      <li>Excellence - We place quality above all else, in behaviour, work, and life. We strive for excellence and take pride in our achievements.</li>
                      <li>Openness - We trust and respect our people allowing them to seamlessly cooperate with other teams and customers alike.</li>
                    </ul>


                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <header className="section-header">
              <h2>Milestones We Achieved</h2>
            </header>
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                   delay: 6000,
                  disableOnInteraction: true,
                   }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper about-timeline"
                >
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2011</h4>
                      <p>Dynamics Square came into existence</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2012</h4>
                      <p>Became Microsoft Certified Silver Partner</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2015</h4>
                      <p>Started our Footprints in Australia</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2016</h4>
                      <p>Launched US/UK Operations</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2017</h4>
                      <p>Became Competent for D365 Customer Engagement</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2018</h4>
                      <p>Became Microsoft Gold Certified Partner</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2019</h4>
                      <p>Launched Singapore Operations</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="inner-slider-cont">
                      <h4>2020</h4>
                      <p>Emerged as Power Platform competent</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner-slider-cont">
                      <h4>2021</h4>
                      <p>
                        Gained competency with entire Microsoft Business
                        Applications
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="domain-expertise">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="domain-expertise-left">
                  <div className="title-header">
                    <h3>Domain Expertise</h3>
                    <p>
                      Transforming your visions through our highly embedded
                      industry-specific solutions.
                    </p>
                  </div>

                  <div className="domain-Expertise-list">
                    <ul>
                      <li>
                        <NavLink
                          target="_blank"
                          to="/products/microsoft-dynamics-erp/"
                        >
                          <i className="bi bi-arrow-right-circle"></i>{" "}
                          Enterprise Resource Planning
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          target="_blank"
                          to="/products/microsoft-dynamics-crm/"
                        >
                          <i className="bi bi-arrow-right-circle"></i> Customer
                          Relationship Management
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          target="_blank"
                          to="/products/microsoft-power-bi/"
                        >
                          <i className="bi bi-arrow-right-circle"></i> Business
                          Intelligence
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          target="_blank"
                          to="/products/azure-iot-internet-of-things/"
                        >
                          <i className="bi bi-arrow-right-circle"></i> IoT
                          Deployment
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          target="_blank"
                          to="/products/dynamics-365-supply-chain-management/"
                        >
                          <i className="bi bi-arrow-right-circle"></i> Supply
                          Chain Management
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          target="_blank"
                          to="/products/microsoft-dynamics-365-finance/"
                        >
                          <i className="bi bi-arrow-right-circle"></i> Financial
                          Management
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          target="_blank"
                          to="/products/dynamics-365-project-operations/"
                        >
                          <i className="bi bi-arrow-right-circle"></i> Project
                          Operations
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          target="_blank"
                          to="/products/dynamics-365-human-resources/"
                        >
                          <i className="bi bi-arrow-right-circle"></i> Human
                          Resource Management
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="domain-expertise-right-pic">
                  <img src="/assets/img/about-right.png" alt="about-right" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <header className="section-header">
              <h2>Our Presence Worldwide</h2>
            </header>
            <div className="row">
              <div className="col-lg-12">
                <img src="/assets/img/word-map.png" alt="word-map"></img>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
