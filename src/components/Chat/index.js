import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import ContentHeader from '../ContentHeader';
import ChannelName from '../ChannelName';
import MessagesWrapper from './MessagesWrapper';
import NewMessageWrapper from './NewMessageWrapper';
import MembersList from './MembersList';

const StyledHome = styled.div`
  background: ${colors.grayLight};

  display: flex;
  flex-direction: column;

  .content-wrapper {
    display: flex;
    height: 100%;
  }

  .messages-container {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
  }
`;

class Home extends React.Component {
  render() {
    const { className, channelName, guild } = this.props;
    const { members } = guild;

    return (
      <StyledHome className={className}>
        <ContentHeader content={<ChannelName name={channelName} isHeader textColor="#fff" />} />

        <div className="content-wrapper">
          <div className="messages-container">
            <MessagesWrapper />
            <NewMessageWrapper channelName={channelName} />
          </div>
          <MembersList members={members} />
        </div>
      </StyledHome>
    );
  }
}

export default Home;
