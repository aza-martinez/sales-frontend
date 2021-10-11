import http from "./http-common";

const getSalesByUser = async (userId) => {
  return await http.get(`/sales/users/${userId}`);
};

const getSalesByTeam = async (teamId) => {
  return await http.get(`/sales/team/${teamId}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSalesByUser,
  getSalesByTeam,
};
