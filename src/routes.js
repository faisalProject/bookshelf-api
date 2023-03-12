import { addBook, readAllBooks, readBookById } from './handler.js'

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook
  },
  {
    method: 'GET',
    path: '/books',
    handler: readAllBooks
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: readBookById
  }
]

export default routes
