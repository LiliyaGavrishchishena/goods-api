import React from 'react';
import { Form } from 'react-bootstrap';

const CategorySelector = ({ category = [], handleChangeCategory }) => (
  <Form style={{ width: '100%' }}>
    <Form.Group controlId="categoryForm">
      <Form.Label>Select Category</Form.Label>
      <Form.Control
        as="select"
        style={{ width: '100%' }}
        onChange={handleChangeCategory}
      >
        {category.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  </Form>
);

export default CategorySelector;
