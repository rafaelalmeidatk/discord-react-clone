import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import data from '../../data';

import ScrollableArea from '../ScrollableArea';
import MemberListItem from './MemberListItem';

const StyledMemberList = styled.div`
  background: ${colors.grayNormal};
  width: 240px;
  flex-shrink: 0;

  position: relative;
`;

const StyledRoleName = styled.div`
  color: hsla(0, 0%, 100%, 0.4);
  height: 40px;
  font-size: 0.8em;
  line-height: 20px;
  padding: 20px 8px 0 16px;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;

const MembersList = ({ guildRolesList, members, onMemberClick }) => {
  const roleSeparators = { online: { name: 'Online', members: [] } };

  members.forEach(member => {
    let addedToRole = false;

    member.roles.forEach(roleId => {
      if (addedToRole) return;

      const role = guildRolesList[roleId];

      if (role.isSeparated) {
        if (roleSeparators.hasOwnProperty(roleId)) {
          roleSeparators[roleId].members.push(member);
        } else {
          roleSeparators[roleId] = {
            name: role.name,
            members: [member],
            color: role.color
          };
        }
        addedToRole = true;
      }
    });

    if (!addedToRole) {
      roleSeparators['online'].members.push(member);
    }
  });

  return (
    <StyledMemberList>
      <ScrollableArea forceVertical tinyStyle autoHide>
        {Object.keys(roleSeparators).map(roleId => (
          <React.Fragment key={roleId}>
            <StyledRoleName>
              {roleSeparators[roleId].name}—{roleSeparators[roleId].members.length}
            </StyledRoleName>

            {roleSeparators[roleId].members.map(member => {
              const user = data.users[member.userId];
              const firstRoleIdWithColor = member.roles.find(roleId => {
                const role = guildRolesList[roleId];
                return !!role.color;
              });

              const color = firstRoleIdWithColor && guildRolesList[firstRoleIdWithColor].color;
              return (
                <MemberListItem
                  key={user.id}
                  member={user}
                  color={color}
                  onMemberClick={onMemberClick}
                />
              );
            })}
          </React.Fragment>
        ))}
      </ScrollableArea>
    </StyledMemberList>
  );
};

export default MembersList;
