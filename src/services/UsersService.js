import http from "./http-common";

const getAll = async () => {
  return await http.get("/users");
};

const get = async (id) => {
  return await http.get(`/users/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  get,
};
