import React from "react";
import { graphql } from "gatsby";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import SEO from "../components/seo";
import Thermometer from "../components/Thermometer";
import "./index.css";
import DaysLeft from "../components/DaysLeft";
import Savings from "../components/Savings";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "left"
  },
  title: {
    // marginBottom: "1em",
    margin: "0.5em",
    fontSize: "calc(20px + 2vmin)"
    // textAlign: "left"
  },
  message: {
    // margin: "0.2em",
    margin: "0.5em",
    fontSize: "calc(8px + 2vmin)"
    // textAlign: "left"
  },
  block: {
    // margin: "0.5em 1em 0.5em 1em ",
    // padding: "1em",
    // marginLeft: "10px",
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});

const IndexPage = ({ data, classes }) => (
  <div className={classes.root}>
    <SEO title="Home" keywords={[`kaizen`, `bhag`, `200k`]} />
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <div className={classes.block}>
          <Thermometer
            theme="light"
            value={data.site.siteMetadata.actuals}
            max={data.site.siteMetadata.bhag}
            format="Hrs"
            size="large"
            height="400"
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={classes.block}>
          <div className={classes.title}>
            <p>{data.site.siteMetadata.title}</p>
          </div>
          <div className={classes.message}>
            <p>
              <DaysLeft />
            </p>
            <p>
              <Savings />
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
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

export default withStyles(styles)(IndexPage);
