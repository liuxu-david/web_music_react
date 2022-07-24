import { configureStore } from "@reduxjs/toolkit";

import recommendReducer from "../pages/discover/children-pages/recommend/store";

export const store = configureStore({
  reducer: {
    recommend: recommendReducer,
  },
});
