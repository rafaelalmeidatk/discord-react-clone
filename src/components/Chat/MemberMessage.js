import React from 'react';
import styled from 'styled-components';

import constants from '../../utils/constants';
import colors from '../../utils/colors';

const StyledMemberMessageGroup = styled.div`
  padding: 20px 0;

  .divider {
    width: auto;
    height: 1px;
    background: ${colors.messageDivider};
    margin: 20px 20px -20px;
  }

  &:last-child .divider {
    display: none;
  }
`;

export const MemberMessageGroup = ({ member, time, onMemberClick, children }) => (
  <StyledMemberMessageGroup>
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, { member, time, isHeading: index === 0, onMemberClick })
    )}
    <div className="divider" />
  </StyledMemberMessageGroup>
);

const StyledMessage = styled.div`
  margin-bottom: 0.2em;

  .header {
    display: flex;
    height: 1.3em;

    .avatar-wrapper {
      margin: -2px 20px 20px;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }

    .avatar {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      overflow: hidden;
      border-radius: 50%;
    }

    .username {
      color: ${colors.memberUsernameChat};
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    }

    .time {
      color: ${colors.messageTime};
      font-size: 0.75em;
      font-weight: 400;
      margin-left: 0.3em;
    }
  }

  .content {
    margin-left: 80px;

    font-weight: 400;
    font-size: 0.9375em;
    line-height: 1.3;
    color: ${colors.messageContent};
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

export const Message = ({ member, time, children, isHeading, onMemberClick }) => (
  <StyledMessage>
    {isHeading && (
      <div className="header">
        <div className="avatar-wrapper" onClick={(e) => onMemberClick(e, member)}>
          <div
            className="avatar"
            style={{ backgroundImage: `url(${member.avatar || constants.defaultAvatar})` }}
          />
        </div>
        <div className="data">
          <span className="username" onClick={(e) => onMemberClick(e, member)}>
            {member.username}
          </span>
          <span className="time">{time}</span>
        </div>
      </div>
    )}
    <div className="content">{children}</div>
  </StyledMessage>
);
