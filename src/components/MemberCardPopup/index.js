import React from 'react';
import styled from 'styled-components';
import MemberCardPopupWrapper from './MemberCardPopupWrapper';

const StyledMemberCardPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export default class MemberCardPopup extends React.Component {
  state = { isPopupVisible: false };

  static instance;
  static show(config) {
    this.instance && this.instance.showPopup(config);
  }

  showPopup = ({ position, member }) => {
    this.setState({
      isPopupVisible: true,
      position,
      member
    });
  };

  closePopup = () => {
    this.setState({ isPopupVisible: false });
  };

  render() {
    const { isPopupVisible, position, member } = this.state;
    return (
      <StyledMemberCardPopup>
        {isPopupVisible && (
          <MemberCardPopupWrapper position={position} member={member} onClose={this.closePopup} />
        )}
      </StyledMemberCardPopup>
    );
  }
}
