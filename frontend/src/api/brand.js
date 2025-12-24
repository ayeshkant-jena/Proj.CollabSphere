import api from "./axios";

const authHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const getBrandProfile = () => api.get("brand/profile/", authHeader());
export const saveBrandProfile = (data) => api.post("brand/profile/", data, authHeader());
export const updateBrandProfile = (data) => api.put("brand/profile/", data, authHeader());

export const getCampaigns = () => api.get("brand/campaigns/", authHeader());
export const createCampaign = (data) => api.post("brand/campaigns/", data, authHeader());
