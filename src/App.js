import "./App.css";
import MapContainer from "./container/MapContainer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getYoso } from "./modules/yoso";

const App = () => {
  const dispatch = useDispatch();
  const { yosoInfo, yosoLoading, yosoError } = useSelector((state) => ({
    yosoInfo: state.yoso.info,
    yosoLoading: state.yoso.loading,
    yosoError: state.yoso.error,
  }));
  useEffect(() => {
    dispatch(getYoso());
  }, [dispatch]);
  if (yosoLoading) return <div>로딩중...</div>;
  if (yosoError) return <div>{yosoError}</div>;
  if (!yosoInfo) return null;
  return (
    <>
      <Header />
      <MapContainer info={yosoInfo} />
      <Menu />
    </>
  );
};

export default App;
