
import Header from './components/Header';
import Product from './components/Product';
import { Component } from 'react';
import Color from './components/Colors/Color';
import _ from 'lodash';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import  Home from './components/Home';
import Work from './components/QuanLyCongViec/Work';
import './App.css';


class App extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      
    console.log('render app');
      return (
        <div>
        <Router>
        <div>
          <Link></Link>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/color-picker" component={Color} />
        <Route path="/workflow" component={Work} />
       </div>
      </Router>
        </div>
      );
    }
}

export default App;
