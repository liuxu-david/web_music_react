import { createSlice } from "@reduxjs/toolkit";
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
} from "@/services/recommend";

export const recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    TopBanners: [],
    HotRecommend: [],
    NewAlbum: [],
  },
  reducers: {
    // 请求数据
    changeTopBannerAction(state, res) {
      state.TopBanners = res.payload.banners;
    },
    changeHotRecommendAction(state, res) {
      // console.log(res.payload.result);
      state.HotRecommend = res.payload.result;
    },
    changeNewAlbumAction(state, res) {
      state.NewAlbum = res.payload.albums;
    },
  },
});

// 导出actions
export const {
  changeTopBannerAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
} = recommendSlice.actions;

// 异步请求数据（发送网络请求的action）
// 获取轮播图
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners(8).then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};
// 热门推荐
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};
// 新得上架
export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

// 导出reducer
export default recommendSlice.reducer;
