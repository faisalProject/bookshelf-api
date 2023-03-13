import { addBook, readAllBooks, readBookById, updatedBook, deleteBookById } from './handler.js'

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
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updatedBook
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookById
  }
]

export default routes
