import React, { Component } from "react";
import HeaderCurr from "./Components/header&currency";
import DepartArrival from "./Components/depart&arrival";
import "./App.styled.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "",
      airports: {
        arrivalAirports: [],
        departAirports: []
      }
    };
  }

  changeCurrency = (e, { value }) => {
    this.setState({ currency: value });
  };

  addAirport = (type, airport) => {
    const join = () => {
      return this.state.airports[type].push(airport);
    };
    this.setState(join);
  };

  deleteAirport = (type, index) => {
    const del = () => {
      const airports = { ...this.state.airports };
      const narray = airports[type];
      narray.splice(index, 1);
      return airports;
    };

    this.setState({ airports: del() });
  };

  render() {
    return (
      <div className="wrapper">
        <HeaderCurr changeCurrency={this.changeCurrency} />
        <DepartArrival
          airports={this.state.airports}
          addAirport={this.addAirport}
          deleteAirport={this.deleteAirport}
        />
      </div>
    );
  }
}

export default App;
