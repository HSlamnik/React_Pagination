import React from 'react';

const ListItem = ({ book }) => {
    return (
        <tr>
          <td>{book.book_title}</td>
          <td>{book.book_author}</td>
          <td>{book.book_publication_city}</td>
          <td>{book.book_publication_country}</td>
          <td>{book.book_publication_year}</td>
        </tr>
      );
};

export default ListItem;
