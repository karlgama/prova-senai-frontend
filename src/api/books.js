import api from "./api";

export const listBooks = async () => {
  return await api.get("/books");
};

export const save = async (book) => {
  await api
    .post("/books", book, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(() => {
      return true;
    });
};
