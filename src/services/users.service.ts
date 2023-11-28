import axios from "axios";
import {api} from "../api";

const getUsers = async () => {
  const endpoint = api.users;
  const response = await axios.get(endpoint);
  return await response.data;
}

export const usersService = {
  getUsers,
}
