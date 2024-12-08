const express = require('express')
const {
    createBook,
    updateBook,
    deleteBook,
    getAllBooks
} = require('../controller/livroController')

const router = express.Router()

router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)
router.get('/', getAllBooks)

module.exports = router