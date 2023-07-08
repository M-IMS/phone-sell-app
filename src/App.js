import React from "react";

import HomePage from "./components/HomePage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="md:flex md:flex-row">
      <SideBar />
      <HomePage />
      
    </div>
  );
}

export default App;
