import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import ChannelName from '../ChannelName';

const StyledChannel = styled.div`
  margin: 2px 8px 2px 8px;
  padding: 0 8px;
  height: 32px;
  background-color: ${props => (props.isSelected ? colors.channelSelected : 0)};
  border-radius: 3px;

  display: flex;
  align-items: center;
`;

export default ({ name, isSelected }) => (
  <StyledChannel isSelected={isSelected}>
    <ChannelName name={name} textColor={isSelected && '#fff'} />
  </StyledChannel>
);
