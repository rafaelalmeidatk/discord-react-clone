import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

const StyledHome = styled.div`
  background: ${colors.grayLight};
`;

class Home extends React.Component {
  render() {
    const { className } = this.props;
    
    return <StyledHome className={className}>hey chat</StyledHome>;
  }
}

export default Home;
