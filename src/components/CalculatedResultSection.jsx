import React, { useContext } from "react";
import { MortgageContext } from "./MortgageContext";
import NoResult from "./NoResult";
import WithResult from "./WithResult";

const CalculatedResultSection = () => {
  const { results } = useContext(MortgageContext);

  if (!results) {
    return <NoResult />;
  }

  return (
    <WithResult
      monthlyRepayment={results.monthlyRepayment}
      totalInterest={results.totalInterest}
    />
  );
};

export default CalculatedResultSection;
