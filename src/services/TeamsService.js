import http from "./http-common";

const getAll = async () => {
  return await http.get("/teams");
};

const get = async (id) => {
  return await http.get(`/teams/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  get,
};
