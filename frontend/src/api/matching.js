import api from "./axios";

export const getMatches = (campaignId) =>
  api.get(`campaigns/match/${campaignId}/`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
