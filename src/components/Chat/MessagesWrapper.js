import React from 'react';
import styled from 'styled-components';

import data from '../../data';
import { MemberMessageGroup, Message } from './MemberMessage';

const StyledMessagesWrapper = styled.div`
  flex: 1 1 auto;
`;

const createMessageGroup = (groupId, member, time, messages) => (
  <MemberMessageGroup key={groupId} member={member} time={time}>
    {messages}
  </MemberMessageGroup>
);

export default ({ messages }) => {
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
  }

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

    if (messages.length === index + 1) {
      closeMessageGroupAndClearMessages();
    }
  });

  return <StyledMessagesWrapper>{groupsComponents}</StyledMessagesWrapper>;
};
