import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import constants from '../../utils/constants';

const StyledMemberCard = styled.div`
  width: 240px;
  background-color: ${colors.memberCardBackground};

  .header {
    padding: 20px 10px;
    background-color: ${colors.memberCardHeaderBackground};
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar-wrapper {
      width: 90px;
      height: 90px;
      margin-bottom: 10px;
      position: relative;

      .avatar {
        width: 90px;
        height: 90px;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        overflow: hidden;
      }

      .status {
        position: absolute;
        width: 18px;
        height: 18px;

        border: 3px solid ${colors.memberCardHeaderBackground};
        border-radius: 999px;
        bottom: 0px;
        right: 0px;
        box-sizing: content-box;
      }

      .status.online {
        background-color: #43b581;
        box-shadow: inset 0 0 0 2px rgba(180, 225, 205, 0.6);
      }
    }

    .username {
      color: #fff;
      font-weight: 600;
      white-space: normal;
      word-break: break-word;
    }

    .tag {
      font-weight: 400;
      font-size: 1.1em;
      color: ${colors.memberCardUserTag};
    }
  }

  .content {
    padding: 12px 10px 10px;

    .roles {
      margin: 12px 0 20px;
    }

    .field-key {
      margin-bottom: 8px;
      font-weight: 800;
      font-size: 0.75em;
      color: ${colors.memberCardFieldKey};
      text-transform: uppercase;
    }
  }

  .footer {
    padding: 10px;
    border-top: 1px solid ${colors.memberCardFooterBorder};
    text-align: center;

    .protip {
      margin-top: 8px;
      color: ${colors.proptipText};
      font-size: 0.7em;

      .label {
        color: ${colors.proptipLabel};
        text-transform: uppercase;
        font-weight: 800;
        font-size: 1.05em;
      }
    }
  }
`;

const StyledNoteInput = styled.input`
  margin-left: -4px;
  padding: 4px;
  font-size: 0.7em;
  height: 22px;
  width: 100%;
  border-radius: 2px;

  color: ${colors.memberCardNoteInput};
  background: transparent;
  border: 0;
  outline: 0;

  &:focus {
    background-color: #202225;
  }
`;

const StyledMessageInput = styled.input`
  background-color: #36393f;
  color: hsla(0, 0%, 100%, 0.7);

  padding: 8px 10px;
  border: 1px solid #23262a;
  border-radius: 3px;
  font-size: 0.9em;
  width: 100%;
  height: 36px;
`;

export default ({ member }) => (
  <StyledMemberCard>
    <div className="header">
      <div className="avatar-wrapper">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${member.avatar || constants.defaultAvatar})` }}
        />
        <div className="status online" />
      </div>
      <div className="username">
        {member.username}
        <span className="tag">#{member.tag}</span>
      </div>
    </div>

    <div className="content">
      <div className="field-key roles-key">Role</div>
      <div className="field-value roles">dsadsa</div>

      <div className="field-key">Note</div>
      <div className="field-value">
        <StyledNoteInput placeholder="Click to add a note" />
      </div>
    </div>

    <div className="footer">
      <StyledMessageInput placeholder={`Message @${member.username}`} />
      <div className="protip">
        <span className="label">Protip:</span> Right click user for more actions
      </div>
    </div>
  </StyledMemberCard>
);
