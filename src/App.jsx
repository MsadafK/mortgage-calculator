import React from "react";
import MortgageProvider from "./components/MortgageContext";
import MortgageCalculator from "./components/MortgageCalculator";
import InputFieldSection from "./components/InputFieldSection";
import CalculatedResultSection from "./components/CalculatedResultSection";

const App = () => {
  return (
    <div className="border border-red bg-slate-100 min-h-screen flex items-center justify-center">
      <MortgageProvider>
        <MortgageCalculator>
          <InputFieldSection />
          <CalculatedResultSection />
        </MortgageCalculator>
      </MortgageProvider>
    </div>
  );
};

export default App;
