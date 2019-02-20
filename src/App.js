import React, { Component } from "react";
import HeaderCurr from "./Components/Header";
import DepartArrival from "./Components/Airports";
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
    this.setState(prevState => ({
      airports: {
        ...prevState.airports,
        [type]: prevState.airports[type].concat(airport)
      }
    }));
  };

  deleteAirport = (type, index) => {
    this.setState(prevState => ({
      airports: {
        ...prevState.airports,
        [type]: this.state.airports[type].filter(
          (airport, idx) => idx !== index
        )
      }
    }));
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
