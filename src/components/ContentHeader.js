import React from 'react';
import styled from 'styled-components';

const StyledContentHeader = styled.div`
  height: 48px;
  padding: 0 8px 0 12px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 2px 0 rgba(0, 0, 0, 0.06);
  color: #fff;
`;

export default ({ content }) => <StyledContentHeader>{content}</StyledContentHeader>;
