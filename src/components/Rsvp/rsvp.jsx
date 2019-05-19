import React, { Component } from 'react';
import Modal from 'react-modal';
import { Circle } from '../common/circle';
import './rsvp.css';

Modal.defaultStyles.overlay.zIndex = 2;

class RSVPModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      form: {
        guests: '',
        names: [],
        step: 0,
        restrictions: '',
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.onRequestClose = this.onRequestClose.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.onGuestToggle = this.onGuestToggle.bind(this);
    this.generateCircles = this.generateCircles.bind(this);
    this.generateNameInput = this.generateNameInput.bind(this);
    this.generateRestrictions = this.generateRestrictions.bind(this);
    this.updateStep = this.updateStep.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.subtitleRef = React.createRef();
  }

  generateNameInput() {
    let inputs = this.state.form.names.map((guest, i) => {
      const label = `Guest ${i + 1}`;
      return (
        <div className="form-group" key={i}>
          <label htmlFor="reservationName">{label}</label>
          <input id="reservationName" autoComplete={"off"} placeholder={'Enter Name'} className="form-control" value={this.state.form.names[i]} type="text" onChange={e => this.onInput(e, i)} />
        </div>
      )
    })
    return <form className="name-input-container">{inputs}</form>
  }

  generateRestrictions() {
    return (
      <div className="form-group"> 
        <textarea className="form-control" rows="3" onChange={this.onTextAreaChange} value={this.state.form.restrictions}></textarea>
      </div>
    );
  }

  generateSummary() {
    return (
      <div className="summary-container">
        <div>Names:</div>
        {this.state.form.names.map((name, i) => (
          <div>
            <span>{i + 1 + '.'} </span>
            <span>{name}</span>
          </div>
        ))}
      </div>
    )
  }

  onTextAreaChange(e) {
    const text = e.target.value;
    this.setState(prevState => {
      return { form: { ...prevState.form, restrictions: text } }
    })
  }

  onInput(e, index) {
    const text = e.target.value;
    this.setState(prevState => {
      const latest = prevState.form.names.slice(0);
      latest[index] = text;
      return { form: { ...prevState.form, names: latest } }
    })
  }

  onGuestToggle(guests) {
    this.setState(prevState => {
      const names = Array(guests).fill('');
      return { form: { ...prevState.form, guests, names }}
    })
  }

  onRequestClose() {
    this.setState({
        isOpen: false,
        form: {
          guests: '',
          names: [],
          step: 0
        }
    });
  }

  onSave() {
    //sends email to vlabchow
    this.onRequestClose()
  }

  generateCircles() {
    const guests = [];
    const maxGuests = this.props.selectedGuest.guests;
    for (let i = 1; i <= maxGuests; i += 1) {
      guests.push(i);
    }
    const circles = guests.map(guest => {
      const isActive = guest === this.state.form.guests;
      return <Circle isActive={isActive} key={guest} value={guest} toggle={this.onGuestToggle} />
    })
    return <div className="circle-icon-container">{circles}</div>
  }

  updateStep(update) {
    this.setState(prevState => {
      const updatedStep = update === 'increment' ? prevState.form.step + 1 : prevState.form.step - 1;
      return { form: { ...prevState.form, step: updatedStep } }
    })
  }


  toggleModal() {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  }

  afterOpenModal(e) {
    // console.log('we got the overlay', this.overlay);
    // this.subtitleRef.current.style.color = '#f00';
  }

  render() {
    const isDisabled = this.state.form.step === 0 && !this.state.form.guests ? true :
    this.state.form.step === 1 && this.state.form.guests !== this.state.form.names.length ? true : false
    let content = '';
    let title = '';
    if (this.state.form.step === 0) {
      title = 'Please select the number of guests including yourself and children';
      content = this.generateCircles();
    } else if (this.state.form.step === 1) {
      title = `Please enter in the name(s) of your ${this.state.form.guests} guest(s)`
      content = this.generateNameInput();
    } else if (this.state.form.step === 2) {
      title = 'Please let us know about any dietary restrictions.'
      content = this.generateRestrictions();
    } else {
      title = 'Please review the summary below to ensure everything is accurate.'
      content = this.generateSummary();
    }
    return (
      <div>
        <button className="btn btn-primary" onClick={this.toggleModal}>RSVP</button>
        <Modal
          isOpen={this.state.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.onRequestClose}
          style={customStyles}
          contentLabel="Example Modal"
          overlayRef={overlay => this.overlay = overlay}
        >
          <div className="dismiss-container">
            <button className="dismiss" onClick={this.onRequestClose}><i className="fas fa-times fa-2x"></i></button>
          </div>
          <h2 ref={this.subtitleRef}>RSVP</h2>
          <div>{title}</div>
          <div className="modal-body">
            {content}
          </div>
          <div className="modal-footer">
          {this.state.form.step > 0 ? 
            <button className="btn btn-info" style={{marginRight: 'auto'}} onClick={() => this.updateStep('decrement')}>Back</button> :
            ''
          }
          {
            this.state.form.step < 3 ? <button className="btn btn-primary" disabled={isDisabled} onClick={() => this.updateStep('increment')}>Next</button> :
            ''
          }
          {
            this.state.form.step === 3 ? <button className="btn btn-primary" onClick={this.onSave}>Submit</button> :
            ''
          }
          </div>
        </Modal>
      </div>
    );
  }
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    minWidth: '100%'
  }
};

Modal.setAppElement('#root');

export default RSVPModal;
