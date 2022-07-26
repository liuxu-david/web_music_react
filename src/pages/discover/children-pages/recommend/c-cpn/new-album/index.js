import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Carousel } from "antd";
import LXThemeHeaderRcmd from "@/components/theme-header-rcmd";
import { getNewAlbumAction } from "../../store/recommend-slice";
import { NEW_ALBUM_LIMIT } from "@/common/constants";
import { NewAlbumWrapper } from "./style";
import LXAlbumCover from "@/components/album-cover";

const LXNewAlbum = memo(() => {
  const { NewAlbum } = useSelector((state) => state.recommend);

  const dispatch = useDispatch();
  const albumRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT));
  }, [dispatch]);

  return (
    <div>
      <LXThemeHeaderRcmd title="新碟上架" />
      <NewAlbumWrapper>
        <button
          className="btn prev sprite_02"
          onClick={(e) => albumRef.current.prev()}
        >
          &nbsp;
        </button>
        <div className="content">
          <Carousel dots={false} ref={albumRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {NewAlbum.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <LXAlbumCover
                        info={iten}
                        width={118}
                        size={100}
                        bgp={-570}
                        key={iten.id}
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="btn next sprite_02"
          onClick={(e) => albumRef.current.next()}
        >
          &nbsp;
        </button>
      </NewAlbumWrapper>
    </div>
  );
});

export default LXNewAlbum;
