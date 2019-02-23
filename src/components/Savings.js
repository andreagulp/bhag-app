import React from "react";
import { StaticQuery, graphql } from "gatsby";
import moment from "moment";

const query = graphql`
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

const Savings = ({ data }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const yearStart = moment("2019-01-01");
        const yearEnd = moment("2019-12-30");
        const today = moment();

        const daysPerYear = yearEnd.diff(yearStart, "days");
        const nonProdTime = 0.3;
        const prodDaysPerYear = Math.round(
          daysPerYear - daysPerYear * nonProdTime
        );
        const forecastSavingsPerDay =
          data.site.siteMetadata.bhag / prodDaysPerYear;

        const daysSinceYearStart = today.diff(yearStart, "days");
        // const prodDaysSinceYearStart = Math.round(
        //   daysSinceYearStart - daysSinceYearStart * nonProdTime
        // );

        const forecastSavingsToDate = Math.round(
          daysSinceYearStart * forecastSavingsPerDay
        );

        const actualsVsForecast = Math.round(
          data.site.siteMetadata.actuals - forecastSavingsToDate
        );

        console.log("prodDaysPerYear", prodDaysPerYear);
        console.log("forecastSavingsPerDay", forecastSavingsPerDay);
        console.log("forecastSavingsToDate", forecastSavingsToDate);

        return (
          <>
            Our Actuals are {data.site.siteMetadata.actuals} hrs, We Forecasted{" "}
            {forecastSavingsToDate} hrs ({actualsVsForecast} hrs)
          </>
        );
      }}
    />
  );
};

export default Savings;
