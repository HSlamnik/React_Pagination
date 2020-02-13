import Home from 'components/Home/Home';
import Books from 'components/Books/Books';

export const ITEMS_PER_PAGE = 20;

export const ROUTES = {
  HOME: {
    path: '/',
    title: 'Home',
    Component: Home,
    exact: true
  },
  BOOKS: {
    path: '/books',
    title: 'Books',
    Component: Books,
  },
};
