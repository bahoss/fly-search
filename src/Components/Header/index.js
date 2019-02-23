import React, { Component } from "react";
import { Icon, Dropdown } from "semantic-ui-react";
import "./header.styled.scss";

const currency = [
  { text: "RUR", value: "RUR" },
  { text: "USD", value: "USD" },
  { text: "EUR", value: "EUR" }
];

class HeaderCurr extends Component {
  render() {
    return (
      <header>
        <div>
          <Icon name="search" size="big" />
          <span>
            <h1>Поиск</h1>
          </span>
        </div>
        <div className="currency">
          <Dropdown
            compact
            placeholder="Валюта"
            options={currency}
            onChange={this.props.changeCurrency}
            selection
            value={this.props.value}
          />
        </div>
      </header>
    );
  }
}

export default HeaderCurr;
