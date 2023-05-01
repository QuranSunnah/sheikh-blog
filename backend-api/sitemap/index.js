import apiClient from "@/services/api-client";

export const fetchSiteMapUrl = async () => {
  try {
    const res = await apiClient.get("/v1/sitemap");

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error.response);
  }
};
