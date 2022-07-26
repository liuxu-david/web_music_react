import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 204px;
  padding-bottom: 30px;
  font-size: 14px;
  overflow: hidden;

  .cover-top {
    position: relative;
    width: 140px;
    height: 140px;
    margin-bottom: 8px;

    .img {
      width: 100%;
      height: 100%;
    }

    .mask {
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${require("../../assets/img/sprite_cover.png")});
    }
    .mask-bottom {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 27px;
      background-position: 0 -537px;
      color: #cccccc;
      display: flex;
      justify-content: space-between;

      .play-count {
        display: inline-block;
        width: 18px;
        height: 17px;
        background-position: 0 6px;
        background-position: 0px -21px;
        margin: 5px 0 0 8px;
      }
      .count {
        position: absolute;
        bottom: 3px;
        font-size: 12px;
      }
      .play {
        display: inline-block;
        width: 18px;
        height: 27px;
        background-position: 0 6px;
        margin-right: 10px;
      }
    }
  }
`;
