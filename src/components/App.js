import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Navbar from './Navbar';
import Home from './Home';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    font-family: Whitney, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 400;
    height: 100%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const StyledApp = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  .appContent {
    flex: 1 1 auto;
  }
`;

class App extends React.Component {
  state = {
    currentArea: {
      type: 'HOME'
    }
  };

  getContentComponent = () => {
    const { currentArea } = this.state;
    if (currentArea.type === 'HOME') {
      return Home;
    }
  };

  render() {
    const ContentComponent = this.getContentComponent();
    return (
      <StyledApp>
        <GlobalStyle />

        <Navbar />
        <ContentComponent className="appContent" />
      </StyledApp>
    );
  }
}

export default App;
