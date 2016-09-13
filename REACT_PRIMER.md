# Webpack
Almost all examples you'll find of React are using Webpack and Es6.  
These things are not required but are standard.

#### Webpack is:
- Bundler of static assets.  (rails pipleine?)  
  - Transpile Es6 to Es5
  - Compile SASS/LESS to class
  - Minify,
  - Insert Env Vars
  - Split code modules into common or isolate chunks.
  - Using "Loaders" It can turn pretty much anything into a JS module.


#### Webpack  is Not
  - Task Runner
  - Build Tool

[Here's a pretty solid writeup on the differences &raquo;](http://jamesknelson.com/which-build-system-should-i-use-for-my-javascript-app/)  

<hr />

# Es6
Major improvements made on the language of JS,

I say es6, but they actually changed the name to es2015
Newer spec versions out, but I'll refer to it as es6 because it's simple.

Using webpack and babel.js we can transpile es6 into something our stupid browsers understand.

Code Transformation is done through plugins. Though that can be a lot to deal with, so Babel offers Presets to make life easy.
[Read about presets &raquo;]

[Try it out here &raquo;](http://babeljs.io/repl/)  

#### Cool Syntax Sugar
- Too many to go into,

#### Modules
- Importing
- Exporting (default)

#### Classes
  - Constructor

<hr />

## React

### React Dom  (react-dom.js)  
*see src/components/app.js*
- The glue between React and the DOM
- ReactDOM.render(component, el)  
- Separated from react core last year.


### JSX
  - Gives us a clean, xml like way of writing components
  - First you'll hate it, then you'll love it

### React (react.js)
- ##### React.Component
  - Component LifeCycle Hooks
  - props
  - state
  - state v.s. props
  - Stateless Component  (*src/component/TogglePure.js*)

#### Props
Props are attributes, properties that are passed into the component when it's rendered.
Each time the component is rendered, it gets these props anew.

#### State
React thinks of compoenents as simple State Machines  
If the State changes, it re-renders the component in the most efficient way.

**Try to keep as many of your components as possible stateless. **
* isolate the state to its most logical place and minimize redundancy,
* making it easier to reason about your application.

A common pattern is to create several stateless components that just render data, and have a stateful component above them in the hierarchy that passes its state to its children via props. The stateful component encapsulates all of the interaction logic, while the stateless components take care of rendering data in a declarative way.

#### State v.s. Props
- Is it passed in from a parent via props? If so, it  **probably isn't state**.
- Does it remain unchanged over time? If so, it **probably isn't state**.
- Can you compute it based on any other state or props in your component? If so, **it isn't state**.

#### Component LifeCycle  

[Read about lifecycle methods](https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js-aa3796ad85aa#.99s9b57ar)
**mounting**
- componentWillMount()
  - happens before initial render,  only once.
- componentDidMount()
  - happens
- componentWillUnmount()


**updating**  *when receiving props from parent*  
- componentWillReceiveProps()
- shouldComponentUpdate()

**updating**  *when state changes (this.setState)*
- componentWillUpdate()
- render()
- componentDidUpdate()


#### Stateless (pure) components
[some info on the benefits &raquo;](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.qo4ibum1h)


#### Gotchas
- all props must be camelCase.  Even things that you'd

<hr>
#### Resources
- [babel.js](http://babeljs.io)
- [React Dev Tools -  Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
