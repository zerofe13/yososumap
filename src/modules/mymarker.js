import { createAction, handleActions } from "redux-actions";

const SET_MYMARKER = "mymarker/SET_MYMARKER";

export const setMymarker = createAction(SET_MYMARKER, ({ marker }) => marker);

const initialState = {
  marker: null,
};

const mymarker = handleActions(
  {
    [SET_MYMARKER]: (state, action) => ({
      ...state,
      marker: action.payload,
    }),
  },
  initialState
);

export default mymarker;
