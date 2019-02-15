import React from 'react';
import styled from 'styled-components';
import HashtagIcon from '../icons/hashtag';

const StyledChannelName = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #8a8e94;
    margin-right: 3px;
  }

  span {
    margin-top: 3px;
    font-weight: 500;
    font-size: ${props => (props.isHeader ? '1.1em' : '1em')};
    color: ${props => props.textColor || '#72767d'};
  }
`;

export default ({ name, textColor, isHeader }) => (
  <StyledChannelName isHeader={isHeader} textColor={textColor}>
    <HashtagIcon />
    <span>{name}</span>
  </StyledChannelName>
);
