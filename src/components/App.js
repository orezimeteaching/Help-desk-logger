import React from "react";
import "../App.css";
import Jobs from "./Jobs";
import ItloggerContextProvider from "../context/itLoggerContext";
import Header from "./Header";
import JobForm from "./JobForm";
const App = () => {
  return (
    <ItloggerContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <JobForm />
            <Jobs />
          </div>
        </div>
      </div>
    </ItloggerContextProvider>
  );
};

export default App;
