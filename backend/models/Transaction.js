const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  issueDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  fine: { type: Number, default: 0 },
  status: { type: String, enum: ['issued', 'returned'], default: 'issued' },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
