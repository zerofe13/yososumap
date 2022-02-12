import axios from "axios";

export const getInfo = () =>
  axios.get(
    `/uws/v1/inventory?page=1&perPage=1000&serviceKey=${process.env.REACT_APP_UWS_KEY}`
  );
