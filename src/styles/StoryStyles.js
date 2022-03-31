import styled from 'styled-components';

export const StorySection = styled.section`
  padding: 16px;
  margin-bottom: 14px;
  border: 1px solid #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 9px 5px -4px #e6e6e6;
  background-color: white;
`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;
  a {
    color: #2e2e2c;
    text-decoration: none;
  }
`;

export const StoryData = styled.div`
  > span:first-child {
    margin-right: 10px;
  }
  > span:not(:first-child):before {
    content: '•'
    margin: 0 7px;
  }
  .story__meta-bold {
    font-weight: bold;
  }
`;

export const StoryDataElement = styled.span`
  font-weight: light;
  color: ${props => props.color};
  a {
    color: #216494;
    text-decoration: none;
  }
`;