import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import ContentHeader from '../ContentHeader';
import ChannelName from '../ChannelName';
import MessagesWrapper from './MessagesWrapper';
import NewMessageWrapper from './NewMessageWrapper';

const StyledHome = styled.div`
  background: ${colors.grayLight};

  display: flex;
  flex-direction: column;
`;

class Home extends React.Component {
  render() {
    const { className, channelName } = this.props;

    return (
      <StyledHome className={className}>
        <ContentHeader content={<ChannelName name={'general'} isHeader textColor="#fff" />} />

        <MessagesWrapper />
        <NewMessageWrapper channelName={channelName} />
      </StyledHome>
    );
  }
}

export default Home;
