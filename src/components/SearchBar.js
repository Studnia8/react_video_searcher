import React, { Component } from "react";

class SearchBar extends Component {
  state = { searchText: "" };

  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  onFormSubmit = (e) => {
    // prevent page refreshing after submitting the form
    e.preventDefault();
    this.props.onFormSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              placeholder="Type your search video"
              type="text"
              value={this.state.searchText}
              /*onChange will allow me to type anything in input field - w/o it I won't be able to type anything*/
              onChange={this.onSearchChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
