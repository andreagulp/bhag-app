import React from "react";
import moment from "moment";

const DaysLeft = () => {
  const today = moment();
  const yearEnd = moment("2019-12-15");

  const dLeft = yearEnd.diff(today, "days");
  const nonProdTime = 0.3;
  const prodDaysLeft = Math.round(dLeft - dLeft * nonProdTime);

  console.log(dLeft);
  return <>{prodDaysLeft} Productive Days Left</>;
};

export default DaysLeft;
