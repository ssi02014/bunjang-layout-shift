import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>번개장터 레이아웃 시프트 예제</h1>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  margin: 50px auto;
  width: 70%;
  h1 {
    color: #fff;
    text-align: center;
    font-size: 2rem;
  }
`;
export default Header;
