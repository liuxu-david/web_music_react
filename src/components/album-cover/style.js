import styled from "styled-components";

export const AlbumWrapper = styled.div`
  position: relative;
  width: ${(props) => props.width + "px"};

  .album-top {
    .img {
      width: ${(props) => props.size + "px"};
      height: ${(props) => props.size + "px"};
    }
    .album-mask {
      display: inline-block;
      width: ${(props) => props.width + "px"};
      height: ${(props) => props.size + "px"};
      background-position: 0 ${(props) => props.bgp + "px"};
      text-decoration: none;
    }
  }
  .album-info {
    width: ${(props) => props.size + "px"};
    .name {
      line-height: 18px;
      font-size: 12px;
      color: #333;
      margin-top: 5px;
    }
    .artist {
      line-height: 18px;
      font-size: 12px;
      color: #666666;
      margin-top: 3px;
    }
  }
`;
