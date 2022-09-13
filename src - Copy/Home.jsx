import React, { useRef, useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import AnimatedNumber from "react-animated-number";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
  const [show, setShow] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setShow(true)
    }, 15000)
  }, [])
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />

        <title>
          Microsoft Dynamics Partner | CRM & ERP Solutions | Dynamics Square
        </title>
        <meta
          name="description"
          content="Dynamics Square is USA's leading Gold Microsoft Dynamics Partner helping businesses to leverage Dynamics 365 support, implementation, training and consulting services."
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://www.dynamicssquare.com/" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <section>


      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

      </section>
      <section id="hero" className="hero hero-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  align-self-center">
              <h1>
                America's Leading <br /> Microsoft Dynamics <br /> Partner
              </h1>
              <p>
                Simplify your end-to-end business processes and maximise
                outcomes with Microsoft Business Applications.
              </p>
              <div>
                <div className="text-center text-lg-start btn-welcome">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Talk to an Expert </span>
                  </Link>
                </div>
                <div className="text-center text-lg-start btn-welcome">
                  <Link
                    data-bs-toggle="modal"
                    to="#exampleModal22"
                    className="btn-get-started scrollto"
                  >
                    <span>Talk to an Expert </span>
                  </Link>
                </div>
                <div className="bnner_inline_images">
                  <ul>
                    <li>
                      <img
                        src="/assets/img/Microsoft Partner black.png"
                        alt="Microsoft Partner black.png"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img hero-img-home"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div className="banner-service-wraper">
                <ul className="list-n fist-m">
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/dynamics-365-business-central/">
                        <img
                          src="/assets/img/business-center-logo.svg"
                          alt="business-center-logo"
                        />
                        <span>
                          Business <br />
                          Central
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-azure/">
                        <img
                          src="/assets/img/azur-icons.svg"
                          alt="azur-icons"
                        />
                        <span>Azure</span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="list-n fist-m-2">
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-power-apps/">
                        <img
                          src="/assets/img/Powerapps_power-apps.svg"
                          alt="Powerapps_power-apps"
                        />
                        <span>
                          Power
                          <br /> Apps
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-dynamics-365-finance/">
                        <img
                          src="/assets/img/finace-icons.svg"
                          alt="finace-icons"
                        />
                        <span>Finance</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-dynamics-365-customer-service/">
                        <img
                          src="/assets/img/customer-service-icons.svg"
                          alt="customer-service-icons"
                        />
                        <span>
                          Customer
                          <br /> Service
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="list-n  fist-m-3">
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/dynamics-365-supply-chain-management/">
                        <img
                          src="/assets/img/supplychain-logo.svg"
                          alt="supplychain-logo"
                        />
                        <span>
                          Supply
                          <br />
                          Chain
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className="list-n-wrp-size">
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-dynamics-365/">
                        <img
                          src="/assets/img/ds-365.png"
                          alt="Microsoft Dynamics 365 Partner"
                        />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-dynamics-365-field-service/">
                        <img
                          src="/assets/img/feald-service-logo.svg"
                          alt="feald-service-logo"
                        />
                        <span>
                          Field <br /> Service
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="list-n  fist-m-2">
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-power-bi/">
                        <img
                          src="/assets/img/powerbilogo.png"
                          alt="powerbilogo"
                        />
                        <span>Power BI</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-dynamics-365-marketing/">
                        <img src="/assets/img/marketing.svg" alt="marketing" />
                        <span>Marketing</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/microsoft-dynamics-365-sales/">
                        <img
                          src="/assets/img/Sales_scalable.svg"
                          alt="Sales_scalable"
                        />
                        <span>Sales</span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <ul className="list-n fist-m">
                  <li>
                    <div className="list-n-wrp">
                      <Link to="/products/dynamics-365-human-resources/">
                        <img
                          src="/assets/img/human-resource.svg"
                          alt="human-resource"
                        />
                        <span>
                          Human <br /> Resources
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Dedicated Microsoft Dynamics Partner</h2>
                <p>
                  We Implement Microsoft Business Applications, so that your
                  business can grow at scale.
                </p>
              </header>
            </div>
          </div>

          <div className="row gy-2">
            <div className="col-lg-4 col-md-6">
              <div className="service-box  service-box-blue">
                <div className="top">
                  <img
                    src="/assets/img/business-center-logo.svg"
                    alt="business-center-logo"
                    className="icon"
                  />
                  <h3>
                    Dynamics 365 <br /> Business Central
                  </h3>
                </div>
                <p>
                  Manage and drive end-to-end enterprise processes with a
                  360-degree view across your sales insights, automate finance
                  practices, and drive effective customer engagement with
                  Business Central.
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
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/assets/img/finace-icons.svg"
                    alt="finace-icons"
                    className="icon"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Finance
                  </h3>
                </div>
                <p>
                  Improve your financial visibility with built-in AI-driven
                  analytics & insights and reporting capabilities. Automate your
                  financial practices while minimizing investment costs and
                  global financial complexity.
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
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/assets/img/supplychain-logo.svg"
                    alt="supplychain-logo"
                    className="icon"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Supply Chain
                  </h3>
                </div>
                <p>
                  Automate your supply chain practices and drive smoother flow
                  across your operational unit with real-time efficiency all
                  through highly customized and integrated Dynamics 365 Supply
                  Chain Solutions.
                </p>
                <Link
                  to="/products/dynamics-365-supply-chain-management/"
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
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/assets/img/Sales_scalable.svg"
                    alt="Sales_scalable"
                    className="icon"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Sales
                  </h3>
                </div>
                <p>
                  Connect your sales team, customers, and vendors with
                  omnichannel facility to drive innovation and maximize profit.
                  Predict & manage your sales pipeline with real-time AI
                  insights and close deals faster.
                </p>
                <Link
                  to="/products/microsoft-dynamics-365-sales/"
                  className="read-more"
                >
                  <span>Learn More...</span>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/assets/img/powerbilogo.png"
                    alt="Powerapps_power-apps"
                    className="icon"
                  />
                  <h3>
                    Microsoft <br />
                    Power BI
                  </h3>
                </div>
                <p>
                  Continuously monitor your overall business practices with
                  powerful visual insights and key analytics in real-time to
                  make improved decisions supporting your sales strategies and
                  impacting productivity.
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
              <div className="service-box service-box-blue">
                <div className="top">
                  <img
                    src="/assets/img/Azure-IoT.svg"
                    alt="Azure-IoT"
                    className="icon"
                  />
                  <h3>
                    Internet Of <br />
                    Things
                  </h3>
                </div>
                <p>
                  With Integrated enterprise solutions, improve and accelerate
                  data-exchanging practices over a secured network. Seamlessly
                  connect your devices to ensure smoother data transformation.
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
      <section id="services" className="services bg-shape">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Microsoft Dynamics 365 for Industries</h2>
                <p>
                  Become an Industry leader by implementing powerful Microsoft
                  Business Apps
                </p>
              </header>
            </div>
          </div>
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
                    Quickly boost your business capabilities and lead your
                    business toward a productive and efficient route through
                    Microsoft Dynamics solutions.
                  </p>
                  <Link
                    to="/industries/startups/"
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
                    Our Dynamics 365 experts can implement an efficient and
                    highly configured solution to support your non-profit
                    practices across your non-profit hub.
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
                    Drive unified e-commerce experience across your sales models
                    to ensure seamless customer fulfillment, enable secure
                    transactions, and meet demands.
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
                    Ensure robust manufacturing and distribution practices
                    throughout your enterprise by implementing MS Dynamics
                    solutions for your industry.
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
                    Our experienced Dynamics consultants can deploy optimal MS
                    Dynamics solutions configured to your specific business
                    context to maximize outcomes.
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
                    Understanding your root industrial requirements, our experts
                    can develop a growth-hacking MS Dynamics solution for your
                    food & beverages industry.
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
          </div>
        </div>
      </section>

      <section className="Health-Check">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>Microsoft Dynamics Efficiency Audit</h2>
                <p>
                  Discover new business opportunities and upgrade your business
                  capabilities to drive continuity by our Dynamics 365 system
                  health check at no cost.
                </p>
              </header>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 aos-init align-self-center">
              <img
                src="/assets/img/system-health-check.png"
                className="system-health-check"
                alt="Dynamics 365 System Health Check"
              />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content align-self-center">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                      Evaluating your current business needs and future
                      considerations, we drive a system check to analyze your
                      concurrent system{" "}
                      <NavLink to="/our-services/dynamics-365-upgrade-services/">
                        upgrading
                      </NavLink>{" "}
                      needs while supporting your future potentials.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                      Our experienced{" "}
                      <NavLink to="/">Dynamics 365 consultants</NavLink> can
                      diagnose your system to identify your actual system
                      upgrading needs and suggest you the best possible solution
                      suited to your customized business needs.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1 content-inner-moil-3">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check2"></i>
                    </div>
                  </div>
                  <div className="cintent-right cintent-right-001">
                    <p>
                      After performing system analysis, decision be yours
                      whether you want to go ahead with new system
                      configurations or would love to stay with your existing
                      one. Further, you can schedule{" "}
                      <NavLink to="/products/microsoft-dynamics-365/">
                        Microsoft Dynamics 365
                      </NavLink>{" "}
                      Demo to upgrade your system capabilities.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <Link
                to="/free-dynamics-365-system-health-check/"
                className="read-more"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                Get System Health Check
                <i className="bi bi-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="counts" className="counts counts-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/assets/img/Icon awesome-user-check.png"
                    alt="awesome-user-check"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span>
                    <AnimatedNumber
                      component="text"
                      value={135}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span>
                  <span className="inner">+</span>
                  <p>Microsoft Consultants</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/assets/img/Icon awesome-award.png"
                    alt="Icon awesome-award"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span>
                    <AnimatedNumber
                      component="text"
                      value={11}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span>
                  <span className="inner">+</span>
                  <p>Years of Expertise</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/assets/img/Icon awesome-globe-asia.png"
                    alt="Icon awesome-globe-asia"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span>
                    <AnimatedNumber
                      component="text"
                      value={6}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span>
                  <span className="inner">+</span>
                  <p>Global Presence</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div className="count-box-image">
                  <img
                    src="/assets/img/Icon ionic-md-thumbs-up.png"
                    alt="awesome-user-check"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="count-box-info">
                  <span>
                    <AnimatedNumber
                      component="text"
                      value={99}
                      style={{
                        transition: "0.8s ease-out",
                        transitionProperty: "background-color, color, opacity",
                      }}
                      duration={300}
                    />
                  </span>
                  <span className="inner">%</span>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>
                  What our clients have <br /> to say about us
                </h2>
              </div>
              <div className="testimonials-slider swiper">
                <div className="swiper-wrapper">
                  <Swiper
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper test-client-page"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile">
                            <img
                              src="/assets/img/JVEquip_logo.png"
                              className="testimonial-img"
                              alt=""
                            />
                            <div className="imginner">
                              <img
                                src="/assets/img/Icon metro-quote.png"
                                alt=""
                              />
                            </div>
                            <p>
                              We selected them because their communication is
                              excellent, their response times are outstanding,
                              and their ability to solve our problems through
                              various development projects has helped us
                              leverage our ERP in a way that would have taken us
                              much longer and with much greater expense. In my
                              opinion I would rank them as a 5 out of 5.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile">
                            <img
                              src="/assets/img/Spectra-Aluminum-logo-new.png"
                              className="testimonial-img"
                              alt="Spectra-Aluminum-logo-new"
                            />
                            <div className="imginner">
                              <img
                                src="/assets/img/Icon metro-quote.png"
                                alt=""
                              />
                            </div>
                            <p>
                              The team at Dynamics Square are very dedicated,
                              flexible, and attentive and will take care of all
                              your IT needs in a very efficient and timely
                              manner. Highly recommended!
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile">
                            <img
                              src="/assets/img/MexiLand_logos.png"
                              className="testimonial-img"
                              alt="MexiLand_logos"
                            />
                            <div className="imginner">
                              <img
                                src="/assets/img/Icon metro-quote.png"
                                alt="metro-quote"
                              />
                            </div>
                            <p>
                              We probed three MS Dynamic Partners, and one of
                              the key factors in making our decision to go ahead
                              with Dynamics Square was the outstanding customer
                              service experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* <div className="swiper-pagination"></div> */}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="testimonials-bg">
                <div className="testimonials-rigt-iner">
                  <img
                    src="/assets/img/testmonial-side-pic.png"
                    className="testmonial-side-pic"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="clients">
        <div className="container" data-aos="fade-up">
          <div className="clients-slider swiper">
            <div className="swiper-wrapper align-items-center">
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: true,
                }}
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/assets/img/clients/JVEquip_logo.png"
                      className="img-fluid"
                      alt="JVEquip_logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="swiper-slide">
                    <img
                      src="/assets/img/clients/Spectra-Aluminum-logo-new.png"
                      className="img-fluid"
                      alt="Spectra-Aluminum-logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/assets/img/clients/MexiLand_logos.png"
                      className="img-fluid"
                      alt="MexiLand_logos"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="swiper-slide">
                    <img
                      src="/assets/img/clients/VidPro_logo.png"
                      className="img-fluid"
                      alt="VidPro_logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/assets/img/clients/PLASP-LOGO.png"
                      className="img-fluid"
                      alt="PLASP-LOGO"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="/assets/img/clients/SOS-MANUFACTURING-LOGO.png"
                      className="img-fluid"
                      alt="SOS-MANUFACTURING-LOGO"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section id="casestudys" className="casestudys ">
        <div className="container" data-aos="fade-up">
          <div className="row  gy-4">
            <div className="col-lg-5 align-self-center">
              <img
                src="/assets/img/case-study-side-banner.png"
                alt="case-study-side-banner"
              />
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6 align-self-center">
              <div className="sec-title">
                <h2>Glimpse Of What We Delivered</h2>
                <p>Dynamics 365 Case Stories</p>
              </div>
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper casestudys-sled-1"
              >
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <img
                        src="/assets/img/cs-DMIC-logo.png"
                        className="cs-DMIC-logo"
                        alt=""
                      />
                      <p>
                        Streamline Manufacturing & Accounting with D365 Business
                        Central On-Premise
                      </p>
                      {/* <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>2X</p>
                          <span>Data Simplification & Processing</span>
                        </div>
                        <div className="case-content">
                          <p>80%</p>
                          <span>Data Simplification & Processing</span>
                        </div>
                      </div> */}
                      <div className="case-button">
                        <Link
                          to="/case-studies/dmic/"
                          className="btn btn-md btn-custom-1"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <img
                        src="/assets/img/cs-spectra-logo.png"
                        className="cs-spectra-logo"
                        alt="crm-trading"
                      />
                      <p>
                        Implemented Custom EFT Module to improvise Payment
                        Methods
                      </p>
                      {/* <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>4x</p>
                          <span>Improved Inventory System</span>
                        </div>
                        <div className="case-content">
                          <p>100%</p>
                          <span>Alliance with HMRC</span>
                        </div>
                      </div> */}
                      <div className="case-button">
                        <Link
                          to="/case-studies/spectra/"
                          className="btn btn-md btn-custom-1"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="casestudys-slider-item">
                    <div className="profile mt-auto">
                      <img
                        src="/assets/img/cs-shimco-logo-csg.png"
                        className="casestudys-slider-item-img"
                        alt="cs-shimco-logo-csg"
                      />
                      <p>
                        Implementation of Microsoft Dynamics Business Central
                        Cloud
                      </p>
                      {/* <div className="case-content-wrapper">
                        <div className="case-content">
                          <p>10x</p>
                          <span>Improved Customer Experience</span>
                        </div>
                        <div className="case-content">
                          <p>50%</p>
                          <span>Increased Sales Revenue</span>
                        </div>
                      </div> */}
                      <div className="case-button">
                        <Link
                          to="/case-studies/shimco/"
                          className="btn btn-md btn-custom-1"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
