import React, {Component} from 'react';

export default class List extends Component{

  render() {
    const results = this.props.list;
    return(
      <ol>
        {results.map(function(result) {
          return <li key={result.id}>{result.text}</li>;
        })}
      </ol>
    )
  }
}
