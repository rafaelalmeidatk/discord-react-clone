import React from 'react';
import styled from 'styled-components';

import data from '../../data';
import { MemberMessageGroup, Message } from './MemberMessage';
import WelcomeChannelMessage from './WelcomeChannelMessage';
import ScrollableArea from '../ScrollableArea';

const StyledMessagesWrapper = styled.div`
  flex: 1 1 auto;
  position: relative;
`;

const createMessageGroup = (groupId, member, time, messages) => (
  <MemberMessageGroup key={groupId} member={member} time={time}>
    {messages}
  </MemberMessageGroup>
);

export default class extends React.Component {
  bottomElement = React.createRef();

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.bottomElement.current.scrollIntoView();
  };

  render() {
    const { channelName, messages } = this.props;
    let lastUserId = messages.length > 0 ? messages[0].userId : null;
    const groupsComponents = [];
    let messagesComponents = [];
    let headingGroupMessage = null;

    const closeMessageGroupAndClearMessages = () => {
      const member = data.users[headingGroupMessage.userId];
      const currentGroupId = headingGroupMessage.id;
      groupsComponents.push(
        createMessageGroup(currentGroupId, member, headingGroupMessage.time, messagesComponents)
      );
      messagesComponents = [];
    };

    messages.forEach((message, index) => {
      const { userId } = message;

      if (userId !== lastUserId && messagesComponents.length > 0) {
        closeMessageGroupAndClearMessages();
      }

      if (messagesComponents.length === 0) {
        headingGroupMessage = message;
      }
      messagesComponents.push(<Message key={message.id}>{message.content}</Message>);
      lastUserId = message.userId;

      if (index + 1 === messages.length) {
        closeMessageGroupAndClearMessages();
      }
    });

    return (
      <StyledMessagesWrapper>
        <ScrollableArea>
          <WelcomeChannelMessage channelName={channelName} />
          {groupsComponents}
          <div ref={this.bottomElement} />
        </ScrollableArea>
      </StyledMessagesWrapper>
    );
  }
}
