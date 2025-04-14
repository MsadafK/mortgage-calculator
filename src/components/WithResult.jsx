import React from "react";

const WithResult = ({ monthlyRepayment, totalInterest }) => {
  return (
    <div className="bg-slate-900 px-4 py-6 text-white flex flex-col gap-4 rounded-b-lg md:p-6 md:gap-6 xl:gap-10 xl:rounded-bl-[20%]">
      {/* title and text container */}
      <div className="flex flex-col gap-2 md:gap-4 xl:gap-6">
        <h2 className="font-semibold text-xl">Your results</h2>
        <p className="text-sm text-slate-300">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
      </div>
      {/* results container */}
      <div className="border-t-2 border-t-lime rounded-lg p-4 py-6 bg-slate-950 md:p-6">
        <div className="flex flex-col gap-4">
          <div className="">
            <p className="text-sm text-slate-300 pb-1">
              Your monthly repayment
            </p>
            <p className="text-3xl font-semibold text-lime">
              ${monthlyRepayment}
            </p>
          </div>
          <hr />
          <div className="text-sm">
            <p className="text-slate-300 pb-1">Total Interest Payable</p>
            <p className="text-xl font-semibold">${totalInterest}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithResult;
