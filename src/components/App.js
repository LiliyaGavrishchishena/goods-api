import React, { Component } from 'react';
//components
import FilteredGoodsList from './FilteredGoodsList/FilteredGoodsList';

export default class App extends Component {
  render() {
    return (
      <div>
        <FilteredGoodsList />
      </div>
    );
  }
}
