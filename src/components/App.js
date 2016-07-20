import React, { Component } from 'react';
import Button from './Button';
import Toggle from './Toggle';
import ListContainer from './ListContainer';
import List from './List';

export default class App extends Component {
  render() {
    return (
      // remember to wrap all returned JSX in single parent element for render
      <div className="container">
        <h1>Hello React!</h1>
        <p>Here are some simple-ass-components. Feel free to add some contrived examples of your own.</p>
        <hr />
        <h2>Button++</h2>
        <Button />
        <hr />
        <h2>Toggle</h2>
        <Toggle />
        <hr />
        <h2>List</h2>
        <ListContainer list={List} />
      </div>
    );
  };

}
