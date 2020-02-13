import axios from 'axios';

import { ITEMS_PER_PAGE } from 'utils/constants';

const filterBooks = async (page = 1, searchTerm = '', itemsPerPage = ITEMS_PER_PAGE) => {
  const filters = [{ type: 'all', values: [searchTerm] }];
  const results = await axios.post(`http://nyx.vima.ekt.gr:3000/api/books`, { page, itemsPerPage, filters });
  return await results.data;
};

export default {
  filterBooks,
};
