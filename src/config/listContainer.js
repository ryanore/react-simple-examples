/*

There are 2 ways to export in es6 modules:  As a main object, or as named properties.

Usage:  export const listData = []
  This module is making this variable public because I export it.
  We can now import it as a property of this object
  example:  import {listData} from '../config/listContainer';

Usage: export default []
  The object being exported IS the array,
  we can import it without the brackets
  example: import listData from '../config/listContainer';
*/

export const listData = [
// export default [
  [{id: 's1', text: 'Bart'},{id: 's2', text: 'Lisa'},{id: 's3', text: 'Marge'},{id: 's4', text: 'Homer'}],
  [{id: 'g1', text: 'Chris'},{id: 'g2', text: 'Meg'},{id: 'g3', text: 'Stewie'},{id: 'g4', text: 'Lois'},{id: 'g5', text: 'Peter'}],
  [{id: 'f1', text: 'Pebbles'},{id: 'f2', text: 'Fred'},{id: 'f3', text: 'Wilma'}]
];
