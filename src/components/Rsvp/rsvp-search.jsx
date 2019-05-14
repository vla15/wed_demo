import React, { Component } from 'react'
import './rsvp-search.css';
import RSVPModal from './rsvp';


class RSVPSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      guests: []
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ searchTerm: '' })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.searchTerm} onChange={this.onChange}/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
        <RSVPModal/>
      </div>
    )
  }
}

export default RSVPSearch;