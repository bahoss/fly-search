import React, { Component } from "react";
import { Header, Icon, Segment, Dropdown } from "semantic-ui-react";

const currency = [
  { text: "RUR", value: "RUR" },
  { text: "USD", value: "USD" },
  { text: "EUR", value: "EUR" }
];

class HeaderCurr extends Component {
  render() {
    return (
      <>
        <Header as="h2" attached="top">
          <Icon name="search" />
          <Header.Content>Поиск</Header.Content>
        </Header>
        <Segment attached>
          <Dropdown
            placeholder="Валюта"
            compact
            options={currency}
            onChange={this.props.changeCurrency}
            selection
            value={this.props.value}
          />
        </Segment>
      </>
    );
  }
}

export default HeaderCurr;
