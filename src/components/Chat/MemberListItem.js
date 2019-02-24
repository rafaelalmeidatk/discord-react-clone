import React from 'react';
import styled from 'styled-components';

import UserAvatar from '../UserAvatar';

import colors from '../../utils/colors';

const StyledMember = styled.div`
  margin: 0 0 0 8px;
  padding: 1px 0 1px 8px;
  height: 40px;
  border-radius: 3px;
  cursor: pointer;

  display: flex;
  align-items: center;

  :hover {
    background: ${colors.memberHoverBg};

    .avatar-wrapper .status {
      border-color: ${colors.memberHoverBg};
    }
  }

  .member-inner {
    .username {
      color: ${props => props.color || colors.memberUsernameOnline};
      font-size: 1em;
    }

    .status {
      color: ${colors.memberStatus};
      font-size: 0.7em;
    }
  }
`;

export default ({ member, color }) => (
  <StyledMember color={color}>
    <UserAvatar className="avatar-wrapper" avatarUrl={member.avatar} />

    <div className="member-inner">
      <div className="username">{member.username}</div>
      {Math.random() > 0.6 ? <div className="status">Playing something</div> : null}
    </div>
  </StyledMember>
);
