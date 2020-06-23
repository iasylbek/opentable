import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
    };
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.addressChangeHandler = this.addressChangeHandler.bind(this);
    this.cityChangeHandler = this.cityChangeHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  nameChangeHandler(event) {
    this.setState({
      name: event.target.value,
    });
  }

  addressChangeHandler(event) {
    this.setState({
      address: event.target.value,
    });
  }

  cityChangeHandler(event) {
    this.setState({
      city: event.target.value,
    });
  }

  searchHandler(event) {
    this.props.searchOpenTable(
      this.state.name,
      this.state.address,
      this.state.city
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-fields">
          <input
            placeholder="Business name"
            onChange={this.nameChangeHandler}
          />
          <input placeholder="Address" onChange={this.addressChangeHandler} />
          <input placeholder="City" onChange={this.cityChangeHandler} />
        </div>
        <div className="SearchBar-submit">
          <button type="submit" onClick={this.searchHandler}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;

