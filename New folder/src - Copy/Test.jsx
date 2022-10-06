import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Link } from "react-router-dom";
const Test = () => {
  return (
    <>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mobile-1">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec-title">
                <h2>See! Why Businesses Trust Dynamics Square...</h2>
              </div>
              <div className="testimonials-slider swiper">
                <div className="swiper-wrapper">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile mt-auto">
                            <img
                              src="assets/img/testimonials/mary-nguyen.png"
                              className="testimonial-img"
                              alt=""
                            />
                            <div className="imginner">
                              <img
                                src="assets/img/Icon metro-quote.png"
                                alt=""
                              />
                            </div>
                            <p>
                              Proin iaculis purus consequat sem cure digni ssim
                              donec porttitora entum suscipit rhoncus.
                              Accusantium quam, ultricies eget id, aliquam eget
                              nibh et. Maecen aliquam, risus at semper.
                            </p>
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      {" "}
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile mt-auto">
                            <img
                              src="assets/img/testimonials/mary-nguyen.png"
                              className="testimonial-img"
                              alt=""
                            />
                            <div className="imginner">
                              <img
                                src="assets/img/Icon metro-quote.png"
                                alt=""
                              />
                            </div>
                            <p>
                              The team at Dynamics Square are very dedicated,
                              flexible, and attentive and will take care of all
                              your IT needs in a very efficient and timely
                              manner. Highly recommended!
                            </p>
                            <h3>Mary Nguyen </h3>
                            <h4>
                              VP Finance & CFO, Spectra Aluminum Products Ltd.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="profile mt-auto">
                            <img
                              src="assets/img/testimonials/Eliaz-picaso.png"
                              className="testimonial-img"
                              alt=""
                            />
                            <div className="imginner">
                              <img
                                src="assets/img/Icon metro-quote.png"
                                alt=""
                              />
                            </div>
                            <p>
                              We probed three MS Dynamic Partners, and one of
                              the key factors in making our decision to go ahead
                              with Dynamics Square was the outstanding customer
                              service experience.
                            </p>
                            <h3>Elias Picazo</h3>
                            <h4>IT Manager, Mexi-Land, Inc.</h4>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonials-bg">
                <div className="testimonials-rigt-iner">
                  <img
                    src="assets/img/Worldmap-shape.png"
                    className="testimonial-img"
                    alt=""
                  />
                  <div className="testimonials-rigt-iner-1">
                    <img src="assets/img/test-side-1.jpg" alt="" />
                  </div>
                  <div className="testimonials-rigt-iner-2">
                    <h4>250+</h4>
                    <span>
                      Happy Clients
                      <br />
                      Worldwide
                    </span>
                  </div>
                  <div className="testimonials-rigt-iner-3">
                    <img src="assets/img/test-side-3.jpg" alt="" />
                  </div>
                  <div className="testimonials-rigt-iner-4">
                    <img src="assets/img/test-side-2.jpg" alt="" />
                  </div>
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
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="assets/img/clients/client-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="swiper-slide">
                    <img
                      src="assets/img/clients/client-2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="assets/img/clients/client-3.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="swiper-slide">
                    <img
                      src="assets/img/clients/client-4.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="assets/img/clients/client-5.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <img
                      src="assets/img/clients/client-4.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section id="clients" className="clients">
        <div className="main-form-wrper">
          <form onSubmit="">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="* Full Name"
                name="name"
                required
              />
              <input type="hidden" name="url" value="" />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="* Work Email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Company Name"
                name="company_name"
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
                pattern="^\d{10,13}$"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="* How Can We Help You?"
                rows="3"
                name="message"
              ></textarea>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                checked
                readOnly
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I agree to the&nbsp;
                <Link
                  to="/privacy-policy/"
                  title="privacy-policy"
                  target="_blank"
                >
                  Privacy Policy&nbsp;
                </Link>
                and&nbsp;
                <Link to="/terms-of-use/" title="terms-of-use" target="_blank">
                  Terms of Service
                </Link>
                .
              </label>
            </div>
            <div className="spiner-wrper">
              <button type="submit" className="btn btn-primary fomr-submit">
                Submit
              </button>
              <div className="test" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Test;
