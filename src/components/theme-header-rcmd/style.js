import styled from "styled-components";

export const ThemeHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  background: url(${require("@/assets/img/sprite_02.png")}) no-repeat;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 0 34px;
  margin-bottom: 20px;
`;
export const ThemeHeaderLeft = styled.div`
  display: flex;
  .title {
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    cursor: pointer;
  }
  .keywords {
    display: flex;
    line-height: 33px;
    margin-left: 23px;
    font-size: 12px;

    .divide {
      margin: 0 10px 5px;
      color: #ccc;
    }
    div {
      &:nth-child(5) .divide {
        display: none;
      }
    }
  }
`;
export const ThemeHeaderRight = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 33px;
  .icon {
    display: block;
    width: 12px;
    height: 12px;
    background: url(${require("@/assets/img/sprite_02.png")});
    background-position: 0 227px;
    margin: 10px 0 0 5px;
  }
`;
