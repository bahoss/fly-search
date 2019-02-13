import React, { Component } from "react";
import { Header, Icon, Segment, Dropdown } from "semantic-ui-react";
import "./App.styled.scss";

const currency = [
  { text: "RUR", value: "RUR" },
  { text: "USD", value: "USD" },
  { text: "EUR", value: "EUR" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: ""
    };
  }

  changeCurrency = (e, { value }) => {
    this.setState({ currency: value });
  };
  render() {
    return (
      <div className="wrapper">
        <Header as="h2" attached="top">
          <Icon name="search" />
          <Header.Content>Поиск</Header.Content>
        </Header>
        <Segment attached>
          <Dropdown
            placeholder="Валюта"
            compact
            options={currency}
            onChange={this.changeCurrency}
            selection
            value={this.state.value}
          />
        </Segment>
      </div>
    );
  }
}

export default App;
