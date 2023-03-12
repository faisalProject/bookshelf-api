import { nanoid } from 'nanoid'
import books from './books.js'

const addBook = (request, h) => {
  // request by user
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload
  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal ditambahkan, mohon isi nama buku!'
    })

    response.code(400)
    return response
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal ditambahkan, read page tidak boleh lebih besar dari page count!'
    })

    response.code(400)
    return response
  }

  let finished = false
  readPage === pageCount ? finished = true : finished = false

  // by system
  const id = nanoid(16)
  const createdAt = new Date().toLocaleString()
  const updatedAt = createdAt

  const newBook = { id, name, year, author, summary, publisher, pageCount, readPage, reading, finished, createdAt, updatedAt }
  books.push(newBook)

  const isSuccess = books.filter(b => b.id === id).length > 0
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id
      }
    })

    response.code(201)
    return response
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal ditambahkan'
  })

  response.code(500)
  return response
}

const readAllBooks = () => ({
  status: 'success',
  data: {
    books: books.map(b => ({
      id: b.id,
      name: b.name,
      publisher: b.publisher
    }))
  }
})

const readBookById = (request, h) => {
  const { id } = request.params

  const book = books.filter(b => b.id === id)[0]
  if (book !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        book
      }
    })

    response.code(200)
    return response
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan'
  })

  response.code(404)
  return response
}

export { addBook, readAllBooks, readBookById }
