import axios from "axios";

const apiClient = axios.create({
  baseURL: "/", // here link to backend
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: [
    data => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    data => {
      return JSON.parse(data);
    },
  ],
});

async function getStartStateGame() {
  return await (
    await apiClient.get("getWorld")
  ).data;
}

async function getNewStateGame(body) {
  return await (
    await apiClient.post("postNewWorld", body)
  ).data;
}

export { getStartStateGame, getNewStateGame };
