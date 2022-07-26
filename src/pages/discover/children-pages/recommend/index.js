import React, { memo } from "react";

import LXTopBanner from "./c-cpn/top-banner";
import LXHotRecommend from "./c-cpn/hot-recommend";

import {
  RecommendWrapper,
  RecommendContent,
  RecommendLeft,
  RecommendRight,
} from "./style";
import LXNewAlbum from "./c-cpn/new-album";
import LXRankingRcmd from "./c-cpn/ranking-recommend";

const LXRecommend = memo(() => {
  return (
    <RecommendWrapper>
      {/* 推荐页头部轮播图 */}
      <LXTopBanner />
      {/* 推荐页中心部分内容 */}
      <RecommendContent className="w980">
        {/* 左边部分 */}
        <RecommendLeft>
          {/* 热门推荐 */}
          <LXHotRecommend />
          {/* 新碟上架 */}
          <LXNewAlbum />
          {/* 榜单 */}
          <LXRankingRcmd />
        </RecommendLeft>
        {/* 右边部分 */}
        <RecommendRight></RecommendRight>
      </RecommendContent>
    </RecommendWrapper>
  );
});

export default LXRecommend;
