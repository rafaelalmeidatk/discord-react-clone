import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import ContentHeader from '../ContentHeader';
import HeaderChannelName from './HeaderChannelName';

const StyledHome = styled.div`
  background: ${colors.grayLight};
`;

class Home extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <StyledHome className={className}>
        <ContentHeader content={<HeaderChannelName name={'general'} />} />
        hey chat
      </StyledHome>
    );
  }
}

export default Home;
