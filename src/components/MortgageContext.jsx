import React, { createContext, useState } from "react";

export const MortgageContext = createContext();

const MortgageProvider = ({ children }) => {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [errors, setErrors] = useState({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    mortgageType: "",
  });
  const [results, setResults] = useState(null);

  const validateInputs = () => {
    const newErrors = {};

    // Validate Mortgage Amount
    if (
      !mortgageAmount ||
      Number(mortgageAmount) < 10000 ||
      Number(mortgageAmount) > 10000000
    ) {
      newErrors.mortgageAmount =
        "Value must be greater than or equal to 10,000 and less than or equal to 10,000,000.";
    }

    // Validate Mortgage Term
    if (
      !mortgageTerm ||
      Number(mortgageTerm) < 1 ||
      Number(mortgageTerm) > 40
    ) {
      newErrors.mortgageTerm = "Value must range between 1 and 40 years.";
    }

    // Validate Interest Rate
    if (
      !interestRate ||
      Number(interestRate) < 0 ||
      Number(interestRate) > 100
    ) {
      newErrors.interestRate = "Value must range between 0 and 100.";
    }

    // Validate Mortgage Type (Radio Buttons)
    if (!mortgageType) {
      newErrors.mortgageType = "Please select a mortgage type.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const calculateResults = () => {
    const P = Number(mortgageAmount); // Principal loan amount
    const r = Number(interestRate) / 100 / 12; // Monthly interest rate
    const n = Number(mortgageTerm) * 12; // Total number of payments

    let monthlyRepayment = 0;
    let totalInterest = 0;

    if (mortgageType === "repayment") {
      // Repayment Mortgage Logic
      monthlyRepayment =
        (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
      totalInterest = monthlyRepayment * n - P;
    } else if (mortgageType === "interest-only") {
      // Interest-Only Mortgage Logic
      monthlyRepayment = P * r; // Only interest is paid monthly
      totalInterest = monthlyRepayment * n; // Total interest over the term
    }

    // Update results state
    setResults({
      monthlyRepayment: monthlyRepayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    });
  };

  const clearAll = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("");
    setErrors({});
    setResults(null);
  };

  return (
    <MortgageContext.Provider
      value={{
        mortgageAmount,
        setMortgageAmount,
        mortgageTerm,
        setMortgageTerm,
        interestRate,
        setInterestRate,
        mortgageType,
        setMortgageType,
        errors,
        results,
        validateInputs,
        calculateResults,
        clearAll,
      }}
    >
      {children}
    </MortgageContext.Provider>
  );
};

export default MortgageProvider;
