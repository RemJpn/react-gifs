import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    console.log(event.target.value);
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
