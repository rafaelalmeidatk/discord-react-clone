import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

import Category from './Category';

const StyledHeader = styled.div`
  height: 48px;
  padding: 0 12px 0 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 2px 0 rgba(0, 0, 0, 0.06);
  color: #fff;
`;

const StyledChannels = styled.div`
  width: 240px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  background: ${colors.grayNormal};
`;

class Channels extends React.Component {
  render() {
    const { header, categories } = this.props;
    return (
      <StyledChannels>
        <StyledHeader>{header}</StyledHeader>

        {categories &&
          categories.map(category => (
            <Category key={category.id} name={category.name} channels={category.channels} />
          ))}
      </StyledChannels>
    );
  }
}

export default Channels;
