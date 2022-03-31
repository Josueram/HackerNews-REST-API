import styled, { createGlobalStyle } from 'styled-components';

export const StoryTitle = styled.h1`
  padding: 4px;
  color: #ffffff;
  text-align: center;
  font-size: 18px;  
  line-height: 1.8;
  margin-bottom: 35px;
  background-color: #216494;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    color: #000000;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    line-height: 1;
    background-color: #f7f7f7;
    
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

export const StoriesContainerSection = styled.main`
  max-width: 1140px;
  padding: 20px 15px;
  margin: auto;
`;