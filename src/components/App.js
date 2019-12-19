import React from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// components
import Header from './Header/Header';
import FilteredGoodsList from './FilteredGoodsList/FilteredGoodsList';

const App = () => (
  <>
    <Header />
    <FilteredGoodsList />
  </>
);

export default App;
