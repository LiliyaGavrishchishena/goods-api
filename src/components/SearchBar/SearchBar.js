import React from 'react';
// bootstrap
import { Form, FormControl } from 'react-bootstrap';

const SearchBar = ({ filter = '', handleChangeFilter }) => (
  <Form inline style={{ width: '100%' }}>
    <Form.Label>Find product</Form.Label>
    <FormControl
      type="text"
      name="filter"
      value={filter}
      placeholder="Search goods..."
      onChange={handleChangeFilter}
      autoComplete="off"
      style={{ width: '100%' }}
    />
  </Form>
);

export default SearchBar;
