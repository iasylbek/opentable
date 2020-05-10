import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import OpenTable from "../../util/Opentable";
import { setBusiness } from "../../bll/appReducer";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.searchOpenTable = this.searchOpenTable.bind(this);
  }
  searchOpenTable(name, address, city) {
    OpenTable.search(name, address, city).then((businesses) => {
      this.props.setBusiness(businesses);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>open table app</h1>
        <SearchBar searchOpenTable={this.searchOpenTable} />
        <BusinessList businesses={this.props.businesses} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    businesses: state.appPage.businesses,
  };
};

export default connect(mapStateToProps, { setBusiness })(App);
