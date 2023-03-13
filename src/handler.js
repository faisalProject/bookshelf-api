import { nanoid } from 'nanoid'
import books from './books.js'

const addBook = (request, h) => {
  // request by user
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload
  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal ditambahkan, nama buku harus diisi!'
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

const updatedBook = (request, h) => {
  const { id } = request.params
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload
  const updatedAt = new Date().toLocaleString()

  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal diperbarui, nama buku harus diisi'
    })

    response.code(400)
    return response
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal diperbarui, read page tidak boleh lebih besar dari page count'
    })

    response.code(400)
    return response
  }

  let finished = false
  readPage === pageCount ? finished = true : finished = false

  const index = books.findIndex(b => b.id === id)
  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished,
      updatedAt
    }

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui'
    })

    response.code(200)
    return response
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal diperbarui, id tidak ditemukan!'
  })

  response.code(404)
  return response
}

const deleteBookById = (request, h) => {
  const { id } = request.params

  const index = books.findIndex(b => b.id === id)
  if (index !== -1) {
    books.splice(index, 1)

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus'
    })

    response.code(200)
    return response
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus, id tidak ditemukan'
  })

  response.code(404)
  return response
}

export { addBook, readAllBooks, readBookById, updatedBook, deleteBookById }
