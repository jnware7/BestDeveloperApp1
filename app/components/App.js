var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');

var Popular = require('./Popular');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />

          <Switch>

            <Route path='/popular' component={Popular} />
            <Route render={function () {
              return <p className='loading'>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
