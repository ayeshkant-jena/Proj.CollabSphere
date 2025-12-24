import api from "./axios";

export const getProfile = () =>
  api.get("influencer/profile/", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });

export const saveProfile = (data) =>
  api.post("influencer/profile/", data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });

export const updateProfile = (data) =>
  api.put("influencer/profile/", data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
