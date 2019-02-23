import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import ContentHeader from '../ContentHeader';
import HeaderActionBar from './HeaderActionBar';
import ChannelName from '../ChannelName';
import MessagesWrapper from './MessagesWrapper';
import NewMessageWrapper from './NewMessageWrapper';
import MembersList from './MembersList';

const StyledChat = styled.div`
  background: ${colors.grayLight};

  display: flex;
  flex-direction: column;

  .content-wrapper {
    display: flex;
    height: 100%;
  }

  .messages-container {
    flex: 1 1 auto;

    display: flex;
    flex-direction: column;
  }
`;

class Chat extends React.Component {
  state = {
    membersListVisible: true
  };

  toggleMembersListVisible = () => {
    this.setState({ membersListVisible: !this.state.membersListVisible });
  };

  render() {
    const { className, guild, channel } = this.props;

    const { members } = guild;
    const { name: channelName } = channel;
    const channelMessages = channel.messages || [];

    return (
      <StyledChat className={className}>
        <ContentHeader
          content={<ChannelName name={channelName} isHeader textColor="#fff" />}
          rightContent={
            <HeaderActionBar
              isMembersListActive={this.state.membersListVisible}
              onMembersToggleClick={this.toggleMembersListVisible}
            />
          }
        />

        <div className="content-wrapper">
          <div className="messages-container">
            <MessagesWrapper guild={guild} messages={channelMessages} channelName={channelName} />
            <NewMessageWrapper channelName={channelName} />
          </div>

          {this.state.membersListVisible && (
            <MembersList guildRolesList={guild.roles} members={members} />
          )}
        </div>
      </StyledChat>
    );
  }
}

export default Chat;
