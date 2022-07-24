import styled from "styled-components";

export const TopBannerWrapper = styled.div`
  background: url(${(props) => props.bgImage});
  background-size: 6000px;
  background-position: center center;
  .banner {
    display: flex;
    height: 282px;
    position: relative;
  }
`;
export const BannerLeft = styled.div`
  width: 730px;
  .banner-item {
    overflow: hidden;
    height: 282px;
    .img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const BannerRight = styled.div`
  position: relative;
  width: 254px;
  background-image: url(${require("@/assets/img/download.png")});
  background-size: cover;

  p {
    position: absolute;
    bottom: 20px;
    right: 11px;
    color: #8d8d8d;
  }
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-32px);
  button {
    position: absolute;
    width: 37px;
    height: 63px;
    cursor: pointer;
    background-color: transparent;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:nth-child(1) {
      left: -68px;
      background-position: 0 300px;
    }
    &:nth-child(2) {
      right: -68px;
      background-position: 0 150px;
    }
  }
`;
