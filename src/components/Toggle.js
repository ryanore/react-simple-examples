import React, {Component} from 'react';

export default class Toggle extends Component{

  constructor(props) {
    super();
    this.state = {toggled:false};
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    let toggled = !this.state.toggled;
    this.setState({toggled:toggled});
  }

  render() {
    return(
      <div>
        <p>Toggled: {this.state.toggled.toString()}</p>
        <button onClick={this.onToggle}>Toggle Me</button>
      </div>
    );
  }
}
