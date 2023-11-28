import axios from "axios";
import {api} from "../api";

const getAlbums = async (userId: number) => {
  const endpoint = api.albums;
  const response = await axios.get(endpoint, {
    params: {
      userId: userId
    }
  });
  return await response.data;
}

export const albumsService = {
  getAlbums,
}
