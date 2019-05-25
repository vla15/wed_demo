/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import './rsvp-search.css';
import RSVPModal from './rsvp';

// import Guests from '../../mock-data/guests';
import { getGuestsByName } from '../../utils/guests';
import Spinner from '../common/spinner';


class RSVPSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      // matchedGuests: [],
      matchedGuests: [{
        ref: 123892139128312,
        guests: 2,
        first: 'Susana',
        last: 'Lee',
        full: 'Susana Lee',
        isReserved: false,
      }, {
        ref: 12020310,
        guests: 3,
        first: 'Juliana',
        last: 'Lee',
        full: 'Juliana Lee',
        isReserved: false,
      },
      ],
      noResults: false,
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleReservation = this.handleReservation.bind(this);
  }

  onChange(e) {
    const attr = e.target.name;
    const val = e.target.value;
    this.setState({ [attr]: val });
  }

  async onSubmit(e) {
    e.preventDefault();
    this.setState({ noResults: false, isLoading: true });
    const { firstName, lastName } = this.state;
    try {
      const guests = await getGuestsByName(firstName, lastName);
      // eslint-disable-next-line no-unneeded-ternary
      const noResults = guests.length ? true : false;
      this.setState({ matchedGuests: guests, isLoading: false, noResults });
    } catch (err) {
      this.setState({ noResults: true, isLoading: false });
    }
  }

  handleReservation(update, index) {
    this.setState((prevState) => {
      const { matchedGuests } = prevState;
      matchedGuests[index] = update;
      return { matchedGuests };
    });
  }


  guestList() {
    const { matchedGuests, noResults } = this.state;
    if (noResults) {
      return (
        <ul className="guest-list-container list-group">
          <li className="no-result-list-item list-group-item">No Results</li>
        </ul>
      );
    }
    const list = matchedGuests.map((guest, i) => (
      <li className="guest-list-item list-group-item" key={guest.ref}>
        <div className="guest-name">{guest.full}</div>
        {
          guest.isReserved
            ? <div className="guest-rsvp-btn"><button type="button" disabled className="btn btn-primary">Replied</button></div>
            : <div className="guest-rsvp-btn"><RSVPModal selectedGuest={guest} matchedGuestIndex={i} onReservation={this.handleReservation} /></div>
        }
      </li>
    ));
    return <ul className="guest-list-container list-group">{list}</ul>;
  }

  // addGuest() {
  //   this.setState((prevState) => {
  //     const matchedGuests = prevState.matchedGuests.slice(0).push({
  //       ref: 123892139128312,
  //       guests: 2,
  //       first: 'Susana',
  //       last: 'Lee',
  //       full: 'Susana Lee',
  //       isReserved: false,
  //     });
  //     return { matchedGuests };
  //   });
  // }


  render() {
    const guests = this.guestList();
    const { firstName, lastName, isLoading } = this.state;
    const spinnerStyle = {
      backgroundColor: 'transparent',
      height: '100%',
      width: '100%',
      alignItems: 'flex-start',
    };
    const containerStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/RSVP_box.jpg)`,
      backgroundSize: '165%',
      backgroundRepeatY: 'repeat',
    };
    return (
      <div className="rsvp-container">
        <div className="rsvp-form-container" style={containerStyle}>
          <div className="rsvp-form-title">Enter in your full name to search for your RSVP.</div>
          <form className="rsvp-form" onSubmit={this.onSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.onChange}
                  placeholder="First Name"
                  autoComplete="off"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.onChange}
                  placeholder="Last Name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="rsvp-form-btn">
              <button className="btn btn-primary" type="submit">Search</button>
            </div>
          </form>
          {isLoading ? <Spinner style={spinnerStyle} /> : ''}
          {guests}
        </div>
      </div>
    );
  }
}

// <button onClick={this.addGuest} className="btn btn-primary" type="button">Add Guest</button>

export default RSVPSearch;
