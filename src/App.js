import React, { memo } from "react";
import { useRoutes, HashRouter } from "react-router-dom";

import routes from "./router";

import LXAppFooter from "./components/app-footer";
import LXAppHeader from "./components/app-header";

// 引入路由映射代码
function RouterElement() {
  const element = useRoutes(routes);
  return element;
}

const App = memo(() => {
  return (
    <HashRouter>
      <LXAppHeader />
      <RouterElement />
      <LXAppFooter />
    </HashRouter>
  );
});

export default App;
