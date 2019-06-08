/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './faq-item.css';

class FaqItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleItem = this.toggleItem.bind(this);
  }

  toggleItem() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }


  render() {
    const { isOpen } = this.state;
    const { title, children } = this.props;
    const arrowState = isOpen ? 'fa-caret-down' : 'fa-caret-right';
    return (
      <li>
        <span onClick={this.toggleItem} className="faq-list-item cursor-pointer" style={{ color: '#e2e4e9' }}>
          <i className={`fa ${arrowState} faq-icon cursor-pointer`} />
          <span>{title}</span>
        </span>
        <div className="faq-list-item--detail" style={{ display: isOpen ? 'block' : 'none' }}>
          {children}
        </div>
      </li>
    );
  }
}

FaqItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

FaqItem.defaultProps = {
  title: 'Hello World',
};

export default FaqItem;
