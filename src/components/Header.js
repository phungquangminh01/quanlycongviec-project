

import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    console.log('Counter constructor');
  }
  render() {
    console.log("COunter render");
    return (
        <nav className="navbar navbar-inverse">
            <a className="navbar-brand" href="#">Bài 2: Component</a>
            <ul className="nav navbar-nav">
                <li className="active">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/color-picker">Color Pickker</Link>
                </li>
                <li>
                    <Link to="/workflow">Quản Lý Công Việc</Link>
                </li>
            </ul>
        </nav>
      );
    }

    componentDidMount() {
      console.log('Counter did mount');
    }

    componentDidUpdate() {
      console.log('Counter did update');
    }

    componentWillUnmount() {
      console.log('COunt will unmount');
    }

    shouldComponentUpdate() {
      // only reder when return true
    }
  }

export default Header;
