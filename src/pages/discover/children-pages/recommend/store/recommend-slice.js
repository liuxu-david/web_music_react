import { createSlice } from "@reduxjs/toolkit";
import { getTopBanners } from "@/services/recommend";

export const recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    TopBanners: [],
  },
  reducers: {
    // 请求数据
    changeTopBannerAction(state, res) {
      state.TopBanners = res.payload.banners;
    },
  },
});

// 导出actions
export const { changeTopBannerAction } = recommendSlice.actions;

// 异步请求数据（发送网络请求的action）
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

// 导出reducer
export default recommendSlice.reducer;
