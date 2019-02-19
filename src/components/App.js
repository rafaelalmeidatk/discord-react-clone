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
  min-height: 100%;
  width: 100%;

  .appContent {
    flex: 1 1 auto;
  }
`;

class App extends React.Component {
  state = {
    selectedGuildId: 1111,
    selectedChannelsId: {},
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

  getGuildSelectedChannel = () => {
    const guild = this.getSelectedGuild();
    if (!guild) return null;

    const categoriesChannels = guild.categories.map(c => c.channels);
    // Here we could use flat() to merge the channels but it is still experimental
    const channels = [].concat(...categoriesChannels);

    const id = this.state.selectedChannelsId[guild.id] || guild.welcomeChannelId;
    return channels.find(channel => channel.id === id);
  };

  handleHomeClick = () => {
    this.setState({ selectedGuildId: null, currentArea: { type: 'HOME' } });
  };

  handleGuildClick = guildId => {
    this.setState({ selectedGuildId: guildId, currentArea: { type: 'CHAT' } });
  };

  handleChannelClick = (guildId, channelId) => {
    this.setState({
      selectedChannelsId: {
        ...this.state.selectedChannelsId,
        [guildId]: channelId
      }
    });
  };

  render() {
    const { selectedGuildId } = this.state;
    const ContentComponent = this.getContentComponent();
    const selectedGuild = this.getSelectedGuild();
    const selectedChannel = this.getGuildSelectedChannel();

    return (
      <StyledApp>
        <GlobalStyle />

        <Navbar
          onHomeClick={this.handleHomeClick}
          onGuildClick={this.handleGuildClick}
          selectedGuildId={selectedGuildId}
        />
        <Channels
          header={this.getChannelsHeaderContent()}
          categories={this.getGuildCategories()}
          guildId={selectedGuild.id}
          selectedChannelId={selectedChannel && selectedChannel.id}
          onChannelClick={this.handleChannelClick}
        />
        <ContentComponent
          className="appContent"
          channel={selectedChannel}
          guild={selectedGuild}
        />
      </StyledApp>
    );
  }
}

export default App;
