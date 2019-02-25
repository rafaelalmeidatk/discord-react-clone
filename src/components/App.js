import React from 'react';
import styled from 'styled-components';

import ScrollbarStyles from './ScrollbarStyles';
import GlobalStyle from './GlobalStyle';
import Navbar from './Navbar';
import Channels from './Channels';
import Home from './Home';
import Chat from './Chat';
import MemberCardPopup from './MemberCardPopup';

import data from '../data';

const StyledApp = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;

  .app-content {
    flex: 1 1 auto;
  }
`;

class App extends React.Component {
  state = {
    currentArea: 'HOME',
    selectedGuildId: null,
    selectedChannelsId: {},
    selectedPrivateChannelId: 333
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

  getMessages = () => {
    const { currentArea, selectedPrivateChannelId } = this.state;
    if (currentArea === 'HOME') {
      const dm = data.directMessages.find(dm => dm.id === selectedPrivateChannelId);
      return dm ? dm.messages : [];
    }
    if (currentArea === 'CHAT') {
      const channel = this.getGuildSelectedChannel();
      return channel.messages || [];
    }
    return [];
  };

  getSelectedChannelId = () => {
    const { currentArea, selectedPrivateChannelId } = this.state;
    if (currentArea === 'HOME') {
      return selectedPrivateChannelId;
    }
    if (currentArea === 'CHAT') {
      const channel = this.getGuildSelectedChannel();
      return channel.id;
    }
  };

  getChannelName = () => {
    const { currentArea, selectedPrivateChannelId } = this.state;
    if (currentArea === 'HOME') {
      const userId = data.directMessages.find(dm => dm.id === selectedPrivateChannelId).userId;
      return data.users[userId].username;
    }
    if (currentArea === 'CHAT') {
      const channel = this.getGuildSelectedChannel();
      return channel.name;
    }
  };

  handleHomeClick = () => {
    this.setState({ selectedGuildId: null, currentArea: 'HOME' });
  };

  handleGuildClick = guildId => {
    this.setState({ selectedGuildId: guildId, currentArea: 'CHAT' });
  };

  handleChannelClick = (guildId, channelId) => {
    const { currentArea } = this.state;
    if (currentArea === 'HOME') {
      this.setState({
        selectedPrivateChannelId: channelId
      });
    }
    if (currentArea === 'CHAT') {
      this.setState({
        selectedChannelsId: {
          ...this.state.selectedChannelsId,
          [guildId]: channelId
        }
      });
    }
  };

  render() {
    const { selectedGuildId } = this.state;
    const selectedGuild = this.getSelectedGuild();
    const showPrivateChannels = !selectedGuild;
    const messages = this.getMessages();
    const channelName = this.getChannelName();

    return (
      <StyledApp>
        <GlobalStyle />
        <ScrollbarStyles />

        <Navbar
          onHomeClick={this.handleHomeClick}
          onGuildClick={this.handleGuildClick}
          selectedGuildId={selectedGuildId}
        />
        <Channels
          header={this.getChannelsHeaderContent()}
          showPrivateChannels={showPrivateChannels}
          categories={this.getGuildCategories()}
          guildId={selectedGuildId}
          selectedChannelId={this.getSelectedChannelId()}
          onChannelClick={this.handleChannelClick}
        />
        <Chat
          className="app-content"
          channelName={channelName}
          guild={selectedGuild}
          messages={messages}
          isPrivate={showPrivateChannels}
        />

        <MemberCardPopup
          guildRolesList={selectedGuild ? selectedGuild.roles : []}
          ref={node => {
            MemberCardPopup.instance = MemberCardPopup.instance || node;
          }}
        />
      </StyledApp>
    );
  }
}

export default App;
