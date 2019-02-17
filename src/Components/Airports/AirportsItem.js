import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";

class Airports extends Component {
  delAirport = (e, { value }) => {
    this.props.delAirport(this.props.type, value);
  };
  render() {
    return (
      <>
        {this.props.airports.length !== 0 &&
          this.props.airports.map((item, index) => {
            return (
              <Segment key={`${index}`}>
                <label>{item}</label>
                <Button
                  color="red"
                  icon="window close"
                  value={index}
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

export default Airports;
