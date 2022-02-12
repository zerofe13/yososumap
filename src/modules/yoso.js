import { handleActions } from "redux-actions";
import creatRequestThunk from "../lib/createRequestThunk";
import * as api from "../lib/api";

const GET_YOSO = "yoso/GET_YOSO";
const GET_YOSO_SUCCESS = "yoso/GET_YOSO_SUCCESS";
const GET_YOSO_FAILURE = "yoso/GET_YOSO_FAILURE";

export const getYoso = creatRequestThunk(GET_YOSO, api.getInfo);

const initialState = {
  info: null,
  loading: false,
  error: false,
};

const yoso = handleActions(
  {
    [GET_YOSO]: (state) => ({
      ...state,
      loading: true,
    }),
    [GET_YOSO_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      info: action.payload,
    }),
    [GET_YOSO_FAILURE]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState
);

export default yoso;
