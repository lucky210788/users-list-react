import axios from "axios";
import {api} from "../api";

const getPosts = async (userId: number) => {
  const endpoint = api.posts;
  const response = await axios.get(endpoint, {
    params: {
      userId: userId
    }
  });
  return await response.data;
}

export const postsService = {
  getPosts,
}
