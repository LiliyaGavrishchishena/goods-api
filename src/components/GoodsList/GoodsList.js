import React from 'react';
// components
import GoodsItem from './GoodsItem';
// styles
import styles from './GoodsList.module.css';

const GoodsList = ({ goods = [] }) => (
  <table className={styles.list}>
    <caption className={styles.head}>Goods List</caption>
    <thead className={styles.thead}>
      <tr>
        <th className={styles.th}>#</th>
        <th className={styles.th}>Name</th>
        <th className={styles.th}>Price</th>
        <th className={styles.th}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {goods.map(item => (
        <tr key={item.asin}>
          <GoodsItem item={item} />
        </tr>
      ))}
    </tbody>
  </table>
);

export default GoodsList;
