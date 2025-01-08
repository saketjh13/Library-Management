const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Could not fetch books' });
  }
};

exports.addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Could not add book' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Could not update book' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Could not delete book' });
  }
};
