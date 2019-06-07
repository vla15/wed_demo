/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import GuestPropType from '../../enums/models';
import { declineReserveration } from '../../utils/guests';

Modal.defaultStyles.overlay.zIndex = 2;
Modal.defaultStyles.overlay.borderRadius = '10px';
Modal.defaultStyles.overlay.border = '1px solid black';

class RSVPDecline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      comments: '',
    };
    this.onRequestClose = this.onRequestClose.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onDecline = this.onDecline.bind(this);
  }

  onRequestClose() {
    this.setState({
      isOpen: false,
      comments: '',
    });
  }

  async onDecline() {
    const { comments } = this.state;
    const { selectedGuest, onReservation, matchedGuestIndex } = this.props;
    const data = {
      id: selectedGuest.ref,
      comments,
      isDeclined: true,
    };
    try {
      const res = await declineReserveration(data);
      onReservation(res.data, matchedGuestIndex);
      this.onRequestClose();
    } catch (err) {
      console.log('errored here', err);
      this.onRequestClose();
    }
  }

  onTextAreaChange(e) {
    const comments = e.target.value;
    this.setState({ comments });
  }

  toggleModal() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }


  generateContent() {
    const { comments } = this.state;
    return (
      <div className="form-group">
        <div>If you decline now, you&apos;ll be unable to make changes to your reservation. Do you wish to proceed?</div>
        <textarea className="form-control" rows="3" onChange={this.onTextAreaChange} value={comments} placeholder="Please feel free to leave any comments." />
      </div>
    );
  }

  render() {
    const { isOpen } = this.state;
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '50%%',
        minWidth: '50%%',
      },
    };
    const content = this.generateContent();
    return (
      <div>
        <button onClick={this.toggleModal} type="button" className="btn btn-primary">Decline</button>
        <Modal
          isOpen={isOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.onRequestClose}
          style={customStyles}
          contentLabel="Example Modal"
          // eslint-disable-next-line no-return-assign
          overlayRef={overlay => this.overlay = overlay}
        >
          <div className="dismiss-container">
            <button type="button" className="dismiss" onClick={this.onRequestClose}><i className="fas fa-times fa-2x" /></button>
          </div>
          <h2 ref={this.subtitleRef}>Decline</h2>
          <div className="card">
            <div className="modal-body card-body">
              {content}
            </div>
            <div className="modal-footer card-footer">
              <button onClick={this.onDecline} className="btn btn-danger" type="button">Ok</button>
              <button onClick={this.onRequestClose} className="btn btn-primary" type="button">Cancel</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

RSVPDecline.propTypes = {
  selectedGuest: GuestPropType,
  onReservation: PropTypes.func,
  matchedGuestIndex: PropTypes.number,
};

RSVPDecline.defaultProps = {
  selectedGuest: {
    ref: 1239123891289183,
    guests: 2,
    first: 'Vincent',
    last: 'La',
    full: 'Vincent La',
    isReserved: false,
  },
  onReservation: () => { },
  matchedGuestIndex: 0,
};

export default RSVPDecline;
