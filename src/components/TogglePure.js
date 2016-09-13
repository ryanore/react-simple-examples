/**
 * IN THIS FILE:
 * - A pure functional component.
 * - no state used, just relies on props and a callback
 *
 * - This means no lifecycle methods!!
 * - http://jaketrent.com/post/react-stateless-components-missing/
 */
import React, {Component} from 'react';

const PureToggle = (props) =>{

  return(
    <div className="toggle component">
      <p>Props Toggled = {props.toggled.toString()}</p>
      <button onClick={props.onToggle}>Toggle Me</button>
    </div>
  );
};

export default PureToggle;
