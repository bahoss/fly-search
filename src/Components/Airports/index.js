import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import "./airport.scss";
import Airports from "./AirportsItem";

class DepartArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departAirports: "",
      arrivalAirports: ""
    };
  }

  getAirports = (e, { name, value }) => {
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  addAirports = (e, { name }) => {
    this.state[name].length !== 0 &&
      this.props.addAirport(
        name,
        this.state[name].split(" ").filter(str => str.length > 0)
      );
    this.setState({ departAirports: "", arrivalAirports: "" });
  };

  render() {
    const { departAirports, arrivalAirports } = this.props.airports;
    const { deleteAirport } = this.props;
    return (
      <div className="airports">
        <div className="searchbar">
          <label>Вылет</label>
          <Input
            placeholder="Введите аэропорт"
            name="departAirports"
            onChange={this.getAirports}
            value={this.state.departAirports}
          />
          <Button
            color="teal"
            name="departAirports"
            onClick={this.addAirports}
            icon="plus"
          />
          {departAirports.length > 0 ? (
            <Airports
              airports={departAirports}
              delAirport={deleteAirport}
              type="departAirports"
            />
          ) : (
            ""
          )}
        </div>
        <div className="searchbar">
          <label>Прилет</label>
          <Input
            placeholder="Введите аэропорт"
            value={this.state.arrivalAirports}
            onChange={this.getAirports}
            name="arrivalAirports"
          />
          <Button
            color="teal"
            name="arrivalAirports"
            onClick={this.addAirports}
            icon="plus"
          />
          {arrivalAirports.length > 0 ? (
            <Airports
              airports={arrivalAirports}
              delAirport={deleteAirport}
              type="arrivalAirports"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default DepartArrival;
