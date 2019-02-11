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

export default ({ onHomeClick, onGuildClick, selectedGuildId }) => (
  <StyledNavbar>
    <GuildIcon isHome={true} selected={!selectedGuildId} onClick={onHomeClick} />
    <OnlineFriendsCounter online={2} />

    <GuildSeparator />

    <GuildIcon name="t" selected={selectedGuildId === 't'} onClick={() => onGuildClick('t')} />
    <GuildIcon name="JA" selected={selectedGuildId === 'JA'} onClick={() => onGuildClick('JA')} />
  </StyledNavbar>
);
