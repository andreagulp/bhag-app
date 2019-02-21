import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Thermometer from "../components/Thermometer";
import "./index.css";

const IndexPage = ({ data }) => (
  <div className="App">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <header className="App-header">
      <Thermometer
        theme="light"
        value={data.site.siteMetadata.actuals}
        max={data.site.siteMetadata.bhag}
        format="Hrs"
        size="large"
        height="400"
      />
      <p className="App-message">{data.site.siteMetadata.title}</p>
    </header>
  </div>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        actuals
        bhag
      }
    }
  }
`;

export default IndexPage;
