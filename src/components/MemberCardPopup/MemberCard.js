import React from 'react';
import styled from 'styled-components';

import MemberRolesList from './MemberRolesList';
import UserAvatar from '../UserAvatar';

import colors from '../../utils/colors';

const StyledMemberCard = styled.div`
  width: 250px;
  background-color: ${colors.memberCardBackground};
  color: ${colors.memberCardContent};

  .header {
    padding: 20px 10px;
    background-color: ${colors.memberCardHeaderBackground};
    display: flex;
    flex-direction: column;
    align-items: center;

    .username {
      margin-top: 10px;
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

export default ({ member, guildRolesList }) => (
  <StyledMemberCard>
    <div className="header">
      <UserAvatar
        avatarUrl={member.avatar}
        customStatusBorderColor={colors.memberCardHeaderBackground}
        isBig
      />

      <div className="username">
        {member.username}
        <span className="tag">#{member.tag}</span>
      </div>
    </div>

    <div className="content">
      {member.roles && (
        <React.Fragment>
          <div className="field-key roles-key">Role</div>
          <div className="field-value roles">
            <MemberRolesList rolesList={guildRolesList} memberRoles={member.roles} />
          </div>
        </React.Fragment>
      )}

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
