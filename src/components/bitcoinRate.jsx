import React, { Component } from "react";
import styles from "../css/bitcoinRate.css";

class BitcoinRate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "https://api.coindesk.com/v1/bpi/currentprice/",
      currency: "usd",
      currencyList: [
        { currName: "United States Dollar", currCode: "usd" },
        { currName: "Euro", currCode: "eur" },
        { currName: "British Pound Sterling", currCode: "gbp" },
        { currName: "Canadian Dollar", currCode: "cad" },
        { currName: "Russian Ruble", currCode: "rub" },
        { currName: "Swedish Krona", currCode: "sek" },
        { currName: "Norwegian Krone", currCode: "nok" },
        { currName: "Australian Dollar", currCode: "aud" },
        { currName: "New Zealand Dollar", currCode: "nzd" }
      ],
      format: ".json",
      result: []
    };
  }

  //aprasytas konstriuktorius. Reikia nurodyt currency kintama reiksme. Reikia suformuluot fetch

  fetchBtcPrice = () => {
    const currencyLink =
      this.state.url + this.state.currency + this.state.format;
    fetch(currencyLink)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error making the request");
        }
      })
      .then(data => {
        const curr = this.state.currency.toUpperCase();
        this.setState({
          result: [
            data.disclaimer,
            "Bitcoin price at the moment: " + data.bpi[curr].rate + " " + curr,
            "Time when price was updated: " + data.time.updated
          ]
        });
      });
  };

  setCurrency(currency) {
    this.setState({
      currency: currency
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Check bitcoin price in the currency you prefer</h2>
        <div className="buttons">
          <select
            className="btn btn-secondary btn-sm m-1"
            name="curencyType"
            onChange={e => this.setCurrency(e.target.value)}
          >
            {this.state.currencyList.map(curr => (
              <option
                key={this.state.currencyList.indexOf(curr)}
                value={curr.currCode}
              >
                {curr.currName}
              </option>
            ))}
          </select>
          <button
            className="btn btn-secondary btn-sm m-1"
            onClick={this.fetchBtcPrice}
          >
            Show the price
          </button>
        </div>
        <h4>{this.state.result[1]}</h4>
        <p className="font-small">{this.state.result[2]}</p>
        <p className="font-small">{this.state.result[0]}</p>
      </div>
    );
  }
}

export default BitcoinRate;
