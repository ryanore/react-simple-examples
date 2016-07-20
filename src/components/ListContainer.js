import React, {Component} from 'react';
import List from './List';

export default class ListContainer extends Component{

  constructor(props) {
    super();
    this.state = {
      index: 0,
      lists: [
        [{id: 's1', text: 'Bart'},{id: 's2', text: 'Lisa'},{id: 's3', text: 'Marge'},{id: 's4', text: 'Homer'}],
        [{id: 'g1', text: 'Chris'},{id: 'g2', text: 'Meg'},{id: 'g3', text: 'Stewie'},{id: 'g4', text: 'Lois'},{id: 'g5', text: 'Peter'}],
        [{id: 'f1', text: 'Pebbles'},{id: 'f2', text: 'Fred'},{id: 'f3', text: 'Wilma'}]
      ]
    };
  }

  mixup() {
    const rand = Math.floor(Math.random() *3);
    this.setState({index: rand});
    console.log(this.state.index);
  }

  render() {
    const curList = this.state.lists[this.state.index];
    return(
      <div>
        <button onClick={this.mixup.bind(this)}>Mix It Up!</button>
        <List list={curList} />
      </div>
    );
  }
}
