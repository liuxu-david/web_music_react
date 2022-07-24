const devUrl = "http://123.207.32.32:9001";
const proUrl = "http://123.207.32.32:9001";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? devUrl : proUrl;
export const TIMEOUT = 5000;
