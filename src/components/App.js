import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Navbar from './Navbar';
import Channels from './Channels';
import Home from './Home';
import Chat from './Chat';

import data from '../data';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    font-family: Catamaran, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 500;
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
    selectedGuildId: 1111,
    currentArea: {
      type: 'CHAT'
    }
  };

  getContentComponent = () => {
    const { currentArea } = this.state;
    if (currentArea.type === 'HOME') {
      return Home;
    }
    if (currentArea.type === 'CHAT') {
      return Chat;
    }
  };

  getSelectedGuild = () => {
    const { selectedGuildId } = this.state;
    return selectedGuildId ? data.guilds.find(g => g.id === selectedGuildId) : null;
  };

  getChannelsHeaderContent = () => {
    const { selectedGuildId } = this.state;

    return selectedGuildId ? this.getSelectedGuild().name : 'textbox here soon';
  };

  getGuildCategories = () => {
    const guild = this.getSelectedGuild();
    return guild ? guild.categories : null;
  };

  handleHomeClick = () => {
    this.setState({ selectedGuildId: null, currentArea: { type: 'HOME' } });
  };

  handleGuildClick = guildId => {
    this.setState({ selectedGuildId: guildId, currentArea: { type: 'CHAT' } });
  };

  render() {
    const { selectedGuildId } = this.state;
    const ContentComponent = this.getContentComponent();

    return (
      <StyledApp>
        <GlobalStyle />

        <Navbar
          onHomeClick={this.handleHomeClick}
          onGuildClick={this.handleGuildClick}
          selectedGuildId={selectedGuildId}
        />
        <Channels header={this.getChannelsHeaderContent()} categories={this.getGuildCategories()} />
        <ContentComponent className="appContent" />
      </StyledApp>
    );
  }
}

export default App;
