import styled from "styled-components";

export const FriendWrapper = styled.div`
  .friend-pic {
    min-height: 700px;
    background-color: #fff;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
  .pic {
    width: 857px;
    height: 480px;
    margin: 0 auto;
    background: url(${require("../../assets/img/notlogin.jpg")}) no-repeat;
    background-position: -20px 74px;
  }
`;
