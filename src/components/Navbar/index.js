import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import GuildIcon from './GuildIcon';
import OnlineFriendsCounter from './OnlineFriendsCounter';

import data from '../../data';

const StyledNavbar = styled.div`
  width: 70px;
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
    <OnlineFriendsCounter online={data.friendsOnlineCount} />

    <GuildSeparator />

    {data.guilds.map(guild => (
      <GuildIcon
        key={guild.id}
        name={guild.initials}
        icon={guild.icon}
        selected={selectedGuildId === guild.id}
        onClick={() => onGuildClick(guild.id)}
      />
    ))}
  </StyledNavbar>
);
