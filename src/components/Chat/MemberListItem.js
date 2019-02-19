import React from 'react';
import styled from 'styled-components';

import constants from '../../utils/constants';
import colors from '../../utils/colors';

const StyledMember = styled.div`
  margin: 0 8px;
  padding: 1px 8px;
  height: 40px;
  border-radius: 3px;
  cursor: pointer;

  display: flex;
  align-items: center;
  box-sizing: content-box;

  :hover {
    background: ${colors.memberHoverBg};
  }

  .avatar-wrapper {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    position: relative;

    .avatar {
      width: 30px;
      height: 30px;
      background-size: cover;
      background-position: center;
      border-radius: 50%;
      overflow: hidden;
    }

    .status {
      position: absolute;
      width: 10px;
      height: 10px;

      background-clip: padding-box;
      border: 2px solid ${colors.grayDark};
      border-radius: 999px;
      bottom: -4px;
      right: -2px;
    }

    .status.online {
      background-color: #43b581;
    }
  }

  .member-inner {
    .username {
      color: ${colors.memberUsernameOnline};
      font-size: 1em;
    }

    .status {
      color: ${colors.memberStatus};
      font-size: 0.7em;
    }
  }
`;

export default ({ member }) => (
  <StyledMember>
    <div className="avatar-wrapper">
      <div
        className="avatar"
        style={{ backgroundImage: `url(${member.avatar || constants.defaultAvatar})` }}
      />
      <div className="status online" />
    </div>

    <div className="member-inner">
      <div className="username">{member.username}</div>
      {Math.random() > 0.6 ? <div className="status">Playing something</div> : null}
    </div>
  </StyledMember>
);
