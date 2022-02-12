import React from "react";
import styled from "styled-components";

const MenuBlock = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  bottom: 0;
  width: 250px;
  margin: 10px 0 30px 10px;
  padding: 5px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  font-size: 12px;
  border-radius: 10px;
`;

const Menu = () => {
  return <MenuBlock></MenuBlock>;
};

export default Menu;
