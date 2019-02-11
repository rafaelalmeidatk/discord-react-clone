import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import DiscordIcon from '../../icons/discord.js';

const StyledGuildIcon = styled.a.attrs({ href: '#' })`
  margin-top: 10px;
  width: 50px;
  height: 50px;
  background: ${props => (props.selected ? colors.primary : colors.grayNormal)};
  border-radius: ${props => (props.selected ? '15px' : '50%')};
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;

  :hover {
    background: ${colors.primary};
    border-radius: 15px;
  }

  ::before {
    content: ' ';
    display: ${props => (props.selected ? 'block' : 'none')};
    width: 10px;
    height: 40px;
    position: absolute;
    left: -5px;
    border-radius: 20px;
    background: #fff;
  }
`;

const HomeIcon = styled(DiscordIcon)`
  color: ${colors.homeIcon};
  width: 100%;
  height: 100%;
  padding: 5px;
`;

export default ({ name, icon, selected, isHome }) => {
  let content = name;
  if (isHome) {
    content = <HomeIcon />;
  }

  return (
    <StyledGuildIcon selected={selected} className="selected">
      {content}
    </StyledGuildIcon>
  );
};
