import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 172px;

  .content {
    display: flex;
    justify-content: space-between;
  }
`;
export const FooterLeft = styled.div`
  font-size: 12px;
  ul {
    display: flex;
    width: 520px;
    height: 24px;
    color: #999999;
    line-height: 24px;

    a {
      color: #999999;
    }

    .line {
      margin: 0 4px;
    }
  }
  p {
    display: inline-block;
    width: 520px;
    height: 24px;
    line-height: 24px;
    color: #666666;
    .logo {
      display: inline-block;
      width: 14px;
      height: 14px;
      background: url(${require("@/assets/img/police.png")}) no-repeat;
      background-size: cover;
      margin: 0 3px 0 10px;
    }
  }
`;
export const FooterRight = styled.ul`
  display: flex;
  width: 420px;
  margin-top: 20px;

  .footer-icon {
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 70px;
    margin-right: 38px;

    .image-link {
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${require("@/assets/img/sprite_footer_02.png")});
      background-size: 110px 450px;
    }

    &:nth-child(1) .image-link {
      background-position: 0 -50px;
    }
    &:nth-child(2) .image-link {
      background-position: 0 0;
    }
    &:nth-child(3) .image-link {
      background-position: -60px -50px;
    }
    &:nth-child(4) .image-link {
      background-position: 0 -101px;
    }
    &:nth-child(5) .image-link {
      background-position: -60px -101px;
    }
    .title {
      display: block;
      width: 52px;
      height: 14px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png")});
      background-size: 170px 125px;
      margin-top: 5px;
    }
    &:nth-child(1) .title {
      background-position: 0 -22px;
    }
    &:nth-child(2) .title {
      background-position: 0 0;
    }
    &:nth-child(3) .title {
      background-position: 0 57px;
    }
    &:nth-child(4) .title {
      background-position: 0 -45px;
    }
    &:nth-child(5) .title {
      background-position: 0 13px;
    }
  }
`;
