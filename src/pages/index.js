import * as React from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

// import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import CustomJumbotron from "../components/custom_jumbotron";
import CoreValues from '../components/core_values';
import CompanyOverview from '../components/company_overview';
import Comp from '../components/comp';
import Career from '../components/career';
import Subscribe from '../components/subscribe';
<<<<<<< HEAD
import Consultation from '../components/consultation';
=======
import ClientsSay from '../components/clients_say';
>>>>>>> 758cfbd09a247711ccc5af8005a1c617fbb79077


const IndexPage = () => (
  <div>
    <Header />
    <SEO title="Home" />
    <CustomJumbotron />
    <Comp/>
    <br />
    <br />
    <br />
    <div className="container">
      <p className="verticalLineLeft" 
          style={{textAlign: "center"}}>
        Across sectors, we indetify new markets, scale revenue, improve operations and provide financing support
      </p>
    </div>
    <br />
    <CoreValues />
    <br />
    <br />
    <br />
    <CompanyOverview />
    <br />
    <br />
    <ClientsSay />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Subscribe />
    <Career />
    <br />
    <br />
    <Consultation/>
    <br></br>
    <br></br>
  </div>
);

export default IndexPage;
