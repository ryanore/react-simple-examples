/**
 * IN THIS FILE:
 * 	- Composing with this.children, and by passing in a list component
 *
 *  - HOW COULD WE REFACTOR THIS????
 */

import React, {Component} from 'react';
import List from './List';

export default class ListContainer extends Component{

  constructor(props) {
    super();
    this.state = {
      index: 0,
      lists: props.data
    };
  }

  /**
   * Setting state triggers a render
   */
  mixup() {
    let rand = Math.floor(Math.random() * this.state.lists.length);
    this.setState({index: rand});
  }

  /**
   * Render the list each time the button is clicked and the  current index changes
   * Pass in the current list as a prop to the simpler List component
   */
  render() {
    const curList = this.state.lists[this.state.index];
    return(
      <div className="component">
        <button onClick={this.mixup.bind(this)}>Mix It Up!</button>
        <List list={curList} />
        {this.props.children}
      </div>
    );
  }
}
