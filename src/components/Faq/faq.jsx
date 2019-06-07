/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './faq.css';
import MenuModal from './menu';

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="section-container faq-container">
        <div className="grey-overlay" />
        <div style={{ padding: '2rem', zIndex: 2, width: '100%' }}>
          <div style={{ marginBottom: '1rem' }}>
            <h4 className="section-header">Q&A</h4>
          </div>
          <div className="text-content-section">
            <ul className="faq-list-container">
              <li>
                <span onClick={this.toggleModal} className="faq-list-item cursor-pointer" style={{ color: '#e2e4e9' }}>
                  <i className="fa fa-caret-right faq-icon cursor-pointer" />
                  <span>Whats on the menu?</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <MenuModal isOpen={isOpen} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default FAQ;
