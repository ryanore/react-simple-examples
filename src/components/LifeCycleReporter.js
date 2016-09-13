/**
 * IN THIS FILE:
*/

import React, {Component} from 'react';

export default class LifeCycleExample extends Component{

  constructor() {
    super();
    this.state = {count: 0};
  }

  componentWillMount() {
    this.props.onLifeCycleHook('Will Mount');
  }

  componentDidMount() {
    this.props.onLifeCycleHook('Did Mount');
  }

  componentWillUnmount() {
    this.props.onLifeCycleHook('Will Unmount');
  }

  componentWillReceiveProps() {
    this.props.onLifeCycleHook('Will Receive Props');
  }

  shouldComponentUpdate() {
    this.props.onLifeCycleHook('Should update?');
    return true;
  }

  componentWillUpdate() {
    this.props.onLifeCycleHook('Will Update');
  }

  componentDidUpdate() {
    this.props.onLifeCycleHook('Did Update');
  }

  render() {
    this.props.onLifeCycleHook('Rendered');
    return(
      <div
        className="lifecycle-reporter component"
        onClick={ () => this.setState({count: this.state.count+1})}
      >
        <p>Click Me</p>
      </div>
    );
  }
}
