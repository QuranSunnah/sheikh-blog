/* eslint-disable no-undef */
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_JSON_PLACE_HOLDER_URL,

  timeout: 20000,

  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export default apiClient;
