import React, { memo } from "react";

import LXTopBanner from "./c-cpn/top-banner";

import { RecommendWrapper } from "./style";

const LXRecommend = memo(() => {
  return (
    <RecommendWrapper>
      <LXTopBanner />
    </RecommendWrapper>
  );
});

export default LXRecommend;
