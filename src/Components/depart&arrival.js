import React, { Component } from "react";
import { Segment, Input, Button } from "semantic-ui-react";
import "./depart&arrival.scss";

class DepartureAirports extends Component {
  delAirport = (e, { name }) => {
    this.props.delAirport("departAirports", name);
  };
  render() {
    return (
      <>
        {this.props.airports.departAirports.length !== 0 &&
          this.props.airports.departAirports.map((item, index) => {
            return (
              <Segment key={`${index}`}>
                <label>{item}</label>
                <Button
                  icon="window close"
                  name={index}
                  onClick={this.delAirport}
                  floated="right"
                />
              </Segment>
            );
          })}
      </>
    );
  }
}

class ArrivalAirports extends Component {
  delAirport = (e, { name }) => {
    this.props.delAirport("arrivalAirports", name);
  };
  render() {
    return (
      <>
        {this.props.airports.arrivalAirports.length !== 0 &&
          this.props.airports.arrivalAirports.map((item, index) => {
            return (
              <Segment key={`${index}`}>
                <label>{item}</label>
                <Button
                  icon="window close"
                  name={index}
                  onClick={this.delAirport}
                  floated="right"
                />
              </Segment>
            );
          })}
      </>
    );
  }
}

class DepartArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departAirports: "",
      arrivalAirports: ""
    };
  }

  getDepartAirports = event => {
    this.setState({ departAirports: event.target.value });
  };

  getArrivalAirports = event => {
    this.setState({ arrivalAirports: event.target.value });
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
              value={this.state.departAirports}
              onChange={this.getDepartAirports}
            />
            <Button
              name="departAirports"
              onClick={this.addAirports}
              icon="plus"
            />
            <DepartureAirports
              airports={this.props.airports}
              delAirport={this.props.deleteAirport}
            />
          </Segment>
          <Segment>
            <label>Прилет</label>
            <Input
              placeholder="Введите аэропорт"
              value={this.state.arrivalAirports}
              onChange={this.getArrivalAirports}
            />
            <Button
              name="arrivalAirports"
              onClick={this.addAirports}
              icon="plus"
            />
            <ArrivalAirports
              airports={this.props.airports}
              delAirport={this.props.deleteAirport}
            />
          </Segment>
        </Segment.Group>
      </Segment>
    );
  }
}
export default DepartArrival;
