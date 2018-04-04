var React = require('react');
var ReactDOM = require('react-dom');

var PropTypes = require('prop-types');
require('./index.css');

//state
//lifecycle event
//UI

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.greeting}</h1>
      </div>
    )
  }
}

App.propTypes = {
  greeting: PropTypes.string.isRequired
}

ReactDOM.render(
  <App greeting='Hello world!' />,
  document.getElementById('app')
);
