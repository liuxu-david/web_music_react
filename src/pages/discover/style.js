import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  background-color: #c20c0c;
  height: 30px;
  font-size: 12px;

  .discover-menu {
    display: flex;
    padding-left: 180px;
    .item {
      height: 30px;
      padding: 0 18px;
      text-align: center;
      line-height: 25px;

      &:nth-child(3) a {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          top: 2px;
          right: 5px;
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          border: 1px solid #fff;
          background-image: url(${require("@/assets/img/menu-icon.png")});
          background-size: cover;
          color: #fff;
        }
      }

      a {
        display: inline-block;
        height: 20px;
        padding: 0 13px;
        line-height: 20px;
        border-radius: 20px;
        color: #ffffff;
        cursor: pointer;

        &.active,
        &:hover {
          background-color: #9b0909;
          text-decoration: none;
        }
      }
    }
  }
`;
