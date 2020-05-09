import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import OpenTable from "../../util/Opentable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [] };
    this.searchOpenTable = this.searchOpenTable.bind(this);
  }
  searchOpenTable(name, address, city) {
    OpenTable.search(name, address, city).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>open table app</h1>
        <SearchBar searchOpenTable={this.searchOpenTable} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
