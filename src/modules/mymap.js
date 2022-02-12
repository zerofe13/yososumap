import { createAction, handleActions } from "redux-actions";

const SET_MYMAP = "mymap/SET_MYMAP";

export const setMymap = createAction(SET_MYMAP, ({ map }) => map);

const initialState = {
  map: null,
};

const mymap = handleActions(
  {
    [SET_MYMAP]: (state, action) => ({
      ...state,
      map: action.payload,
    }),
  },
  initialState
);

export default mymap;
