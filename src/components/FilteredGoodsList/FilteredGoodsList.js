import React, { Component } from 'react';
// bootstrap
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
  category: [],
  activeCategory: 'All',
  sortedByPriceUp: true,
  sortedByCategoryUp: true,
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
        const uniqueCategory = [
          'All',
          ...new Set(data.products.map(item => item.bsr_category)),
        ];

        this.setState({ goodsList: data.products, category: uniqueCategory });
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

  handleChangeCategory = ({ target: { value } }) => {
    this.setState({
      activeCategory: value,
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

  handleChangeSortedByCategory = () => {
    const { sortedByCategoryUp, goodsList } = this.state;
    const goods = sortedByCategoryUp
      ? [].concat(goodsList).sort((a, b) => {
          if (a.bsr_category < b.bsr_category) {
            return -1;
          }
          if (a.bsr_category > b.bsr_category) {
            return 1;
          }
          return 0;
        })
      : [].concat(goodsList).sort((a, b) => {
          if (a.bsr_category > b.bsr_category) {
            return -1;
          }
          if (a.bsr_category < b.bsr_category) {
            return 1;
          }
          return 0;
        });
    this.setState({
      goodsList: goods,
      sortedByCategoryUp: !sortedByCategoryUp,
    });
  };

  render() {
    const { goodsList, filter, category, activeCategory } = this.state;

    const filteredGoods =
      activeCategory === 'All'
        ? goodsList.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase()),
          )
        : goodsList
            .filter(item => item.bsr_category === activeCategory)
            .filter(item =>
              item.name.toLowerCase().includes(filter.toLowerCase()),
            );
    return (
      <>
        <Container>
          <Row>
            <Col
              xl={2}
              md={3}
              col={12}
              style={{
                padding: '10px',
              }}
            >
              <Row style={{ padding: '10px' }}>
                <SearchBar
                  filter={filter}
                  handleChangeFilter={this.handleChangeFilter}
                />
              </Row>
              <Row style={{ padding: '10px' }}>
                <CategorySelector
                  category={category}
                  handleChangeCategory={this.handleChangeCategory}
                />
              </Row>
            </Col>

            <Col xl={10} md={5} col={12} style={{ padding: '10px' }}>
              {filteredGoods.length > 0 ? (
                <GoodsList
                  goods={filteredGoods}
                  sortedPrice={this.handleChangeSortedByPrice}
                  sortedCategory={this.handleChangeSortedByCategory}
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
