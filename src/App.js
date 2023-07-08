import React from "react";

import HomePage from "./components/HomePage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <HomePage />
      <SideBar />
    </div>
  );
}

export default App;
