import React from 'react'
import styled from 'styled-components';
import colors from '../../utils/colors'

const StyledNavbar = styled.div`
  width: 70px;
  height: 100%;
  background: ${colors.grayDarker};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuildIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${colors.grayNormal};
  border-radius: 50%;
  margin: 10px 0;
`;

export default () => (
  <StyledNavbar>
    <GuildIcon />
    <GuildIcon />
    <GuildIcon />
  </StyledNavbar>
);