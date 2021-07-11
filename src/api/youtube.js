import keys from "../config/keys";
import axios from "axios";

// create instance of axios client
const axiosConf = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    type: "video",
    key: keys.googleVideoAPIKey,
  },
});

export default axiosConf;
