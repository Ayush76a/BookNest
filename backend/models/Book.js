const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  copies: { type: Number, required: true },
  image: { type: String }, 
  issued: { type: Boolean, default: false }, 
  lastIssued: { type: Date }, 
});

module.exports = mongoose.model('Book', BookSchema);
