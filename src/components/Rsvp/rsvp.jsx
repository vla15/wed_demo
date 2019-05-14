import React, { Component } from 'react';
import Modal from 'react-modal';
import { Circle } from '../common/circle';
import './rsvp.css';

class RSVPModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      form: {
        guests: '',
        names: [],
        step: 0,
        restrictions: ''
      }
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

  generateCircles() {
    let guests = [1, 2, 3, 4, 5];
    let circles = guests.map(guest => {
      const isActive = guest === this.state.form.guests;
      return <Circle isActive={isActive} key={guest} value={guest} toggle={this.onGuestToggle} />
    })
    return <div className="circle-icon-container">{circles}</div>
  }

  generateNameInput() {
    let inputs = this.state.form.names.map((guest, i) => {
      const label = `Guest ${i + 1}`;
      return (
        <div className="name-input-div" key={i}>
          <label className="label-input">{label}</label>
          <input autoComplete={"off"} placeholder={'Enter Name'} className="name-input" value={this.state.form.names[i]} type="text" onChange={e => this.onInput(e, i)} />
        </div>
      )
    })
    return <div className="name-input-container">{inputs}</div>
  }

  generateRestrictions() {
    return (
      <div className="restriction-container"> 
        <textarea style={{ height: 'auto', width: '100%' }} onChange={this.onTextAreaChange} value={this.state.form.restrictions}></textarea>
      </div>
    );
  }

  generateSummary() {
    return (
      <div className="summary-container">
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

  afterOpenModal() {
    this.subtitleRef.current.style.color = '#f00';
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
      title = `Please enter in the names of your ${this.state.form.guests} guest(s)`
      content = this.generateNameInput();
    } else if (this.state.form.step === 2) {
      title = 'Please let us know about any dietary restrictions.'
      content = this.generateRestrictions();
    } else {
      title = 'Summary'
      content = this.generateSummary();
    }
    return (
      <div>
        <button className="btn btn-info" onClick={this.toggleModal}>RSVP</button>
        <Modal
          isOpen={this.state.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.onRequestClose}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={this.subtitleRef}>RSVP</h2>
          <h3>{title}</h3>
          {content}
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
            this.state.form.step === 3 ? <button className="btn btn-primary" onClick={this.onSave}>Save</button> :
            ''
          }
            <button className="btn btn-danger" onClick={this.onRequestClose}>Exit</button>
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
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

export default RSVPModal;
