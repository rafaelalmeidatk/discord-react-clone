import React from 'react';
import styled from 'styled-components';

import PlusAlt from '../../icons/PlusAlt';
import Channel from './Channel';
import ExpandArrowIcon from '../../icons/ExpandArrow';

const StyledCategory = styled.div`
  padding-top: 28px;
`;

const StyledCategoryHeading = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px 0 18px;

  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 700;
  color: #72767d;

  > svg {
    color: #72767d;
    position: absolute;
    left: 3px;
    top: 2px;
  }
`;

const StyledAddButton = styled.button`
  background: 0;
  border: 0;
  margin: 0;
  padding: 0;
  height: 18px;
  width: 18px;
  cursor: pointer;

  svg * {
    fill: #72767d;
  }
`;

export default ({ name, channels, guildId, selectedChannelId, onChannelClick }) => (
  <StyledCategory>
    <StyledCategoryHeading>
      <ExpandArrowIcon />
      {name}

      <StyledAddButton>
        <PlusAlt />
      </StyledAddButton>
    </StyledCategoryHeading>

    {channels.map(channel => (
      <Channel
        key={channel.id}
        name={channel.name}
        isSelected={selectedChannelId === channel.id}
        onClick={() => onChannelClick(guildId, channel.id)}
      />
    ))}
  </StyledCategory>
);
