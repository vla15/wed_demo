import React, { Component } from 'react';
import './rsvp-search.css';
import RSVPModal from './rsvp';
import Guests from '../../mock-data/guests';
import { getGuests, getGuestsByFullName } from '../../utils/guests';


class RSVPSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      firstName: '',
      lastName: '',
      guests: [],
      matchedGuests: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.noResults = false;
  }

  onChange(e) {
    const attr = e.target.name;
    const val = e.target.value;
    this.setState({ [attr]: val });
  }

  async onSubmit(e) {
    e.preventDefault()
    this.noResults = false;
    const { firstName, lastName , guests } = this.state;
    try {
      const guests = await getGuestsByFullName(firstName, lastName);
      this.setState({ matchedGuests: guests });
    } catch (err) {
      this.noResults = true;
    }
  }

  guestList() {
    const { matchedGuests } = this.state;
    if (this.noResults) {
      return (
        <div className="no-guest-list">No Results</div>
      );
    }
    const list = matchedGuests.map(guest => (
      <li className="guest-list-item" key={guest.ref}>
        <div className="guest-name">{guest.full}</div>
        <div className="guest-rsvp-btn"><RSVPModal selectedGuest={guest} /></div>
      </li>
    ));
    return <ul className="guest-list-container">{list}</ul>;
  }
  

  render() {
    const guests = this.guestList();
    return (
      <div className="non-splash-container">
        <form className="mb-2" onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="firstName">First Name</label>
              <input className="form-control" type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} placeholder={'Enter in your first name'} autoComplete={'off'} />
            </div>
            <div className="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input className="form-control" type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} placeholder={'Enter in your last name'} autoComplete={'off'} />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
        {guests}
      </div>
    )
  }
}

export default RSVPSearch;