import React from 'react';
import styled from 'styled-components';

// The parent of ScrollableArea should have "position" set to "relative"
// otherwise the scrollable area will overflow the content
const StyledScrollableArea = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  .scroller {
    flex: 1 1 auto;
    overflow-y: auto;
    flex-grow: 1;
    overflow: auto;

    /* Firefox fix */
    min-height: 0;
  }
`;

export default ({ children }) => (
  <StyledScrollableArea>
    <div className="scroller">{children}</div>
  </StyledScrollableArea>
);
