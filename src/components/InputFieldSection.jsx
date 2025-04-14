import { useContext } from "react";
import { MortgageContext } from "./MortgageContext";
import calculatorImage from "../assets/icon-calculator.svg";

const InputFieldSection = () => {
  const {
    mortgageAmount,
    setMortgageAmount,
    mortgageTerm,
    setMortgageTerm,
    interestRate,
    setInterestRate,
    mortgageType,
    setMortgageType,
    errors,
    validateInputs,
    calculateResults,
    clearAll,
  } = useContext(MortgageContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateInputs()) {
      calculateResults();
    }
  };

  return (
    <div className="p-4 rounded-t-lg md:p-6 xl:rounded-l-xl xl:rounded-r-none">
      {/* title and button container */}
      <div className="md:flex md:justify-between md:items-center">
        <h1 className="font-semibold text-2xl">Mortgage Calculator</h1>
        <button
          type="button"
          className="text-sm text-slate-700 underline cursor-pointer hover:text-slate-950 transition duration-300 ease-in-out"
          aria-label="Clear all form inputs"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
      {/* form */}
      <form
        className="flex flex-col gap-4 my-6 md:grid md:grid-cols-2 md:gap-6"
        onSubmit={handleSubmit}
      >
        {/* Mortgage Amount */}
        <div className="col-span-2 flex flex-col gap-2">
          <label htmlFor="mortgage-amount" className="text-slate-700">
            Mortgage Amount
          </label>
          <div className="relative border border-slate-500 rounded-md hover:border-slate-900 transition duration-300 ease-in-out">
            <input
              type="number"
              id="mortgage-amount"
              className="peer w-full rounded-md p-2 pl-13 cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
              value={mortgageAmount}
              onChange={(e) => setMortgageAmount(e.target.value)}
              min="10000"
              max="10000000"
            />
            <span className="py-2 px-4 absolute top-0 left-0 h-full rounded-l-md bg-slate-200 font-semibold text-slate-700 peer-focus:bg-lime peer-focus:text-slate-950">
              $
            </span>
          </div>
          {errors.mortgageAmount && (
            <p className="text-sm font-semibold text-red-500">
              {errors.mortgageAmount}
            </p>
          )}
        </div>

        {/* Mortgage Term */}
        <div className="flex flex-col gap-2">
          <label htmlFor="mortgage-term" className="text-slate-700">
            Mortgage Term
          </label>
          <div className="relative mt-2 border border-slate-500 rounded-md hover:border-slate-900 transition duration-300 ease-in-out">
            <input
              type="number"
              id="mortgage-term"
              className="peer w-full rounded-md p-2 pr-14 cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
              value={mortgageTerm}
              onChange={(e) => setMortgageTerm(e.target.value)}
              min="1"
              max="40"
            />
            <span className="py-2 px-4 absolute top-0 right-0 rounded-r-md bg-slate-200 font-semibold text-slate-700 peer-focus:bg-lime peer-focus:text-slate-950">
              years
            </span>
          </div>
          {errors.mortgageTerm && (
            <p className="text-sm font-semibold text-red-500">
              {errors.mortgageTerm}
            </p>
          )}
        </div>

        {/* Interest Rate */}
        <div className="flex flex-col gap-2">
          <label htmlFor="interest-rate" className="text-slate-700">
            Interest Rate
          </label>
          <div className="relative mt-2 border border-slate-500 rounded-md hover:border-slate-900 transition duration-300 ease-in-out">
            <input
              type="number"
              id="interest-rate"
              className="peer w-full rounded-md p-2 pr-14 cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              min="0"
              max="100"
            />
            <span className="py-2 px-4 absolute top-0 right-0 rounded-r-md bg-slate-200 font-semibold text-slate-700 peer-focus:bg-lime peer-focus:text-slate-950">
              %
            </span>
          </div>
          {errors.interestRate && (
            <p className="text-sm font-semibold text-red-500">
              {errors.interestRate}
            </p>
          )}
        </div>

        {/* Mortgage Type */}
        <fieldset className="col-span-2 flex flex-col gap-2">
          <legend className="text-slate-700">Mortgage Type</legend>
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-center gap-2 pl-2">
              <input
                type="radio"
                id="repayment"
                name="mortgage-type"
                value="repayment"
                className="peer accent-lime"
                checked={mortgageType === "repayment"}
                onChange={(e) => setMortgageType(e.target.value)}
                tabIndex="0" // Ensure this radio button is focusable
              />
              <label
                htmlFor="repayment"
                className="w-full block border border-slate-500 rounded-md p-2 font-semibold cursor-pointer peer-checked:border-lime peer-checked:bg-lime-100 hover:border-lime transition duration-300 ease-in-out"
              >
                Repayment
              </label>
            </div>
            <div className="flex items-center gap-2 pl-2">
              <input
                type="radio"
                id="interest-only"
                name="mortgage-type"
                value="interest-only"
                className="peer accent-lime"
                checked={mortgageType === "interest-only"}
                onChange={(e) => setMortgageType(e.target.value)}
                tabIndex="0" // Ensure this radio button is focusable
              />
              <label
                htmlFor="interest-only"
                className="w-full block border border-slate-500 rounded-md p-2 font-semibold cursor-pointer peer-checked:border-lime peer-checked:bg-lime-100 hover:border-lime transition duration-300 ease-in-out"
              >
                Interest Only
              </label>
            </div>
          </div>
          {errors.mortgageType && (
            <p className="text-sm font-semibold text-red-500">
              {errors.mortgageType}
            </p>
          )}
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-full px-2 py-3 bg-lime text-slate-900 flex items-center justify-center gap-2 hover:bg-lime-100 transition duration-300 ease-in-out xl:col-span-2 xl:gap-4 cursor-pointer"
        >
          <img src={calculatorImage} alt="" />
          <span className="font-semibold">Calculate Repayments</span>
        </button>
      </form>
    </div>
  );
};

export default InputFieldSection;
