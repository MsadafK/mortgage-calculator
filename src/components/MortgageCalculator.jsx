import React from "react";

const MortgageCalculator = ({ children }) => {
  return (
    <div className="border font-jakarta max-w-[320px] md:max-w-[668px] mx-auto bg-white rounded-lg md:my-12 xl:max-w-[1008px] xl:grid xl:grid-cols-2 xl:rounded-2xl">
      {children}
    </div>
  );
};

export default MortgageCalculator;
