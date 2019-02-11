import React from 'react';
import styled from 'styled-components';
import HashtagIcon from '../../icons/hashtag';

const StyledHeaderChannelName = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #8a8e94;
    margin-right: 3px;
  }

  span {
    margin-top: 3px;
    font-weight: 500;
    font-size: 1.1em;
  }
`;

export default ({ name }) => (
  <StyledHeaderChannelName>
    <HashtagIcon />
    <span>{name}</span>
  </StyledHeaderChannelName>
);
