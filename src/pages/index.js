import * as React from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

// import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import CustomJumbotron from "../components/custom_jumbotron";
import CoreValues from '../components/core_values';

const IndexPage = () => (
  <div>
    <Header />
    <SEO title="Home" />
    <CustomJumbotron />
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
  </div>
);

export default IndexPage;
