/**
 * IN THIS FILE:
 * - Using internal state and re-rendering each time count state changes
 */
import React, { Component } from 'react';

export default class CountButton extends Component {

  constructor(props) {
    super()
    this.state = {count: 0};
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    let c = ++this.state.count;
    this.setState({count:c });
  }

  render() {
    return (
      <div className="component">
        <button onClick={this.onClickButton}>Clicked {this.state.count}</button>
      </div>
    );
  };

}
