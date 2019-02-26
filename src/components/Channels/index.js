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
  display: flex;
  align-items: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 2px 0 rgba(0, 0, 0, 0.06);
  color: #fff;

  .guild-name {
    padding: 0 12px 0 16px;
  }
`;

const StyledSearchBar = styled.input`
  margin: 0 12px 0 12px;
  padding: 7px 8px 5px 10px;
  width: 100%;
  height: 32px;

  background: #25272b;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);

  font-size: 0.87em;
  color: #b9bbbe;

  ::placeholder {
    opacity: .6;
  }
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
      return <StyledSearchBar placeholder="Find or start a conversation" />;
    }
    return <div className="guild-name">{guild.name}</div>;
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
