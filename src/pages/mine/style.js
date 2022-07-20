import styled from "styled-components";

export const MineWrapper = styled.div`
  .mine-pic {
    min-height: 700px;
    background-color: #fff;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    .pic {
      width: 807px;
      height: 368px;
      margin: 0 auto;
      background: url(${require("../../assets/img/mymusic.png")}) no-repeat;
      background-position: 0 104px;
    }
  }
`;
