import React, { Component } from 'react';
import './rsvp-search.css';
import RSVPModal from './rsvp';
import Guests from '../../mock-data/guests';
import { getGuests } from '../../utils/guests';


class RSVPSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      guests: [],
      matchedGuests: []
      noResults: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    let guestList = JSON.parse(window.sessionStorage.getItem('guestList'));
    if (!guestList) {
      getGuests()
      .then(result => {
        window.sessionStorage.setItem('guestList', JSON.stringify(guests))
      })
    }
    this.setState({
      guests: guestList
    });
  }

  onChange(e) {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
  }

  onSubmit(e) {
    e.preventDefault();
    const { searchTerm, guests } = this.state;
    // const matchedGuests = guests.filter( guest => guest.full.toLowerCase().indexOf
    // (searchTerm.toLowerCase()) >= 0);
    const matchedGuests = Guests.guests.filter(guest => guest.full.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
    let noResults = false;
    if (!matchedGuests.length) {
      noResults = true;
    }
    this.setState({ searchTerm: '', matchedGuests , noResults });
  }

  guestList() {
    const { noResults, matchedGuests } = this.state;
    if (noResults) {
      return (
        <div className="no-guest-list">No Results</div>
      );
    }
    const list = matchedGuests.map((guest, i) => (
      <li className="guest-list-item" key={i}>
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
          <div className="input-group">
            <input className="form-control" type="text" value={this.state.searchTerm} onChange={this.onChange} placeholder={'Search for your name'}/>
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit"><i className="fas fa-search"></i></button>
            </div>
          </div>
        </form>
        {guests}
      </div>
    )
  }
}

export default RSVPSearch;