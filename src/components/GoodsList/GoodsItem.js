/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';

const GoodsItem = ({ item, sortedPrice, sortedCategory }) => (
  <>
    <td onClick={sortedCategory}>{item.bsr_category}</td>
    <td>{item.name}</td>
    <td onClick={sortedPrice}>{item.price}</td>
    <td>{item.currency}</td>
  </>
);

export default GoodsItem;
