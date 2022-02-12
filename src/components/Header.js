import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  background-color: rgba(37, 143, 255);
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  h1 {
    padding-left: 1rem;
    padding-top: 0.25rem;
    color: white;
    margin: 0;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <h1>요소수</h1>
    </HeaderBlock>
  );
};

export default Header;
