import React from 'react';
import { BrowserRouter, Route, Switch, BrowserRouter as hashHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import Menu from './components/Menu';
import Products from './components/pages/Products';
import './stylesheets/css/cymbio-ic/style.css';
import './stylesheets/css/fonts.css';
import './stylesheets/sass/custom-media-grid.scss';
import './stylesheets/css/grid/bootstrap.css';
import './stylesheets/sass/App.scss';
import HomeContainer from './containers/pages/HomeContainer';
import store from './store/createStore';
import SignInContainer from './containers/pages/SignInContainer';
import SignOutContainer from './containers/pages/SignOutContainer';
import SingleRetailerContainer from './containers/pages/SingleRetailerContainer';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route history={hashHistory} component={Menu} />
        <Switch>
          <Route
            exact
            path="/cymbio-digital/"
            component={HomeContainer}
          />
          <Route
            exact
            path="/cymbio-digita/home"
            component={HomeContainer}
          />
          <Route
            exact path="/signin"
            component={SignInContainer}
          />
          <Route
            exact path="/signout"
            component={SignOutContainer}
          />
          <Route
            exact path="/cymbio-digital/products"
            component={Products}
          />
          <Route
            exact
            path="/cymbio-digitals/approve-retailer/:id"
            component={SingleRetailerContainer}
          />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);


export default hot(module)(App);
