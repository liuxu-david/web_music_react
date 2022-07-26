import React, { memo } from "react";

import { AlbumWrapper } from "./style";

const LXAlbumCover = memo((props) => {
  const { info, width, size, bgp } = props;
  return (
    <AlbumWrapper width={width} size={size} bgp={bgp}>
      <div className="album-top">
        <img src={info.picUrl} className="img" alt={info.name}></img>
        <a href="#/" className="album-mask image_cover">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <p className="name text-nowrap">{info.name}</p>
        <p className="artist text-nowrap">{info.artist.name}</p>
      </div>
    </AlbumWrapper>
  );
});

export default LXAlbumCover;
