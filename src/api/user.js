import api from "./api";

export const listAllUsers = async () => {
  await api.get("/users").then(function (response) {
    console.log(response);
  });
};

export const login = async (user) => {
  await api.post("/users/login", user).then(function (response) {
    const auth = {
      headers: {
        Authorization: `Bearer ${response.data.token}`,
      },
    };
    return auth;
  });
};

export const save = async (user) => {
  await api.post("/users", user).then(() => {
    return true;
  });
};
