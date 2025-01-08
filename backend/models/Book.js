const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  availability: { type: Boolean, default: true }, // true for available, false for not available
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
