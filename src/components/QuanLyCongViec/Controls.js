
import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Controls extends Component{
  constructor(props) {
    super(props);
  }
    render() {
      return (
        <div className="row mt-15">
            <Search />
            <Sort/>
        </div>
      );
    }
}

export default Controls;