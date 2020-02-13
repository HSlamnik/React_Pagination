import React from 'react';
import { Table } from 'react-bootstrap';

import Flexbox from 'components/Flexbox/Flexbox';
import ListItem from 'components/Books/ListItem';

const List = ({ books }) => {
  return (
    <Flexbox flex="100" justifyContent="center">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publication City</th>
            <th>Publication Country</th>
            <th>Publication Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => {
            return <ListItem book={book} key={i} />;
          })}
        </tbody>
      </Table>
    </Flexbox>
  );
};

export default List;
