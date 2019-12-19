import React from 'react';
import { Table } from 'react-bootstrap';
// components
import GoodsItem from './GoodsItem';

const GoodsList = ({ goods = [], sortedPrice, sortedCategory }) => (
  <Table striped bordered hover responsive="md">
    <thead>
      <tr>
        <th onClick={sortedCategory}>Category</th>
        <th>Name</th>
        <th onClick={sortedPrice}>Price</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {goods.map(item => (
        <tr key={item.asin}>
          <GoodsItem
            item={item}
            sortedPrice={sortedPrice}
            sortedCategory={sortedCategory}
          />
        </tr>
      ))}
    </tbody>
  </Table>
);

export default GoodsList;
