import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';
import ContentHeader from '../ContentHeader';
import ChannelName from '../ChannelName';

const StyledHome = styled.div`
  background: ${colors.grayLight};
`;

class Home extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <StyledHome className={className}>
        <ContentHeader content={<ChannelName name={'general'} isHeader textColor="#fff" />} />
        hey chat
      </StyledHome>
    );
  }
}

export default Home;
