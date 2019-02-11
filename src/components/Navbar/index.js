import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import GuildIcon from './GuildIcon';
import OnlineFriendsCounter from './OnlineFriendsCounter';

const StyledNavbar = styled.div`
  width: 70px;
  height: 100%;
  background: ${colors.grayDarker};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuildSeparator = styled.div`
  height: 2px;
  width: 30px;
  background: ${colors.separator};
`;

export default () => (
  <StyledNavbar>
    <GuildIcon isHome={true} />
    <OnlineFriendsCounter online={2} />

    <GuildSeparator />

    <GuildIcon name="A" />
    <GuildIcon name="JA" selected={true} />
  </StyledNavbar>
);
