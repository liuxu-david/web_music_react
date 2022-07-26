import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import LXThemeHeaderRcmd from "@/components/theme-header-rcmd";
import { HotRecommendWrapper } from "./style";
import { getHotRecommendAction } from "../../store/recommend-slice";
import { HOT_RECOMMEND_LIMIT } from "@/common/constants";
import LXSongsCover from "@/components/songs-cover";

const LXHotRecommend = memo(() => {
  const { HotRecommend } = useSelector(
    (state) => state.recommend,
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <LXThemeHeaderRcmd
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      />
      <div className="recommend-list">
        {HotRecommend.map((item, index) => {
          return <LXSongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});

export default LXHotRecommend;
