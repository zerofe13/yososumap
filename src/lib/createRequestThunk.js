export default function creatRequestThunk(type, requet) {
  const SUCCESS = `${type}_SUCCESS`;
  const FALIURE = `${type}_FALIURE`;
  return (params) => async (dispatch) => {
    dispatch({ type });
    try {
      const resopnse = await requet(params);
      dispatch({
        type: SUCCESS,
        payload: resopnse.data,
      });
    } catch (e) {
      dispatch({
        type: FALIURE,
        payload: e,
        error: true,
      });
      throw e;
    }
  };
}
