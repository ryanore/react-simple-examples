/**
 * IN THIS FILE:
 * - importing css as a module.
 * - using state internally and re-rendering each time toggled state changes.
 */
import React, {Component} from 'react';
import css from '../styles/components/_toggle.scss';
export default class Toggle extends Component{

  constructor(props) {
    super();
    this.state = {toggled:false};
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({toggled:!this.state.toggled});
  }

  render() {
    return(
      <div className="toggle component">
        <p>State Toggled = {this.state.toggled.toString()}</p>
        <button onClick={this.onToggle}>Toggle Me</button>
      </div>
    );
  }
}
