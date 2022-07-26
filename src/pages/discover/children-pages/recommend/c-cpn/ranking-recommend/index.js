import React, { memo } from "react";

import { RankingRcmdWrapper, RankingRcmdContent } from "./style";
import LXThemeHeaderRcmd from "@/components/theme-header-rcmd";

const LXRankingRcmd = memo(() => {
  return (
    <RankingRcmdWrapper>
      <LXThemeHeaderRcmd title="榜单" />
      <RankingRcmdContent></RankingRcmdContent>
    </RankingRcmdWrapper>
  );
});

export default LXRankingRcmd;
