/**
 * IN THIS FILE:
*/

import React, {Component} from 'react';
import LifeCycleReporter from './LifeCycleReporter';


export default class LifeCycleExample extends Component{

  constructor() {
    super();
    this.lifeCycleOutput = [];
    this.state = {
      mount: true
    }
  }

  toggleMount() {
    this.lifeCycleOutput.push(<hr key={this.lifeCycleOutput.length+1} />);
    this.setState({mount: !this.state.mount}) ;
  }

  onLifeCycleHook(msg) {
    console.log(msg);
    // this.lifeCycleOutput.push(<li key={this.lifeCycleOutput.length+1}>{msg}</li>);
  }

  render() {
    return(
      <div className="component">
        <button onClick={ this.toggleMount.bind(this) }>mount/unmount</button>

        {
          this.state.mount &&
          <LifeCycleReporter onLifeCycleHook={ this.onLifeCycleHook.bind(this) } />
        }
      </div>
    );
  }
}
