import React from "react";
import { Body1 } from "./css/Pages_css.js";
import SideNav from "./nav/sidenav";

import MyProvider from "./Context";

function App() {
  return (
    <Body1>
      <MyProvider>
        <SideNav />
      </MyProvider>
    </Body1>
  );
}

export default App;
