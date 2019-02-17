import React, { Component } from "react";
import { Segment, Input, Button } from "semantic-ui-react";
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
    const add = () => {
      const copystate = { ...this.state };
      copystate[name] = value;
      return copystate;
    };
    this.setState(add);
  };

  addAirports = (e, { name }) => {
    this.state[name].length !== 0 &&
      this.props.addAirport(name, this.state[name]);
    this.setState({ departAirports: "", arrivalAirports: "" });
  };

  render() {
    return (
      <Segment attached>
        <Segment.Group horizontal>
          <Segment>
            <label>Вылет</label>
            <Input
              placeholder="Введите аэропорт"
              name="departAirports"
              onChange={this.getAirports}
              value={this.state.departAirports}
            />
            <Button
              name="departAirports"
              onClick={this.addAirports}
              icon="plus"
            />
            <Airports
              airports={this.props.airports.departAirports}
              delAirport={this.props.deleteAirport}
              type="departAirports"
            />
          </Segment>
          <Segment>
            <label>Прилет</label>
            <Input
              placeholder="Введите аэропорт"
              value={this.state.arrivalAirports}
              onChange={this.getAirports}
              name="arrivalAirports"
            />
            <Button
              name="arrivalAirports"
              onClick={this.addAirports}
              icon="plus"
            />
            <Airports
              airports={this.props.airports.arrivalAirports}
              delAirport={this.props.deleteAirport}
              type="arrivalAirports"
            />
          </Segment>
        </Segment.Group>
      </Segment>
    );
  }
}
export default DepartArrival;
