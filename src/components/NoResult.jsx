import React from "react";
import resultsIllustrationImage from "../assets/illustration-empty.svg";
const NoResult = () => {
  return (
    <div className="bg-slate-900 px-4 py-6 text-white text-center flex flex-col items-center gap-4 rounded-b-lg md:p-6 xl:justify-center xl:gap-10 xl:rounded-r-xl xl:rounded-bl-[20%]">
      <img
        src={resultsIllustrationImage}
        alt="No results yet"
        className="w-1/2 md:w-1/3"
      />
      {/* title and text container */}
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-xl">Results shown here</h2>
        <p className="text-sm text-slate-300">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </div>
  );
};

export default NoResult;
