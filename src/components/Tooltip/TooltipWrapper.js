import React from 'react';

import TooltipsContainer from './TooltipsContainer';

export default class TooltipWrapper extends React.Component {
  handleMouseEnter = element => {
    const { direction, content } = this.props;

    const { currentTarget: target } = element;
    const targetRect = target.getBoundingClientRect();

    let x, y;

    if (direction === 'right') {
      x = targetRect.left + targetRect.width + 8;
      y = targetRect.top + targetRect.height / 2;
    }

    if (direction === 'bottom') {
      x = targetRect.left + targetRect.width / 2;
      y = targetRect.top + targetRect.height + 8;
    }

    if (direction === 'top') {
      x = targetRect.left + targetRect.width / 2;
      y = targetRect.top - 8;
    }

    TooltipsContainer.show({
      position: { x, y },
      direction,
      content
    });
  };

  handleMouseLeave = () => {
    TooltipsContainer.hide();
  };

  render() {
    const { children } = this.props;

    return React.Children.map(children, child =>
      React.cloneElement(child, {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      })
    );
  }
}
