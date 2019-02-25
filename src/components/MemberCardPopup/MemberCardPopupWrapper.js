import React from 'react';
import styled, { keyframes } from 'styled-components';

import MemberCard from './MemberCard';

const fadeInAnimation = ({ direction }) => keyframes`
  from {
    opacity: 0;
    transform: translateX(
      ${{ left: '15%', right: '-15%' }[direction || 'left']}
    );
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledMemberCardPopupWrapper = styled.div`
  position: absolute;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(32, 34, 37, 0.6);
  z-index: 1000;

  top: ${props => props.position && props.position.y}px;
  left: ${props => props.position && props.position.x}px;

  animation: ${props => fadeInAnimation} ease-in 0.1s forwards;
`;

export default class MemberCardPopupWrapper extends React.Component {
  node = React.createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentClick, false);
  }

  handleDocumentClick = e => {
    if (this.node.current.contains(e.target)) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { direction, position, member, guildRolesList } = this.props;
    return (
      <StyledMemberCardPopupWrapper ref={this.node} direction={direction} position={position}>
        <MemberCard member={member} guildRolesList={guildRolesList} />
      </StyledMemberCardPopupWrapper>
    );
  }
}
