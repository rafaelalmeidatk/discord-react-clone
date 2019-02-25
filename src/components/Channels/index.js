import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

import ScrollableArea from '../ScrollableArea';
import Category from './Category';
import UserFooter from './UserFooter';
import PrivateChannels from './PrivateChannels';

const StyledChannels = styled.div`
  width: 240px;

  display: flex;
  flex-direction: column;
  background: ${colors.grayNormal};
`;

const StyledHeader = styled.div`
  height: 48px;
  padding: 0 12px 0 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 2px 0 rgba(0, 0, 0, 0.06);
  color: #fff;
`;

const StyledContent = styled.div`
  padding-right: 8px;
  flex: 1;
  position: relative;
`;

class Channels extends React.Component {
  getHeaderContent = () => {
    const { showPrivateChannels, guild } = this.props;
    if (showPrivateChannels) {
      return <input />;
    }
    return guild.name;
  };

  render() {
    const { showPrivateChannels, guild, selectedChannelId, onChannelClick } = this.props;

    return (
      <StyledChannels>
        <StyledHeader>{this.getHeaderContent()}</StyledHeader>

        <StyledContent>
          <ScrollableArea forceVertical tinyStyle autoHide>
            {showPrivateChannels && (
              <PrivateChannels
                selectedChannelId={selectedChannelId}
                onChannelClick={onChannelClick}
              />
            )}

            {!showPrivateChannels &&
              guild &&
              guild.categories.map(category => (
                <Category
                  key={category.id}
                  name={category.name}
                  channels={category.channels}
                  guildId={guild.id}
                  selectedChannelId={selectedChannelId}
                  onChannelClick={onChannelClick}
                />
              ))}
          </ScrollableArea>
        </StyledContent>

        <UserFooter />
      </StyledChannels>
    );
  }
}

export default Channels;
