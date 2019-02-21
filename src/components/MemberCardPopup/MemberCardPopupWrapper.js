import React from 'react';
import styled from 'styled-components';

import MemberCard from './MemberCard';

const StyledMemberCardPopupWrapper = styled.div`
  position: absolute;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(32, 34, 37, 0.6);
  z-index: 1000;

  top: ${props => props.position && props.position.y}px;
  left: ${props => props.position && props.position.x}px;

  animation: fade-in ease-in 0.1s forwards;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateX(15%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
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
    const { position, member } = this.props;
    return (
      <StyledMemberCardPopupWrapper ref={this.node} position={position}>
        <MemberCard member={member} />
      </StyledMemberCardPopupWrapper>
    );
  }
}
