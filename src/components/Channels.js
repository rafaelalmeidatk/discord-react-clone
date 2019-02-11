import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

const StyledHeader = styled.div`
  height: 48px;
  padding: 0 12px 0 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 0 rgba(0,0,0,.2), 0 2px 0 rgba(0,0,0,.06);
  color: #fff;
`

const StyledChannels = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  background: ${colors.grayNormal};
`;

class Channels extends React.Component {
  render() {
    const { header } = this.props;
    return (
      <StyledChannels>
        <StyledHeader>
          {header}
        </StyledHeader>


      </StyledChannels>
    );
  }
}

export default Channels;
