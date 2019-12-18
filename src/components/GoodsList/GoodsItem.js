/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

// styles
import styles from './GoodsItem.module.css';

const GoodsItem = ({ item }) => (
  <>
    <td className={styles.td}>{item.asin}</td>
    <td className={styles.td}>{item.name}</td>
    <td className={styles.td}>{item.price}</td>
    <td className={styles.td}>{item.currency}</td>
  </>
);

export default GoodsItem;
