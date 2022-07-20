import React, { memo } from "react";

import { MineWrapper } from "./style";

const LXMine = memo(() => {
  return (
    <MineWrapper>
      <div className="mine-pic w980">
        <div className="pic"></div>
      </div>
    </MineWrapper>
  );
});

export default LXMine;
