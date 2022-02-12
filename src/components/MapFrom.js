import React from "react";
import styled from "styled-components";

const MapFromBlock = styled.div`
  position: absolute;
  margin: 0;
  top: 50px;
  width: 100%;
  height: 100%;
`;

const MapFrom = () => {
  return <MapFromBlock id="myMap"></MapFromBlock>;
};

export default MapFrom;
