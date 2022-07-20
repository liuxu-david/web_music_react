import React, { memo } from "react";
import { Outlet, NavLink } from "react-router-dom";

import { discoverMenu } from "../../common/local-data";
import { DiscoverWrapper } from "./style";

const LXDiscover = memo(() => {
  return (
    <>
      <DiscoverWrapper>
        <div className="discover-menu w1100">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </div>
      </DiscoverWrapper>
      <Outlet />
    </>
  );
});

export default LXDiscover;
