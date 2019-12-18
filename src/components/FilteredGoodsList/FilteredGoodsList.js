import React, { Component } from 'react';
// components
import SearchBar from '../SearchBar/SearchBar';
import GoodsList from '../GoodsList/GoodsList';

const INITIAL_STATE = {
  goodsList: [],
  error: false,
  filter: ''
};

export default class FilteredList extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.getGoodsList();
  }

  getGoodsList = async () => {
    try {
      const response = await fetch('https://demo9165932.mockable.io/products');
      if (response.ok) {
        const data = await response.json();
        this.setState({ goodsList: data.products });
      } else {
        // eslint-disable-next-line react/no-unused-state
        this.setState({ error: true });
      }
    } catch (e) {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ error: true });
    }
  };

  handleChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value
    });
  };

  render() {
    const { goodsList, filter } = this.state;

    const filteredGoods = goodsList.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <SearchBar
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        {filteredGoods.length > 0 ? (
          <GoodsList goods={filteredGoods} />
        ) : (
          <h3>Try to change your search</h3>
        )}
      </>
    );
  }
}
