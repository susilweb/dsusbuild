import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
const ProductsList = () => {
  return (
    <>
      <Helmet>
      <title>Microsoft Dynamics 365 Products - Dynamics Square</title>
<meta name="description" content="Microsoft Dynamics 365 Products | Dynamics Square: Microsoft Business Applications Transform your business digitally with Microsoft Business Applications"/>
<link rel="canonical" href="https://www.dynamicssquare.com/products/" />
<meta property="og:locale" content="en_US" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>
              Products
              </h1>
            </div>
            
          </div>
        </div>
      </section>

    </>
  );
};

export default ProductsList;
