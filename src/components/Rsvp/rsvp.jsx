/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Circle from '../common/circle';
import GuestPropType from '../../enums/models';
import RSVPSummary from './summary';
import { updateReservation } from '../../utils/guests';
import './rsvp.css';

Modal.defaultStyles.overlay.zIndex = 2;
Modal.defaultStyles.overlay.borderRadius = '10px';
Modal.defaultStyles.overlay.border = '1px solid black';

class RSVPModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      form: {
        guests: 0,
        names: [],
        step: 0,
        restrictions: '',
        email: '',
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.onRequestClose = this.onRequestClose.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.onGuestToggle = this.onGuestToggle.bind(this);
    this.generateCircles = this.generateCircles.bind(this);
    this.generateNameInput = this.generateNameInput.bind(this);
    this.generateRestrictions = this.generateRestrictions.bind(this);
    this.generateEmailInput = this.generateEmailInput.bind(this);
    this.updateStep = this.updateStep.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.subtitleRef = React.createRef();
  }

  onTextAreaChange(e) {
    const text = e.target.value;
    this.setState(prevState => ({ form: { ...prevState.form, restrictions: text } }));
  }

  onInput(e, index, attr) {
    const text = e.target.value;
    this.setState((prevState) => {
      if (index !== null) {
        const latest = prevState.form.names.slice(0);
        latest[index] = text;
        return { form: { ...prevState.form, [attr]: latest } };
      }
      return { form: { ...prevState.form, [attr]: text } };
    });
  }

  onGuestToggle(guests) {
    this.setState((prevState) => {
      const names = Array(guests).fill('');
      return { form: { ...prevState.form, guests, names } };
    });
  }

  onRequestClose() {
    this.setState({
      isOpen: false,
      form: {
        guests: 0,
        names: [],
        step: 0,
        restrictions: '',
      },
    });
  }

  async onSave() {
    // sends email to vlabchow
    const { form } = this.state;
    const {
      guests,
      names,
      restrictions,
      email,
    } = form;
    const { selectedGuest, onReservation, matchedGuestIndex } = this.props;
    const data = {
      guests,
      names,
      restrictions,
      email,
      isReserved: true,
      id: selectedGuest.ref,
    };
    try {
      const res = await updateReservation(data);
      onReservation(res.data, matchedGuestIndex);
      this.onRequestClose();
    } catch (err) {
      console.log('errored here', err);
      this.onRequestClose();
    }
  }

  generateSummary() {
    const { form } = this.state;
    const { names, restrictions, email } = form;
    return <RSVPSummary names={names} restrictions={restrictions} email={email} />;
  }


  generateRestrictions() {
    const { form } = this.state;
    const { restrictions } = form;
    return (
      <div className="form-group">
        <textarea className="form-control" rows="3" onChange={this.onTextAreaChange} value={restrictions} placeholder="Enter in any dietary restrictions" />
      </div>
    );
  }

  generateNameInput() {
    const { form } = this.state;
    const { names } = form;
    const inputs = names.map((guest, i) => {
      const label = `Guest ${i + 1}`;
      return (
        // eslint-disable-next-line react/no-array-index-key
        <div className="form-group" key={i}>
          <label htmlFor="reservationName">{label}</label>
          <input id="reservationName" autoComplete="off" placeholder="Enter Name" className="form-control" value={names[i]} type="text" onChange={e => this.onInput(e, i, 'names')} />
        </div>
      );
    });
    return <form className="name-input-container">{inputs}</form>;
  }

  generateCircles() {
    const guestList = [];
    const { selectedGuest } = this.props;
    const { form } = this.state;
    for (let i = 1; i <= selectedGuest.guests; i += 1) {
      guestList.push(i);
    }
    const circles = guestList.map((guest) => {
      const isActive = guest === form.guests;
      return <Circle isActive={isActive} key={guest} value={guest} toggle={this.onGuestToggle} />;
    });
    return <div className="circle-icon-container">{circles}</div>;
  }

  generateEmailInput() {
    const { form } = this.state;
    return (
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" autoComplete="off" placeholder="Enter email" className="form-control" value={form.email} type="email" onChange={e => this.onInput(e, null, 'email')} />
      </div>
    );
  }

  updateStep(update) {
    this.setState((prevState) => {
      const updatedStep = update === 'increment' ? prevState.form.step + 1 : prevState.form.step - 1;
      return { form: { ...prevState.form, step: updatedStep } };
    });
  }


  toggleModal() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  // afterOpenModal(e) {
  // console.log('we got the overlay', this.overlay);
  // this.subtitleRef.current.style.color = '#f00';
  // }

  render() {
    const { form, isOpen } = this.state;
    const { guests, step, names } = form;
    const isDisabled = step === 0 && !guests ? true
      : !!(step === 1 && guests !== names.length);
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        minWidth: '100%',
      },
    };
    let content = '';
    let title = '';
    if (step === 0) {
      title = 'Please select the number of guests including yourself and your children';
      content = this.generateCircles();
    } else if (step === 1) {
      title = `Please enter in the name(s) of your ${guests} guest(s)`;
      content = this.generateNameInput();
    } else if (form.step === 2) {
      title = 'Please let us know about any dietary restrictions.';
      content = this.generateRestrictions();
    } else if (form.step === 3) {
      title = 'Please provide us for an email to contact you by in case we need to verify some information';
      content = this.generateEmailInput();
    } else {
      title = 'Please review the summary below to ensure everything is accurate.';
      content = this.generateSummary();
    }
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggleModal}>RSVP</button>
        <Modal
          isOpen={isOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.onRequestClose}
          style={customStyles}
          contentLabel="Faq Modal"
          // eslint-disable-next-line no-return-assign
          overlayRef={overlay => this.overlay = overlay}
        >
          <div className="dismiss-container">
            <button type="button" className="dismiss" onClick={this.onRequestClose}><i className="fas fa-times fa-2x" /></button>
          </div>
          <h2 ref={this.subtitleRef}>RSVP</h2>
          <div className="card">
            <div className="modal-body card-body">
              <h5 className="card-title">{title}</h5>
              {content}
            </div>
            <div className="modal-footer card-footer">
              {step > 0
                ? <button type="button" className="btn btn-info" style={{ marginRight: 'auto' }} onClick={() => this.updateStep('decrement')}>Back</button>
                : ''
            }
              {
              step < 4 ? <button type="button" className="btn btn-primary" disabled={isDisabled} onClick={() => this.updateStep('increment')}>Next</button>
                : ''
            }
              {
              step === 4 ? <button type="button" className="btn btn-primary" onClick={this.onSave}>Submit</button>
                : ''
            }
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

Modal.setAppElement('#root');

RSVPModal.propTypes = {
  selectedGuest: GuestPropType,
  onReservation: PropTypes.func,
  matchedGuestIndex: PropTypes.number,
};

RSVPModal.defaultProps = {
  selectedGuest: {
    ref: 1239123891289183,
    guests: 2,
    first: 'Vincent',
    last: 'La',
    full: 'Vincent La',
    isReserved: false,
  },
  onReservation: () => {},
  matchedGuestIndex: 0,
};

export default RSVPModal;
