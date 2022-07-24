import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config";

// 自定义axios实例添加拦截器
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return err;
  }
);
// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return err;
  }
);

export default instance;
