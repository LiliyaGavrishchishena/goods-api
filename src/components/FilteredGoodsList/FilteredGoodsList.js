import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// components
import SearchBar from '../SearchBar/SearchBar';
import GoodsList from '../GoodsList/GoodsList';
import CategorySelector from '../CategorySelector/CategorySelector';

const INITIAL_STATE = {
  goodsList: [],
  error: false,
  filter: '',
  sortedByPriceUp: true,
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
      filter: value,
    });
  };

  handleChangeSortedByPrice = () => {
    const { sortedByPriceUp, goodsList } = this.state;
    const goods = sortedByPriceUp
      ? [].concat(goodsList).sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        })
      : [].concat(goodsList).sort((a, b) => {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          return 0;
        });
    this.setState({
      goodsList: goods,
      sortedByPriceUp: !sortedByPriceUp,
    });
  };

  render() {
    const { goodsList, filter } = this.state;

    const filteredGoods = goodsList.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <>
        <Container>
          <Row>
            <Col md={3} sm={3}>
              <CategorySelector />
            </Col>
            <Col md={9} sm={9}>
              <Row>
                <SearchBar
                  filter={filter}
                  handleChangeFilter={this.handleChangeFilter}
                />
              </Row>
              {filteredGoods.length > 0 ? (
                <GoodsList
                  goods={filteredGoods}
                  sortedPrice={this.handleChangeSortedByPrice}
                />
              ) : (
                <h3>Try to change your search</h3>
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
