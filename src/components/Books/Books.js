import React, { Component } from 'react';
import Flexbox from 'components/Flexbox/Flexbox';
import styled from 'styled-components';
import queryString from 'query-string';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

import List from 'components/Books/List';
import Pagination from 'components/Pagination/Pagination';
import { booksApi } from 'api/index';

class Books extends Component {
  state = {
    books: [],
    count: 0,
    page: 1,
    searchTerm: '',
  };

  getCurrentPage = () => {
    const qsValues = queryString.parse(this.props.location.search);
    return (qsValues && parseInt(qsValues.page, 10)) || 1;
  };

  loadData = async () => {
    const { page, searchTerm } = this.state;
    const data = await booksApi.filterBooks(page, searchTerm);
    const { books, count } = data;

    this.setState({ page, books, count });
  };

  paginate = page => {
    this.setState({ page }, () => {
      this.loadData();
      this.props.history.push(`/books?page=${page}`);
    });
  };

  onSearchChange = e => {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
  };

  async componentDidMount() {
    const page = this.getCurrentPage();
    this.setState({ page }, () => {
      this.loadData();
    });
  }

  render() {
    const { books, count, page, searchTerm } = this.state;

    return (
      <Wrapper>
        <FormWrapper flexDirection='column' flex='30'>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter search term"
              aria-label="Enter search term"
              onChange={this.onSearchChange}
              value={searchTerm}
            />
          </InputGroup>
          <Button variant="primary" onClick={this.loadData}>
            Search
          </Button>
        </FormWrapper>
        <TableWrapper flex='80'>
          <List books={books} />
        </TableWrapper>
        <PaginationWrapper flex='80'>
          <Pagination page={page} count={count} onPageChange={this.paginate} />
        </PaginationWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const FormWrapper = styled(Flexbox)`
  margin-left: 2%;
  margin-bottom: 3%;
`;

const TableWrapper = styled(Flexbox)`
  margin-left: 2%;
  margin-bottom: 3%;
`;

const PaginationWrapper = styled(Flexbox)`
  margin-left: 2%;
`;

export default Books;
