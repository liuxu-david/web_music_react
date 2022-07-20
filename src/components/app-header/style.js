import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  color: #333333;
  font-size: 14px;

  .content {
    display: flex;
    justify-content: space-between;
    height: 70px;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: inline-block;
    width: 177px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          top: 21px;
          left: 100px;
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
        }
      }

      &:hover a,
      a.active {
        text-decoration: none;
        color: #fff;
        background-color: #000;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        left: 50%;
        bottom: -1px;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #ccc;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
  }
  input {
    &::placeholder {
      font-size: 12px;
    }
  }
  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #666;
    text-align: center;
    margin: 0 16px;
    border-radius: 16px;
  }
  .login {
    color: #787878;
    &:active,
    &:hover {
      text-decoration: underline;
    }
  }
`;
