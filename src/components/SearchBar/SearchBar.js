import React from 'react';
//assets
import search from '../../asssets/search.png';
// styles
import styles from './SearchBar.module.css';

const SearchBar = ({ filter = '', handleChangeFilter }) => (
  <form className={styles.form}>
    <img src={search} alt="Search" className={styles.img} />
    <input
      className={styles.input}
      type="text"
      name="filter"
      value={filter}
      placeholder="Search goods..."
      onChange={handleChangeFilter}
      autoComplete="off"
    />
  </form>
);

export default SearchBar;
