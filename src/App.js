import React from "react";

import SideNav from "./components/sidenav";
import TopNav from "./components/topnav";
import MyProvider from "./Context";

function App() {
  return (
    <div className="App">
      <MyProvider>
        <TopNav />
        <SideNav />
      </MyProvider>
    </div>
  );
}

export default App;
