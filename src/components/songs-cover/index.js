import React, { memo } from "react";

import { SongsCoverWrapper } from "./style";
import { getCounter, getSizeImage } from "@/utils/format-utils";

const LXSongsCover = memo((props) => {
  const { name, picUrl, playCount } = props.info;
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img className="img" src={getSizeImage(picUrl, 140)} alt={name}></img>
        <a className="mask" href="/">
          {null}
        </a>
        <div className="mask-bottom sprite_cover">
          <span>
            <i className="sprite_icon play-count"></i>
            <i className="count">{getCounter(playCount)}</i>
          </span>

          <i className="sprite_icon play"></i>
        </div>
      </div>
      <div className="cover-title">{name}</div>
    </SongsCoverWrapper>
  );
});

export default LXSongsCover;
