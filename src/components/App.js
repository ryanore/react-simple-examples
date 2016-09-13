import React, { Component } from 'react';
import CountButton from './CountButton';
import Toggle from './Toggle';
import PureToggle from './TogglePure';
import LifeCycleExample from './LifeCycleExample';
import ListContainer from './ListContainer';
import List from './List';
import {listData} from '../config/listContainer';
// import listData from '../config/listContainer';

export default class App extends Component {

  /**
   * es6 Class Constructor.
   * Needed in most cases
   */
  constructor() {
    super();
    this.state = {
      toggle: false
    };
    this.headingStyles = {
      background: '#fff',
      border: '1px solid #eee'
    }
  }

  /**
   * Callback for toggle component
   */
  onToggleExample() {
    this.setState({toggle: !this.state.toggle});
  }


  /**
   * All components must have a render method.
   * - Must return ONE Dom element.
   * - Called automatically when compoenent mounts and when state changes
   */
  render() {

    return (
      // remember to wrap all returned JSX in single parent element for render
      <div className="container main" style={this.state.toggle ? this.headingStyles : null}>
        <h1>Hello React!</h1>
        <p>Here are some simple-ass-components. Feel free to add some contrived examples of your own.</p>

        <div className="component-container">
          <h2>Simple Component</h2>
          <p>A really simple component that just increments it's own counter each time it's clicked.</p>
          <CountButton />
        </div>

        <div className="component-container">
          <h2>Simple Component</h2>
          <p>Another simple component that has it's own state.</p>
            <Toggle />
        </div>

        <div className="component-container">
          <h2>Pure Component</h2>
          <p>A Pure (stateless) Component does <strong>not</strong> extend the React.Component.  It has no state, only props and callbacks.</p>
          <p>This component uses a callback function, which is used to update state on the parent.</p>
            <PureToggle
              toggled={this.state.toggle}
              onToggle={this.onToggleExample.bind(this)}
            />
        </div>

        <div className="component-container">
          <h2>Component Composition</h2>
          <ListContainer data={listData} list={List}>
            <p>This one shows composition!</p>
            <p>The ListContainer takes an array of lists,  and a List component. It also handles the logic for sorting the lists, but it doesn't display the list.</p>
            <p>This text you're reading is actually passed in as `this.props.children` to the component.  Remember, this is actually a function under the guise of JSX.</p>
          </ListContainer>
        </div>

        <div className="component-container">
          <h2>LifeCycle Methods</h2>
          <LifeCycleExample />
        </div>

      </div>
    );
  };

}
