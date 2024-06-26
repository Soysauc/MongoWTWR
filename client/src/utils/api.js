//import { baseUrl } from "./constants";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "to be changed"
    : "http://localhost:3001";

function request(url, options) {
  return fetch(url, options).then(handleServerResponse);
}

export const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const getItems = () => {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "any",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const addItem = (name, imageUrl, weather) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "any",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  });
};

export const deleteItem = (_id) => {
  return request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "any",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const addCardLike = (_id) => {
  return request(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const removeCardLike = (_id) => {
  return request(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
