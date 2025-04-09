import {
  insertBook, getBooks, getBookById, updatedBook, deleteBookById,
} from './handler.js';

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: insertBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updatedBook,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookById,
  },
];

export default routes;
