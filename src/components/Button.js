
import React, { Component } from 'react';

export default class Button extends Component {

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
      <button onClick={this.onClickButton}>Clicked {this.state.count}</button>
    );
  };

}
