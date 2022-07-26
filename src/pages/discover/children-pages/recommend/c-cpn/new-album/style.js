import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  height: 186px;
  border: 1px solid #d3d3d3;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn {
    width: 17px;
    height: 17px;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 20px;
  }
  .prev {
    margin-left: 5px;
    background-position: -261px -75px;
  }
  .next {
    margin-right: 5px;
    background-position: -300px -75px;
  }
  .content {
    width: 645px;
    height: 150px;
    padding-top: 12px;

    .page {
      display: flex !important;
      justify-content: space-between;
      width: 640px;
      padding-left: 5px;
    }
  }
`;
