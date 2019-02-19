import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import data from '../../data';

import ScrollableArea from '../ScrollableArea';
import MemberListItem from './MemberListItem';

const StyledMemberList = styled.div`
  background: ${colors.grayNormal};
  width: 240px;

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

export default ({ members }) => (
  <StyledMemberList>
    <ScrollableArea>
      <StyledRoleName>Online—2</StyledRoleName>
      {members.map(memberId => {
        const user = data.users[memberId];
        return <MemberListItem key={user.id} member={user} />;
      })}
    </ScrollableArea>
  </StyledMemberList>
);
