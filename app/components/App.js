const React = require('react');

const ReactRouter = require('react-router-dom');

const Router = ReactRouter.BrowserRouter;

const { Route, Switch } = ReactRouter;
const Nav = require('./Nav');

const Popular = require('./Popular');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />

          <Switch>

            <Route path="/popular" component={Popular} />
            <Route render={
              () => <p className="loading">Not Found</p>
            }
            />
          </Switch>
        </div>
      </Router>
    );
  }

}

module.exports = App;
