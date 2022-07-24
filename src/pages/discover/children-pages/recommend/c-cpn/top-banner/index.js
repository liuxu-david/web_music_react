import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Carousel } from "antd";

import {
  TopBannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from "./style";
import { getTopBannerAction } from "../../store/recommend-slice";

const LXTopBanner = memo(() => {
  const [currentIndex, setcurrentIndex] = useState(1);

  const { TopBanners } = useSelector((state) => state.recommend, shallowEqual);
  const dispatch = useDispatch();

  // hooks代码
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  const bannerRef = useRef();
  const bannerItemChange = useCallback((from, to) => {
    setcurrentIndex(to);
  }, []);

  // 其它逻辑代码
  const bgImg =
    TopBanners &&
    TopBanners[currentIndex] &&
    TopBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <TopBannerWrapper bgImage={bgImg}>
      <div className="banner w980">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerItemChange}
          >
            {TopBanners.map((item, index) => {
              return (
                <div key={item.scm} className="banner-item">
                  <img
                    className="img"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <p> PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <button onClick={(e) => bannerRef.current.prev()}></button>
          <button onClick={(e) => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </TopBannerWrapper>
  );
});

export default LXTopBanner;
