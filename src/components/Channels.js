import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';

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
        {header}


      </StyledChannels>
    );
  }
}

export default Channels;
