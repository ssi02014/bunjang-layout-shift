import "./App.css";
import data from "./data/db.json";
import styled, { createGlobalStyle } from "styled-components";
import PhotoList from "./components/PhotoList";
import Header from "./components/Header";

function App() {
  return (
    <AppWrap>
      <GlobalStyle />
      <Header />
      <PhotoList photos={data.photos} />
    </AppWrap>
  );
}

const AppWrap = styled.div`
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-size: 16px;
    background-color: #000;
  }

  ul, li, ol {
    list-style: none;
  }

  a, a:visited, a:active, a:hover {
    color: initial;
  }
`;

export default App;
