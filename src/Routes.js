import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Cart from './pages/Cart/Cart';
import Main from './pages/Main/Main';
import Sign from './pages/Sign/Sign';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Footer from './components/Footer/Footer';

function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/productdetail/" component={ProductDetail} />
        <Route exact path="/list" component={ProductList} />
        <Route exact path="/sign" component={Sign} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
