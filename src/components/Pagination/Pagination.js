import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

import { ITEMS_PER_PAGE } from 'utils/constants';

const Pagination = ({ page, count, onPageChange }) => {
  let items = [];

  let minPage = page - 2;

  let maxPage = page + 9;

  for (let number = 1; number <= count / ITEMS_PER_PAGE; number++) {
      
    items.push(
      <BootstrapPagination.Item key={number} active={number === page} onClick={() => onPageChange(number)}>
        {number}
      </BootstrapPagination.Item>
    );
  }

  return(
      <BootstrapPagination>      
        {minPage < 0 ? (
          items.slice(minPage+1, maxPage)
          ) :
          (
            items.slice(minPage, maxPage)
          )
        }
      </BootstrapPagination>
  );
};

export default Pagination;
