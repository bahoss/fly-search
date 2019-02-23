import React, { Component } from "react";
import { Segment, Label, Icon } from "semantic-ui-react";
import "./airport.scss";

class Airports extends Component {
  delAirport = (e, { value }) => {
    this.props.delAirport(this.props.type, value);
  };
  render() {
    return (
      <div className="airportsitem">
        {this.props.airports.map((item, index) => {
          return (
            <Label key={`${index}`}>
              {item}
              <Icon name="delete" value={index} onClick={this.delAirport} />
            </Label>
          );
        })}
      </div>
    );
  }
}

export default Airports;
