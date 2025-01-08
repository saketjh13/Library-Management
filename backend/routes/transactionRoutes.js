const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// Fetch all books (admin only)
router.get('/', authMiddleware, adminMiddleware, bookController.getAllBooks);

// Fetch book by ID
router.get('/:id', authMiddleware, bookController.getBookById);

// Add a new book (admin only)
router.post('/', authMiddleware, adminMiddleware, bookController.addBook);

// Update a book (admin only)
router.put('/:id', authMiddleware, adminMiddleware, bookController.updateBook);

// Delete a book (admin only)
router.delete('/:id', authMiddleware, adminMiddleware, bookController.deleteBook);

module.exports = router;
